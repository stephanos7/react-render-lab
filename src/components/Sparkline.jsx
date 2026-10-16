export default function Sparkline({ seed }) {
  const points = Array.from({ length: 30 }, (_, i) => {
    const x = i * 4;
    const y = 20 + Math.sin(i * 0.5 + seed) * 10 + Math.cos(i * 0.9 + seed) * 5;

    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width="120" height="40" viewBox="0 0 120 40" aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke="steelblue"
        strokeWidth="2"
      />
    </svg>
  );
}
