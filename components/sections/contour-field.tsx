export default function ContourField({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] animate-drift opacity-[0.35]"
        viewBox="0 0 800 800"
        fill="none"
      >
        {[80, 130, 180, 230, 280, 330].map((r, i) => (
          <circle
            key={r}
            cx="400"
            cy="420"
            r={r}
            stroke={i % 2 === 0 ? '#C9A24B' : '#5C7A52'}
            strokeOpacity={0.5 - i * 0.05}
            strokeWidth="1"
            style={{
              transform: `translate(${i * 6}px, ${-i * 10}px)`,
            }}
          />
        ))}
        {[60, 110, 160, 210].map((r, i) => (
          <circle
            key={`b-${r}`}
            cx="600"
            cy="180"
            r={r}
            stroke="#C9A24B"
            strokeOpacity={0.3 - i * 0.05}
            strokeWidth="1"
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
    </div>
  );
}
