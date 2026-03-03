"use client";

/**
 * Fitzherbert University — Interactive 3D Campus Map
 *
 * A Three.js isometric-view campus with clickable buildings,
 * walking NPCs, and a mini-Professor guide.
 */

import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";

// ── Building data ────────────────────────────────────────────────

interface BuildingData {
  name: string;
  shortName: string;
  icon: string;
  position: [number, number, number];
  size: [number, number, number];
  colour: string;
  roofColour: string;
  link: string;
  description: string;
}

const BUILDINGS: BuildingData[] = [
  {
    name: "Heritage Quad",
    shortName: "Heritage\nQuad",
    icon: "🏛",
    position: [0, 0, 0],
    size: [3.5, 2.2, 3.5],
    colour: "#8B7355",
    roofColour: "#5C4033",
    link: "/campus",
    description:
      "Chancellor's Office, Constitutional Chamber. Founded 1783.",
  },
  {
    name: "Wycliffe Library",
    shortName: "Wycliffe\nLibrary",
    icon: "📚",
    position: [5.5, 0, -1],
    size: [3, 2.5, 2.2],
    colour: "#7A6652",
    roofColour: "#4E3B2A",
    link: "/campus",
    description: "62,000 volumes. Merkle-verified digital registry.",
  },
  {
    name: "Voss Computing Centre",
    shortName: "Voss\nComputing",
    icon: "⬢",
    position: [-5.5, 0, -1],
    size: [3.2, 1.8, 2.5],
    colour: "#3A506B",
    roofColour: "#1B2838",
    link: "/research",
    description: "GPU clusters. Deterministic rendering. IPFS archive.",
  },
  {
    name: "Langford Governance Lab",
    shortName: "Langford\nGov. Lab",
    icon: "⬡",
    position: [-3.5, 0, 5],
    size: [2.8, 1.6, 2.2],
    colour: "#4A5568",
    roofColour: "#2D3748",
    link: "/governance",
    description: "Constitutional AI research. Four-Gate Validation.",
  },
  {
    name: "Chen Cryptography Wing",
    shortName: "Chen\nCrypto Wing",
    icon: "◈",
    position: [4, 0, 5],
    size: [2.5, 1.5, 2],
    colour: "#2C3E50",
    roofColour: "#1A252F",
    link: "/research",
    description: "Air-gapped labs. ZK-proof development.",
  },
  {
    name: "Caldwell Publishing Lab",
    shortName: "Caldwell\nPublishing",
    icon: "◇",
    position: [7, 0, 4],
    size: [2.2, 1.4, 1.8],
    colour: "#556B2F",
    roofColour: "#3B4F1A",
    link: "/documents",
    description: "Edition Manifest. Deterministic rendering.",
  },
  {
    name: "Epoch Commons",
    shortName: "Epoch\nCommons",
    icon: "🏢",
    position: [-6, 0, 4.5],
    size: [2.8, 1.5, 2.8],
    colour: "#6B4226",
    roofColour: "#4A2E1A",
    link: "/epochs",
    description: "Student hub. Dining. Governance Forum.",
  },
  {
    name: "Alignment Theatre",
    shortName: "Alignment\nTheatre",
    icon: "🎭",
    position: [0, 0, -5.5],
    size: [3, 2, 2.5],
    colour: "#7A0019",
    roofColour: "#500011",
    link: "/campus",
    description: "300-seat auditorium. Epoch ceremonies.",
  },
];

// ── Ground plane ─────────────────────────────────────────────────

function Ground() {
  return (
    <group>
      {/* Main grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[30, 25]} />
        <meshStandardMaterial color="#4A7C59" />
      </mesh>

      {/* Heritage Quad courtyard */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[4.5, 4.5]} />
        <meshStandardMaterial color="#C8B896" />
      </mesh>

      {/* Paths */}
      {[
        { pos: [0, 0.02, -3] as [number, number, number], size: [1, 3] as [number, number] },
        { pos: [0, 0.02, 3] as [number, number, number], size: [1, 3] as [number, number] },
        { pos: [3, 0.02, 0] as [number, number, number], size: [3, 0.8] as [number, number] },
        { pos: [-3, 0.02, 0] as [number, number, number], size: [3, 0.8] as [number, number] },
        { pos: [5.5, 0.02, 2] as [number, number, number], size: [0.6, 5] as [number, number] },
        { pos: [-5.5, 0.02, 2] as [number, number, number], size: [0.6, 5] as [number, number] },
      ].map((path, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={path.pos}
        >
          <planeGeometry args={path.size} />
          <meshStandardMaterial color="#B8A88A" />
        </mesh>
      ))}

      {/* Decorative trees */}
      {[
        [3, 0, -3.5],
        [-3, 0, -3.5],
        [3, 0, 3.5],
        [-3, 0, 3.5],
        [8, 0, -3],
        [-8, 0, -3],
        [8, 0, 7],
        [-8, 0, 7],
        [2, 0, 8],
        [-2, 0, 8],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Trunk */}
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 1, 6]} />
            <meshStandardMaterial color="#6B4226" />
          </mesh>
          {/* Canopy */}
          <mesh position={[0, 1.3, 0]}>
            <sphereGeometry args={[0.6, 8, 8]} />
            <meshStandardMaterial color={i % 3 === 0 ? "#2D5A27" : "#3B7A33"} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ── Campus building ──────────────────────────────────────────────

interface BuildingProps {
  data: BuildingData;
  onSelect: (b: BuildingData) => void;
  isSelected: boolean;
}

function Building({ data, onSelect, isSelected }: BuildingProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    if (hovered || isSelected) {
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        0.15,
        0.08
      );
    } else {
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        0,
        0.06
      );
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(data);
  };

  const [w, h, d] = data.size;

  return (
    <group
      ref={groupRef}
      position={data.position}
      onPointerEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
      onClick={handleClick}
    >
      {/* Main body */}
      <mesh position={[0, h / 2, 0]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial
          color={isSelected || hovered ? "#C8A24C" : data.colour}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, h + 0.15, 0]}>
        <boxGeometry args={[w + 0.2, 0.3, d + 0.2]} />
        <meshStandardMaterial color={data.roofColour} />
      </mesh>

      {/* Windows (front face) */}
      {Array.from({ length: Math.floor(w) }).map((_, i) => (
        <mesh
          key={`win-${i}`}
          position={[
            -w / 2 + 0.5 + i * 1.0,
            h * 0.55,
            d / 2 + 0.01,
          ]}
        >
          <planeGeometry args={[0.35, 0.5]} />
          <meshStandardMaterial
            color={hovered || isSelected ? "#FFF8DC" : "#FFE4B5"}
            emissive={hovered || isSelected ? "#FFE4B5" : "#000000"}
            emissiveIntensity={hovered || isSelected ? 0.5 : 0}
          />
        </mesh>
      ))}

      {/* Building label */}
      <Text
        position={[0, h + 0.6, 0]}
        fontSize={0.3}
        color={isSelected ? "#C8A24C" : "#0B1F3B"}
        anchorX="center"
        anchorY="bottom"
        textAlign="center"
        font={undefined}
      >
        {data.shortName}
      </Text>
    </group>
  );
}

// ── Walking NPC professor ────────────────────────────────────────

function WalkingNPC({
  startPos,
  endPos,
  speed,
}: {
  startPos: [number, number, number];
  endPos: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    const ping = (Math.sin(t) + 1) / 2;
    ref.current.position.x =
      startPos[0] + (endPos[0] - startPos[0]) * ping;
    ref.current.position.z =
      startPos[2] + (endPos[2] - startPos[2]) * ping;

    // Face direction of movement
    const dir = Math.cos(t) > 0 ? 1 : -1;
    ref.current.rotation.y = dir > 0 ? 0 : Math.PI;

    // Walking bob
    ref.current.position.y = 0.35 + Math.abs(Math.sin(t * 4)) * 0.05;
  });

  return (
    <group ref={ref} position={[startPos[0], 0.35, startPos[2]]}>
      {/* Body */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 0.4, 8]} />
        <meshStandardMaterial color="#0B1F3B" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.52, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#E8C9A0" />
      </mesh>
      {/* Mortarboard */}
      <mesh position={[0, 0.64, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.2, 0.02, 0.2]} />
        <meshStandardMaterial color="#0B1F3B" />
      </mesh>
    </group>
  );
}

// ── Scene ────────────────────────────────────────────────────────

function CampusScene({
  selected,
  onSelect,
}: {
  selected: BuildingData | null;
  onSelect: (b: BuildingData) => void;
}) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.0} castShadow />
      <directionalLight position={[-5, 8, -5]} intensity={0.3} />

      <Ground />

      {BUILDINGS.map((b) => (
        <Building
          key={b.name}
          data={b}
          onSelect={onSelect}
          isSelected={selected?.name === b.name}
        />
      ))}

      {/* Walking NPCs */}
      <WalkingNPC
        startPos={[-2, 0, 2]}
        endPos={[3, 0, 5]}
        speed={0.35}
      />
      <WalkingNPC
        startPos={[4, 0, -2]}
        endPos={[-4, 0, -1]}
        speed={0.25}
      />
      <WalkingNPC
        startPos={[-5, 0, 0]}
        endPos={[-5, 0, 5]}
        speed={0.4}
      />
      <WalkingNPC
        startPos={[6, 0, 0]}
        endPos={[6, 0, 5]}
        speed={0.3}
      />

      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        maxPolarAngle={Math.PI / 2.3}
        minDistance={5}
        maxDistance={25}
        target={[0, 0, 0]}
      />
    </>
  );
}

// ── Page Component ───────────────────────────────────────────────

export default function CampusMapPage() {
  const [selected, setSelected] = useState<BuildingData | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment to-ivory">
      {/* Header */}
      <div className="text-center py-8 px-4">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
          Interactive Campus
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy">
          3D Campus Map
        </h1>
        <p className="mt-2 text-stone text-sm max-w-xl mx-auto">
          Click any building to learn more. Drag to rotate, scroll to zoom.
          Professors walk the paths between facilities.
        </p>
      </div>

      {/* 3D Viewport */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="w-full aspect-[16/10] border border-gold/20 bg-gradient-to-b from-sky-100 to-sky-200 rounded-xl overflow-hidden shadow-lg">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full text-navy/40 font-serif">
                Rendering campus...
              </div>
            }
          >
            <Canvas
              camera={{ position: [12, 10, 12], fov: 45 }}
              gl={{ antialias: true }}
            >
              <CampusScene
                selected={selected}
                onSelect={setSelected}
              />
            </Canvas>
          </Suspense>
        </div>

        {/* Building info panel */}
        {selected && (
          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-parchment/95 backdrop-blur border border-gold/30 rounded-xl p-5 shadow-xl">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-gold text-xs tracking-widest uppercase">
                  Campus Facility
                </p>
                <h3 className="font-serif text-lg font-bold text-navy">
                  {selected.icon} {selected.name}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-stone/50 hover:text-navy text-lg leading-none"
              >
                ×
              </button>
            </div>
            <p className="text-stone text-sm leading-relaxed mb-3">
              {selected.description}
            </p>
            <Link
              href={selected.link}
              className="inline-flex items-center gap-1 text-xs font-bold text-gold hover:text-navy transition-colors tracking-wide uppercase"
            >
              View details →
            </Link>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {BUILDINGS.map((b) => (
            <button
              key={b.name}
              onClick={() => setSelected(b)}
              className={`text-left p-3 rounded-lg border transition-all ${
                selected?.name === b.name
                  ? "border-gold bg-gold/10"
                  : "border-gold/10 bg-white/50 hover:border-gold/30"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-lg">{b.icon}</span>
                <span className="font-serif text-sm font-bold text-navy">
                  {b.name}
                </span>
              </div>
              <p className="text-stone text-xs leading-snug">
                {b.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
