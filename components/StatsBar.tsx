const STATS = [
  { value: "38%", label: "of clinic calls go unanswered" },
  { value: "$67K+", label: "lost annually per practice" },
  { value: "14 Days", label: "from kickoff to live AI agent" },
  { value: "24/7", label: "coverage with zero overtime" },
];

export default function StatsBar() {
  return (
    <section className="stats" aria-label="Key statistics">
      <div className="wrap stats__grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <b className="text-gradient">{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
