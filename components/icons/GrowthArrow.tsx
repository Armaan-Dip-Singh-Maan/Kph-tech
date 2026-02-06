export default function GrowthArrow() {
  return (
    <svg
      viewBox="0 0 200 180"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back layer - light grey-blue */}
      <path
        d="M30 150 L30 50 L90 20 L150 20 L180 0"
        stroke="#D4DEE7"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Middle layer - medium blue */}
      <path
        d="M40 140 L40 60 L100 35 L155 35 L175 15"
        stroke="#8C9ECE"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Front - bright cyan arrow */}
      <path
        d="M50 130 L50 70 L110 50 L160 50 L185 25"
        stroke="#00FFFF"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrowhead */}
      <path
        d="M175 30 L195 15 L185 25 L185 45 Z"
        fill="url(#arrowGrad)"
      />
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#00BFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
