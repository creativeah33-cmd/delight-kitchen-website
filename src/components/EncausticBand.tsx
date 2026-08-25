/**
 * EncausticBand — SVG repeating black-and-white medallion pattern
 * drawn from the real encaustic tile floor at Delight Kitchen.
 * Used as section dividers and in the footer.
 */
export function EncausticBand({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 480 24"
        preserveAspectRatio="none"
        className="h-6 w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Repeating medallion tile pattern */}
        {Array.from({ length: 20 }).map((_, i) => {
          const x = i * 24;
          return (
            <g key={i} transform={`translate(${x}, 0)`}>
              {/* Outer square */}
              <rect x="1" y="1" width="22" height="22" rx="1"
                    stroke="#1C1815" strokeWidth="0.5" opacity="0.2" />
              {/* Inner diamond */}
              <path d="M12 3 L21 12 L12 21 L3 12 Z"
                    stroke="#1C1815" strokeWidth="0.5" opacity="0.15" />
              {/* Center circle */}
              <circle cx="12" cy="12" r="4"
                      stroke="#1C1815" strokeWidth="0.5" opacity="0.2" />
              {/* Center dot */}
              <circle cx="12" cy="12" r="1.5" fill="#1C1815" opacity="0.1" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
