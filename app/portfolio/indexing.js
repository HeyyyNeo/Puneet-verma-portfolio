const KEY_CONTRIBUTIONS = [
  "Corporate Pursuit Proposal Decks",
  "Client Experience Creatives",
  "Coforge Sustainability Report ",
  "Social Media / LinkedIn Creatives",
];

const spt = [
  "Client-facing pitch design",
  "Visit agenda booklet, invitation card, virtual ODC video",
  "World Environment Day campaign artwork",
  "Brand-led social post design",
];

function Indexing() {
  return (
    <div className="mt-14">
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
        What I'll Cover
      </div>
      <ul className="divide-y divide-black/10 border-black/10">
        {KEY_CONTRIBUTIONS.map((k, i) => (
          <li key={i} className="py-5 flex gap-6 group">
            <span className="font-serif italic text-muted-foreground text-lg w-10 shrink-0">
              0{i + 1}
            </span>
            <span className="text-foreground/90 group-hover:text-foreground transition-colors">
              {k}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Indexing;
