export default function SmartMenuLogo({
  size = 40,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .line {
          stroke: currentColor;
          stroke-width: 6;
          stroke-linecap: round;
          transform-origin: 100px 100px;
          animation: lines 2.4s ease-in-out infinite;
        }

        .lens {
          stroke: currentColor;
          stroke-width: 6;
          fill: none;
          stroke-dasharray: 264;
          stroke-dashoffset: 264;
          animation: lens 2.4s ease-in-out infinite;
        }

        .handle {
          stroke: currentColor;
          stroke-width: 6;
          stroke-linecap: round;
          opacity: 0;
          animation: handle 2.4s ease-in-out infinite;
        }

        @keyframes lines {
          0% { transform: translateY(0); opacity: 1; }
          30% { transform: translateY(var(--move)); opacity: 1; }
          50% { opacity: 0; }
          80% { transform: translateY(var(--move)); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes lens {
          0% { stroke-dashoffset: 264; opacity: 0; }
          35% { opacity: 1; }
          50% { stroke-dashoffset: 0; }
          80% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 264; opacity: 0; }
        }

        @keyframes handle {
          0%, 35% { opacity: 0; }
          50%, 80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <line className="line" style={{ ['--move' as any]: '30px' }} x1="50" y1="70" x2="150" y2="70" />
      <line className="line" style={{ ['--move' as any]: '0px' }} x1="50" y1="100" x2="150" y2="100" />
      <line className="line" style={{ ['--move' as any]: '-30px' }} x1="50" y1="130" x2="150" y2="130" />

      <circle className="lens" cx="100" cy="100" r="42" />
      <line className="handle" x1="130" y1="130" x2="160" y2="160" />
    </svg>
  );
}
