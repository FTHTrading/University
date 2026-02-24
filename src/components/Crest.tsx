/**
 * University Crest — Full heraldic seal with Gothic shield,
 * quartered field, open book, torch, crowned helm, laurel wreath,
 * scroll banner, and founding year.
 */
export function Crest({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 240"
      className={className}
      aria-label="FTHTrading University Crest"
      role="img"
    >
      <defs>
        {/* Metallic gold gradient */}
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4C76B" />
          <stop offset="50%" stopColor="#C8A24C" />
          <stop offset="100%" stopColor="#A68932" />
        </linearGradient>
        {/* Shield depth gradient */}
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E2548" />
          <stop offset="100%" stopColor="#081A30" />
        </linearGradient>
        {/* Maroon quadrant gradient */}
        <linearGradient id="maroonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C001A" />
          <stop offset="100%" stopColor="#6A0014" />
        </linearGradient>
      </defs>

      {/* ── Outer ornamental ring ───────────────── */}
      <ellipse cx="100" cy="115" rx="90" ry="95" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.25" />
      <ellipse cx="100" cy="115" rx="85" ry="90" fill="none" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.15" />

      {/* ── Laurel wreath ───────────────────────── */}
      <g fill="none" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.55">
        {/* Left branch */}
        <path d="M38 170 Q20 140 28 100 Q32 80 42 62" />
        <path d="M35 155 C25 150 22 140 28 132" />
        <path d="M30 140 C20 136 18 126 24 118" />
        <path d="M28 125 C18 122 17 112 23 104" />
        <path d="M30 110 C22 106 22 96 28 90" />
        <path d="M34 96 C28 92 28 82 34 76" />
        {/* Left leaves */}
        <path d="M32 148 C24 150 20 142 26 136" fill="url(#goldGrad)" fillOpacity="0.12" />
        <path d="M28 133 C20 135 16 127 22 121" fill="url(#goldGrad)" fillOpacity="0.12" />
        <path d="M26 118 C18 120 15 112 21 106" fill="url(#goldGrad)" fillOpacity="0.12" />
        <path d="M28 103 C20 105 18 97 24 91" fill="url(#goldGrad)" fillOpacity="0.12" />
        <path d="M32 90 C26 91 24 83 30 78" fill="url(#goldGrad)" fillOpacity="0.12" />
        {/* Right branch */}
        <path d="M162 170 Q180 140 172 100 Q168 80 158 62" />
        <path d="M165 155 C175 150 178 140 172 132" />
        <path d="M170 140 C180 136 182 126 176 118" />
        <path d="M172 125 C182 122 183 112 177 104" />
        <path d="M170 110 C178 106 178 96 172 90" />
        <path d="M166 96 C172 92 172 82 166 76" />
        {/* Right leaves */}
        <path d="M168 148 C176 150 180 142 174 136" fill="url(#goldGrad)" fillOpacity="0.12" />
        <path d="M172 133 C180 135 184 127 178 121" fill="url(#goldGrad)" fillOpacity="0.12" />
        <path d="M174 118 C182 120 185 112 179 106" fill="url(#goldGrad)" fillOpacity="0.12" />
        <path d="M172 103 C180 105 182 97 176 91" fill="url(#goldGrad)" fillOpacity="0.12" />
        <path d="M168 90 C174 91 176 83 170 78" fill="url(#goldGrad)" fillOpacity="0.12" />
      </g>

      {/* ── Shield — Main body ──────────────────── */}
      <path
        d="M100 30 L155 52 L155 125 Q155 168 100 185 Q45 168 45 125 L45 52 Z"
        fill="url(#shieldGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="3"
      />

      {/* Inner shield border (double rule) */}
      <path
        d="M100 38 L149 57 L149 123 Q149 162 100 178 Q51 162 51 123 L51 57 Z"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M100 42 L146 60 L146 121 Q146 158 100 174 Q54 158 54 121 L54 60 Z"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="0.5"
        opacity="0.2"
      />

      {/* ── Quartered field ─────────────────────── */}
      {/* Vertical division */}
      <line x1="100" y1="42" x2="100" y2="174" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.3" />
      {/* Horizontal division */}
      <line x1="54" y1="106" x2="146" y2="106" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.3" />

      {/* Q1 — Top-left: Maroon field with star */}
      <path d="M100 42 L54 60 L54 106 L100 106 Z" fill="url(#maroonGrad)" opacity="0.5" />
      <polygon points="77,72 79,78 86,78 81,82 83,88 77,84 71,88 73,82 68,78 75,78" fill="#C8A24C" opacity="0.8" />

      {/* Q4 — Bottom-right: Maroon field with star */}
      <path d="M100 106 L146 106 L146 121 Q146 158 100 174 Z" fill="url(#maroonGrad)" opacity="0.5" />
      <polygon points="123,132 125,138 132,138 127,142 129,148 123,144 117,148 119,142 114,138 121,138" fill="#C8A24C" opacity="0.8" />

      {/* ── Open Book (centre) ──────────────────── */}
      <g transform="translate(100,95)">
        {/* Left page */}
        <path d="M-3 -12 L-28 -7 L-28 15 L-3 12 Z" fill="#0B1F3B" stroke="#C8A24C" strokeWidth="1.2" />
        {/* Right page */}
        <path d="M3 -12 L28 -7 L28 15 L3 12 Z" fill="#0B1F3B" stroke="#C8A24C" strokeWidth="1.2" />
        {/* Spine */}
        <line x1="0" y1="-14" x2="0" y2="14" stroke="#C8A24C" strokeWidth="1.8" />
        {/* Text lines — left */}
        <line x1="-7" y1="-4" x2="-23" y2="-2" stroke="#C8A24C" strokeWidth="0.4" opacity="0.5" />
        <line x1="-7" y1="0" x2="-23" y2="2" stroke="#C8A24C" strokeWidth="0.4" opacity="0.5" />
        <line x1="-7" y1="4" x2="-23" y2="6" stroke="#C8A24C" strokeWidth="0.4" opacity="0.5" />
        <line x1="-7" y1="8" x2="-23" y2="10" stroke="#C8A24C" strokeWidth="0.4" opacity="0.5" />
        {/* Text lines — right */}
        <line x1="7" y1="-4" x2="23" y2="-2" stroke="#C8A24C" strokeWidth="0.4" opacity="0.5" />
        <line x1="7" y1="0" x2="23" y2="2" stroke="#C8A24C" strokeWidth="0.4" opacity="0.5" />
        <line x1="7" y1="4" x2="23" y2="6" stroke="#C8A24C" strokeWidth="0.4" opacity="0.5" />
        <line x1="7" y1="8" x2="23" y2="10" stroke="#C8A24C" strokeWidth="0.4" opacity="0.5" />
      </g>

      {/* ── Torch of Knowledge (top centre) ─────── */}
      <g transform="translate(100,56)">
        {/* Handle */}
        <rect x="-2" y="0" width="4" height="18" rx="1" fill="#C8A24C" opacity="0.8" />
        {/* Flame */}
        <path d="M0 -8 Q-5 -2 -3 4 Q0 0 0 4 Q0 0 3 4 Q5 -2 0 -8 Z" fill="#C8A24C" opacity="0.9" />
        <path d="M0 -5 Q-2.5 -1 -1.5 3 Q0 1 0 3 Q0 1 1.5 3 Q2.5 -1 0 -5 Z" fill="#E4C76B" opacity="0.7" />
      </g>

      {/* ── Three stars above shield ────────────── */}
      <polygon points="70,38 72,44 78,44 73,48 75,54 70,50 65,54 67,48 62,44 68,44" fill="#C8A24C" opacity="0.7" />
      <polygon points="100,28 102.5,35 110,35 104,39.5 106.5,47 100,42.5 93.5,47 96,39.5 90,35 97.5,35" fill="#C8A24C" opacity="0.85" />
      <polygon points="130,38 132,44 138,44 133,48 135,54 130,50 125,54 127,48 122,44 128,44" fill="#C8A24C" opacity="0.7" />

      {/* ── Crowned helm (top) ──────────────────── */}
      <g transform="translate(100,18)">
        {/* Helm base */}
        <ellipse cx="0" cy="0" rx="14" ry="6" fill="#0B1F3B" stroke="#C8A24C" strokeWidth="1" />
        {/* Crown points */}
        <path d="M-12 -1 L-10 -10 L-6 -4 L0 -12 L6 -4 L10 -10 L12 -1" fill="none" stroke="#C8A24C" strokeWidth="1.2" />
        <circle cx="-10" cy="-10" r="1.5" fill="#C8A24C" />
        <circle cx="0" cy="-12" r="2" fill="#C8A24C" />
        <circle cx="10" cy="-10" r="1.5" fill="#C8A24C" />
      </g>

      {/* ── Year ────────────────────────────────── */}
      <text
        x="100"
        y="152"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="11"
        letterSpacing="4"
        fill="#C8A24C"
      >
        1783
      </text>

      {/* ── Scroll banner ───────────────────────── */}
      <g transform="translate(100,202)">
        {/* Banner ribbon */}
        <path
          d="M-70 -8 Q-55 -14 -40 -8 L-40 8 Q-55 14 -70 8 Z"
          fill="#0B1F3B"
          stroke="url(#goldGrad)"
          strokeWidth="1"
        />
        <path
          d="M-40 -8 L40 -8 L40 8 L-40 8 Z"
          fill="#0B1F3B"
          stroke="url(#goldGrad)"
          strokeWidth="1"
        />
        <path
          d="M40 -8 Q55 -14 70 -8 L70 8 Q55 14 40 8 Z"
          fill="#0B1F3B"
          stroke="url(#goldGrad)"
          strokeWidth="1"
        />
        {/* Motto text */}
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="9"
          letterSpacing="3"
          fill="#C8A24C"
        >
          VERITAS · DISCIPLINA
        </text>
      </g>

      {/* ── Ivy tendrils (corner accents) ────────── */}
      <g stroke="#C8A24C" strokeWidth="0.6" fill="none" opacity="0.18">
        {/* Top-left */}
        <path d="M15 20 Q8 30 12 45 Q10 38 5 42" />
        <path d="M12 45 Q16 55 10 65" />
        {/* Top-right */}
        <path d="M185 20 Q192 30 188 45 Q190 38 195 42" />
        <path d="M188 45 Q184 55 190 65" />
        {/* Bottom-left */}
        <path d="M20 220 Q10 210 14 195 Q12 202 7 198" />
        <path d="M14 195 Q18 185 12 175" />
        {/* Bottom-right */}
        <path d="M180 220 Q190 210 186 195 Q188 202 193 198" />
        <path d="M186 195 Q182 185 188 175" />
      </g>
    </svg>
  );
}
