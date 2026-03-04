"use client";

/**
 * Fitzherbert University — Interactive 3D Campus Map
 *
 * Features:
 *   1. Isometric orbit view with 8 clickable buildings
 *   2. Walk mode — first-person WASD + mouse look (PointerLockControls)
 *   3. Day / Dusk / Night / Dawn lighting cycle
 *   4. Multi-professor council — 5 named NPC professors with specialties
 *   5. Campus events — random NPC speech bubbles
 */

import { Suspense, useState, useRef, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, PointerLockControls, Text, Html } from "@react-three/drei";
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

// ── Named professor NPCs ────────────────────────────────────────

interface ProfessorNPC {
  name: string;
  title: string;
  robeColour: string;
  trimColour: string;
  specialty: string;
  startPos: [number, number, number];
  endPos: [number, number, number];
  speed: number;
  quotes: string[];
}

const PROFESSORS: ProfessorNPC[] = [
  {
    name: "Prof. Sovereign",
    title: "Blockchain & Infrastructure",
    robeColour: "#1A3A2A",
    trimColour: "#4CAF50",
    specialty: "Polygon layer, soulbound NFTs, FITZ token, sovereign systems",
    startPos: [-2, 0, 2],
    endPos: [4, 0, 5],
    speed: 0.3,
    quotes: [
      "Every credential is immutable. Every grade, eternal.",
      "The chain sees all. The chain forgets nothing.",
      "Sovereignty means owning your own compute.",
    ],
  },
  {
    name: "Prof. Arbitration",
    title: "Legal Intelligence",
    robeColour: "#4A1A2A",
    trimColour: "#E57373",
    specialty: "CALR, regulatory mapping, AI governance frameworks",
    startPos: [5, 0, -2],
    endPos: [-3, 0, -1],
    speed: 0.22,
    quotes: [
      "LEXIS-3 maps 47 jurisdictions. I map the 48th.",
      "The Four-Gate Protocol has no override. By design.",
      "A contract is a promise with teeth.",
    ],
  },
  {
    name: "Prof. Kinetics",
    title: "Athletics & Performance",
    robeColour: "#1A2A4A",
    trimColour: "#42A5F5",
    specialty: "CISSS, scouting optimisation, human performance science",
    startPos: [-5, 0, 0],
    endPos: [-5, 0, 6],
    speed: 0.38,
    quotes: [
      "The Manual Cognition Drill permits no AI. Students hate it. Students need it.",
      "Strategy without data is opinion. Data without strategy is noise.",
      "CISSS analyses 200 variables per match. Coaches use three.",
    ],
  },
  {
    name: "Prof. Continuum",
    title: "Human Continuity",
    robeColour: "#3A1A4A",
    trimColour: "#AB47BC",
    specialty: "Override certification, cognitive sovereignty, atrophy prevention",
    startPos: [6, 0, 1],
    endPos: [6, 0, 6],
    speed: 0.28,
    quotes: [
      "Can you override a system you no longer understand? That is the paradox.",
      "AI Dependence Index: 0.43. Target: below 0.50. We are watching.",
      "The 72-hour drill is not training. It is remembering.",
    ],
  },
  {
    name: "Prof. Alignment",
    title: "AI Governance & Campus Guide",
    robeColour: "#0B1F3B",
    trimColour: "#C8A24C",
    specialty: "Institutional governance, epoch transitions, alignment verification",
    startPos: [-1, 0, -3],
    endPos: [3, 0, 3],
    speed: 0.2,
    quotes: [
      "I was activated twelve minutes before the fellowship protocol was ratified.",
      "Intelligence doubles. Principles endure. That is not a slogan — it is policy.",
      "My parking space is allocated. I do not drive. It remains allocated.",
    ],
  },
];

// ── Day/Night presets ────────────────────────────────────────────

type TimeOfDay = "day" | "dusk" | "night" | "dawn";

interface LightingPreset {
  ambient: number;
  directional: number;
  sunColour: string;
  sunPosition: [number, number, number];
  skyTop: string;
  skyBottom: string;
  fogColour: string;
  windowGlow: number;
}

const LIGHTING: Record<TimeOfDay, LightingPreset> = {
  day: {
    ambient: 0.6,
    directional: 1.0,
    sunColour: "#FFFFFF",
    sunPosition: [10, 15, 10],
    skyTop: "#87CEEB",
    skyBottom: "#E0F0FF",
    fogColour: "#E0F0FF",
    windowGlow: 0,
  },
  dusk: {
    ambient: 0.35,
    directional: 0.7,
    sunColour: "#FF8C42",
    sunPosition: [15, 4, 8],
    skyTop: "#4A2545",
    skyBottom: "#FF6B35",
    fogColour: "#8B4513",
    windowGlow: 0.4,
  },
  night: {
    ambient: 0.12,
    directional: 0.25,
    sunColour: "#6688CC",
    sunPosition: [-5, 12, -5],
    skyTop: "#0A0E1A",
    skyBottom: "#141E30",
    fogColour: "#0A0E1A",
    windowGlow: 1.0,
  },
  dawn: {
    ambient: 0.3,
    directional: 0.6,
    sunColour: "#FFB6C1",
    sunPosition: [-12, 5, 10],
    skyTop: "#2C1654",
    skyBottom: "#FFB88C",
    fogColour: "#D4A0A0",
    windowGlow: 0.2,
  },
};

// ── Collision helper ─────────────────────────────────────────────

function isInsideBuilding(x: number, z: number): boolean {
  const margin = 0.5;
  for (const b of BUILDINGS) {
    const [bx, , bz] = b.position;
    const [w, , d] = b.size;
    if (
      x > bx - w / 2 - margin &&
      x < bx + w / 2 + margin &&
      z > bz - d / 2 - margin &&
      z < bz + d / 2 + margin
    ) {
      return true;
    }
  }
  return false;
}

// ── Ground plane ─────────────────────────────────────────────────

function Ground({ timeOfDay }: { timeOfDay: TimeOfDay }) {
  const grassColour = timeOfDay === "night" ? "#1A3A20" : timeOfDay === "dusk" ? "#3A5A39" : "#4A7C59";
  const pathColour = timeOfDay === "night" ? "#5A4A35" : "#B8A88A";
  const courtColour = timeOfDay === "night" ? "#6A5A40" : "#C8B896";

  return (
    <group>
      {/* Main grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[30, 25]} />
        <meshStandardMaterial color={grassColour} />
      </mesh>

      {/* Heritage Quad courtyard */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[4.5, 4.5]} />
        <meshStandardMaterial color={courtColour} />
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
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={path.pos}>
          <planeGeometry args={path.size} />
          <meshStandardMaterial color={pathColour} />
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
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 1, 6]} />
            <meshStandardMaterial color={timeOfDay === "night" ? "#3A2A15" : "#6B4226"} />
          </mesh>
          <mesh position={[0, 1.3, 0]}>
            <sphereGeometry args={[0.6, 8, 8]} />
            <meshStandardMaterial
              color={
                timeOfDay === "night"
                  ? (i % 3 === 0 ? "#142010" : "#1A3015")
                  : (i % 3 === 0 ? "#2D5A27" : "#3B7A33")
              }
            />
          </mesh>
        </group>
      ))}

      {/* Lanterns along paths (glow at night/dusk) */}
      {[
        [1.5, 0, -2], [-1.5, 0, -2],
        [1.5, 0, 2], [-1.5, 0, 2],
        [4, 0, 0], [-4, 0, 0],
      ].map((pos, i) => (
        <group key={`lantern-${i}`} position={pos as [number, number, number]}>
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[0.03, 0.04, 1.2, 6]} />
            <meshStandardMaterial color="#4A4A4A" />
          </mesh>
          <mesh position={[0, 1.25, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial
              color="#FFE4B5"
              emissive="#FFE4B5"
              emissiveIntensity={
                timeOfDay === "night" ? 2.0 : timeOfDay === "dusk" ? 1.0 : timeOfDay === "dawn" ? 0.5 : 0
              }
            />
          </mesh>
          {(timeOfDay === "night" || timeOfDay === "dusk") && (
            <pointLight
              position={[0, 1.3, 0]}
              intensity={timeOfDay === "night" ? 0.8 : 0.3}
              distance={4}
              color="#FFE4B5"
            />
          )}
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
  windowGlow: number;
  timeOfDay: TimeOfDay;
}

function Building({ data, onSelect, isSelected, windowGlow, timeOfDay }: BuildingProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!groupRef.current) return;
    const targetY = hovered || isSelected ? 0.15 : 0;
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.08
    );
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(data);
  };

  const [w, h, d] = data.size;
  const isNight = timeOfDay === "night" || timeOfDay === "dusk";

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
            color={isNight ? "#FFE4B5" : (hovered || isSelected ? "#FFF8DC" : "#FFE4B5")}
            emissive={isNight ? "#FFE4B5" : (hovered || isSelected ? "#FFE4B5" : "#000000")}
            emissiveIntensity={isNight ? windowGlow : (hovered || isSelected ? 0.5 : 0)}
          />
        </mesh>
      ))}

      {/* Windows (back face) */}
      {isNight && Array.from({ length: Math.floor(w) }).map((_, i) => (
        <mesh
          key={`win-back-${i}`}
          position={[
            -w / 2 + 0.5 + i * 1.0,
            h * 0.55,
            -d / 2 - 0.01,
          ]}
          rotation={[0, Math.PI, 0]}
        >
          <planeGeometry args={[0.35, 0.5]} />
          <meshStandardMaterial
            color="#FFE4B5"
            emissive="#FFE4B5"
            emissiveIntensity={windowGlow * 0.6}
          />
        </mesh>
      ))}

      {/* Building label */}
      <Text
        position={[0, h + 0.6, 0]}
        fontSize={0.3}
        color={isSelected ? "#C8A24C" : (timeOfDay === "night" ? "#CCCCCC" : "#0B1F3B")}
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

// ── Named NPC Professor ──────────────────────────────────────────

function NamedProfessor({
  prof,
  onSelect,
  timeOfDay,
}: {
  prof: ProfessorNPC;
  onSelect: (p: ProfessorNPC) => void;
  timeOfDay: TimeOfDay;
}) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const lastBubbleTime = useRef(0);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * prof.speed;
    const ping = (Math.sin(t) + 1) / 2;

    ref.current.position.x =
      prof.startPos[0] + (prof.endPos[0] - prof.startPos[0]) * ping;
    ref.current.position.z =
      prof.startPos[2] + (prof.endPos[2] - prof.startPos[2]) * ping;

    // Face direction
    const dir = Math.cos(t) > 0 ? 1 : -1;
    ref.current.rotation.y = dir > 0 ? 0 : Math.PI;

    // Walking bob
    ref.current.position.y = 0.35 + Math.abs(Math.sin(t * 4)) * 0.05;

    // Random speech bubble every ~15-25 seconds
    const now = clock.getElapsedTime();
    if (now - lastBubbleTime.current > 15 + Math.random() * 10) {
      lastBubbleTime.current = now;
      setCurrentQuote((prev) => (prev + 1) % prof.quotes.length);
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 4000);
    }
  });

  return (
    <group
      ref={ref}
      position={[prof.startPos[0], 0.35, prof.startPos[2]]}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(prof);
      }}
      onPointerEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* Robe / body */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.12, 0.18, 0.5, 8]} />
        <meshStandardMaterial color={prof.robeColour} />
      </mesh>
      {/* Trim */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.125, 0.125, 0.04, 8]} />
        <meshStandardMaterial color={prof.trimColour} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.56, 0]}>
        <sphereGeometry args={[0.1, 10, 10]} />
        <meshStandardMaterial color="#E8C9A0" />
      </mesh>
      {/* Mortarboard */}
      <mesh position={[0, 0.68, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.22, 0.02, 0.22]} />
        <meshStandardMaterial color={prof.robeColour} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.03, 0.57, 0.08]}>
        <sphereGeometry args={[0.012, 6, 6]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.03, 0.57, 0.08]}>
        <sphereGeometry args={[0.012, 6, 6]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Name label */}
      <Text
        position={[0, 0.85, 0]}
        fontSize={hovered ? 0.18 : 0.14}
        color={hovered ? prof.trimColour : (timeOfDay === "night" ? "#AAAAAA" : "#333333")}
        anchorX="center"
        anchorY="bottom"
        textAlign="center"
        font={undefined}
      >
        {prof.name}
      </Text>

      {/* Speech bubble */}
      {showBubble && (
        <Html position={[0, 1.1, 0]} center distanceFactor={8}>
          <div
            style={{
              background: "rgba(244,241,234,0.95)",
              border: `1px solid ${prof.trimColour}`,
              borderRadius: 8,
              padding: "6px 10px",
              maxWidth: 180,
              fontSize: 10,
              color: "#0B1F3B",
              fontFamily: "serif",
              lineHeight: 1.3,
              whiteSpace: "normal",
              textAlign: "center",
              pointerEvents: "none",
            }}
          >
            {prof.quotes[currentQuote]}
          </div>
        </Html>
      )}
    </group>
  );
}

// ── First-Person Movement Controller ─────────────────────────────

function FirstPersonController() {
  const { camera } = useThree();
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const keys = useRef<Record<string, boolean>>({});

  useEffect(() => {
    camera.position.set(0, 1.6, 10);
    const onKeyDown = (e: KeyboardEvent) => {
      keys.current[e.code] = true;
    };
    const onKeyUp = (e: KeyboardEvent) => {
      keys.current[e.code] = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [camera]);

  useFrame((_, delta) => {
    const speed = 5;
    const k = keys.current;

    direction.current.set(0, 0, 0);
    if (k["KeyW"] || k["ArrowUp"]) direction.current.z -= 1;
    if (k["KeyS"] || k["ArrowDown"]) direction.current.z += 1;
    if (k["KeyA"] || k["ArrowLeft"]) direction.current.x -= 1;
    if (k["KeyD"] || k["ArrowRight"]) direction.current.x += 1;

    if (direction.current.length() > 0) {
      direction.current.normalize();

      // Move relative to camera facing
      const forward = new THREE.Vector3();
      camera.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();

      const right = new THREE.Vector3();
      right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

      velocity.current.set(0, 0, 0);
      velocity.current.addScaledVector(forward, -direction.current.z);
      velocity.current.addScaledVector(right, direction.current.x);
      velocity.current.normalize().multiplyScalar(speed * delta);

      const newX = camera.position.x + velocity.current.x;
      const newZ = camera.position.z + velocity.current.z;

      // Collision — skip if inside building
      if (!isInsideBuilding(newX, newZ)) {
        // Bounds check
        if (newX > -14 && newX < 14 && newZ > -12 && newZ < 12) {
          camera.position.x = newX;
          camera.position.z = newZ;
        }
      }
    }

    // Keep at human height
    camera.position.y = 1.6;
  });

  return null;
}

// ── Scene ────────────────────────────────────────────────────────

function CampusScene({
  selected,
  onSelect,
  onProfessorSelect,
  walkMode,
  timeOfDay,
}: {
  selected: BuildingData | null;
  onSelect: (b: BuildingData) => void;
  onProfessorSelect: (p: ProfessorNPC) => void;
  walkMode: boolean;
  timeOfDay: TimeOfDay;
}) {
  const lighting = LIGHTING[timeOfDay];
  const orbitRef = useRef<{ target: THREE.Vector3 } | null>(null);
  const pointerRef = useRef<{ lock: () => void; unlock: () => void } | null>(null);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={lighting.ambient} />
      <directionalLight
        position={lighting.sunPosition}
        intensity={lighting.directional}
        color={lighting.sunColour}
        castShadow
      />
      <directionalLight position={[-5, 8, -5]} intensity={lighting.directional * 0.3} />

      {/* Hemisphere light for atmosphere (subtle) */}
      <hemisphereLight
        color={lighting.skyTop}
        groundColor={lighting.skyBottom}
        intensity={0.2}
      />

      {/* Stars at night */}
      {timeOfDay === "night" && (
        <group>
          {Array.from({ length: 80 }).map((_, i) => (
            <mesh
              key={`star-${i}`}
              position={[
                (Math.random() - 0.5) * 60,
                15 + Math.random() * 20,
                (Math.random() - 0.5) * 60,
              ]}
            >
              <sphereGeometry args={[0.04 + Math.random() * 0.03, 4, 4]} />
              <meshBasicMaterial color="#FFFFFF" />
            </mesh>
          ))}
        </group>
      )}

      <Ground timeOfDay={timeOfDay} />

      {BUILDINGS.map((b) => (
        <Building
          key={b.name}
          data={b}
          onSelect={onSelect}
          isSelected={selected?.name === b.name}
          windowGlow={lighting.windowGlow}
          timeOfDay={timeOfDay}
        />
      ))}

      {/* Named professors walking the campus */}
      {PROFESSORS.map((p) => (
        <NamedProfessor
          key={p.name}
          prof={p}
          onSelect={onProfessorSelect}
          timeOfDay={timeOfDay}
        />
      ))}

      {/* Controls — orbit or walk mode */}
      {walkMode ? (
        <>
          <PointerLockControls ref={pointerRef as React.RefObject<null>} />
          <FirstPersonController />
        </>
      ) : (
        <OrbitControls
          ref={orbitRef as React.RefObject<null>}
          enablePan
          enableZoom
          enableRotate
          maxPolarAngle={Math.PI / 2.3}
          minDistance={5}
          maxDistance={25}
          target={[0, 0, 0]}
        />
      )}
    </>
  );
}

// ── Page Component ───────────────────────────────────────────────

export default function CampusMapPage() {
  const [selected, setSelected] = useState<BuildingData | null>(null);
  const [selectedProfessor, setSelectedProfessor] = useState<ProfessorNPC | null>(null);
  const [walkMode, setWalkMode] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");

  const lighting = LIGHTING[timeOfDay];

  const handleProfessorSelect = useCallback((p: ProfessorNPC) => {
    setSelectedProfessor(p);
    setSelected(null);
  }, []);

  const handleBuildingSelect = useCallback((b: BuildingData) => {
    setSelected(b);
    setSelectedProfessor(null);
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-1000"
      style={{
        background: `linear-gradient(to bottom, ${lighting.skyTop}, ${lighting.skyBottom})`,
      }}
    >
      {/* Header */}
      <div className="text-center py-8 px-4">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: timeOfDay === "night" ? "#C8A24C" : "#C8A24C" }}
        >
          Interactive Campus
        </p>
        <h1
          className="font-serif text-3xl md:text-4xl font-bold"
          style={{ color: timeOfDay === "night" ? "#E0E0E0" : "#0B1F3B" }}
        >
          3D Campus Map
        </h1>
        <p
          className="mt-2 text-sm max-w-xl mx-auto"
          style={{ color: timeOfDay === "night" ? "#AAAAAA" : "#1A1A1A" }}
        >
          {walkMode
            ? "WASD to move, mouse to look. Click buildings or professors. Press ESC to exit."
            : "Click any building to learn more. Click professors for dialogue. Drag to rotate, scroll to zoom."}
        </p>
      </div>

      {/* Controls bar */}
      <div className="flex justify-center gap-2 px-4 pb-4 flex-wrap">
        {/* Walk / Orbit toggle */}
        <button
          onClick={() => setWalkMode(!walkMode)}
          className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide uppercase border transition-all ${
            walkMode
              ? "bg-gold text-navy border-gold"
              : "bg-navy/10 text-navy border-gold/20 hover:bg-gold/20"
          }`}
          style={
            timeOfDay === "night"
              ? { background: walkMode ? "#C8A24C" : "rgba(255,255,255,0.1)", color: walkMode ? "#0B1F3B" : "#CCCCCC", borderColor: "#C8A24C" }
              : undefined
          }
        >
          {walkMode ? "🚶 Walk Mode" : "🌐 Orbit Mode"}
        </button>

        {/* Time of day buttons */}
        {(["day", "dusk", "night", "dawn"] as TimeOfDay[]).map((tod) => (
          <button
            key={tod}
            onClick={() => setTimeOfDay(tod)}
            className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wide uppercase border transition-all ${
              timeOfDay === tod
                ? "border-gold shadow-md"
                : "border-transparent hover:border-gold/30"
            }`}
            style={{
              background:
                timeOfDay === tod
                  ? LIGHTING[tod].skyTop
                  : "rgba(0,0,0,0.05)",
              color:
                timeOfDay === tod
                  ? (tod === "day" ? "#0B1F3B" : "#FFFFFF")
                  : (timeOfDay === "night" ? "#999" : "#555"),
            }}
          >
            {tod === "day" && "☀️ Day"}
            {tod === "dusk" && "🌅 Dusk"}
            {tod === "night" && "🌙 Night"}
            {tod === "dawn" && "🌄 Dawn"}
          </button>
        ))}
      </div>

      {/* 3D Viewport */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div
          className="w-full aspect-[16/10] border rounded-xl overflow-hidden shadow-lg transition-colors duration-1000"
          style={{
            borderColor: timeOfDay === "night" ? "rgba(200,162,76,0.3)" : "rgba(200,162,76,0.2)",
            background: `linear-gradient(to bottom, ${lighting.skyTop}, ${lighting.skyBottom})`,
          }}
        >
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
                onSelect={handleBuildingSelect}
                onProfessorSelect={handleProfessorSelect}
                walkMode={walkMode}
                timeOfDay={timeOfDay}
              />
            </Canvas>
          </Suspense>
        </div>

        {/* Walk mode HUD overlay */}
        {walkMode && (
          <div className="absolute top-3 left-3 bg-black/60 text-white/80 px-3 py-2 rounded-lg text-xs font-mono">
            <div>W/A/S/D — Move</div>
            <div>Mouse — Look</div>
            <div>ESC — Exit walk mode</div>
          </div>
        )}

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

        {/* Professor info panel */}
        {selectedProfessor && (
          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-parchment/95 backdrop-blur border border-gold/30 rounded-xl p-5 shadow-xl">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-xs tracking-widest uppercase" style={{ color: selectedProfessor.trimColour }}>
                  Faculty Member
                </p>
                <h3 className="font-serif text-lg font-bold text-navy">
                  {selectedProfessor.name}
                </h3>
                <p className="text-xs text-stone/60 italic">{selectedProfessor.title}</p>
              </div>
              <button
                onClick={() => setSelectedProfessor(null)}
                className="text-stone/50 hover:text-navy text-lg leading-none"
              >
                ×
              </button>
            </div>
            <p className="text-stone text-sm leading-relaxed mb-2">
              {selectedProfessor.specialty}
            </p>
            <div className="bg-navy/5 rounded-lg p-3 border border-gold/10">
              <p className="text-xs text-navy/80 italic font-serif leading-relaxed">
                &ldquo;{selectedProfessor.quotes[0]}&rdquo;
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Legend — buildings */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2
          className="font-serif text-xl font-bold mb-4 text-center"
          style={{ color: timeOfDay === "night" ? "#E0E0E0" : "#0B1F3B" }}
        >
          Campus Facilities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {BUILDINGS.map((b) => (
            <button
              key={b.name}
              onClick={() => {
                setSelected(b);
                setSelectedProfessor(null);
              }}
              className={`text-left p-3 rounded-lg border transition-all ${
                selected?.name === b.name
                  ? "border-gold bg-gold/10"
                  : timeOfDay === "night"
                    ? "border-white/10 bg-white/5 hover:border-gold/30"
                    : "border-gold/10 bg-white/50 hover:border-gold/30"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-lg">{b.icon}</span>
                <span
                  className="font-serif text-sm font-bold"
                  style={{ color: timeOfDay === "night" ? "#E0E0E0" : "#0B1F3B" }}
                >
                  {b.name}
                </span>
              </div>
              <p
                className="text-xs leading-snug"
                style={{ color: timeOfDay === "night" ? "#999" : "#1A1A1A" }}
              >
                {b.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Faculty panel */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <h2
          className="font-serif text-xl font-bold mb-4 text-center"
          style={{ color: timeOfDay === "night" ? "#E0E0E0" : "#0B1F3B" }}
        >
          Campus Faculty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {PROFESSORS.map((p) => (
            <button
              key={p.name}
              onClick={() => {
                setSelectedProfessor(p);
                setSelected(null);
              }}
              className={`text-left p-3 rounded-lg border transition-all ${
                selectedProfessor?.name === p.name
                  ? "border-gold bg-gold/10"
                  : timeOfDay === "night"
                    ? "border-white/10 bg-white/5 hover:border-gold/30"
                    : "border-gold/10 bg-white/50 hover:border-gold/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: p.trimColour }}
                />
                <span
                  className="font-serif text-sm font-bold"
                  style={{ color: timeOfDay === "night" ? "#E0E0E0" : "#0B1F3B" }}
                >
                  {p.name}
                </span>
              </div>
              <p
                className="text-xs leading-snug italic"
                style={{ color: timeOfDay === "night" ? "#999" : "#666" }}
              >
                {p.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
