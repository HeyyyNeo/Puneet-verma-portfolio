import { Nav } from "../page";
import { ProjectBlock } from "../page";
import Indexing from "./indexing";

const PROJECTS = [
  {
    number: "01",
    tag: "",
    title: "Corporate Pursuit Proposal Decks",
    body: "Pitch and proposal deck design supporting corporate pursuits and client-facing business development.",
    images: [
      "./steadfast-1.png",
      "./dubai-2.png",
      "./coffee-3.png",
      "./template-4.png",
    ],
  },
  {
    number: "02",
    tag: "",
    title: "Client Experience Creatives",
    body: "Design work created to elevate the client visit and engagement experience — from print collateral to on-site branded video.",
    images: ["./creatives.png"],
    videos: [
      "youtube.com/watch?si=384gv8HvGkRG6sHi&v=Yb1XLVBTj14&feature=youtu.be",
    ],
  },
  {
    number: "03",
    tag: "",
    title: "Coforge Sustainability Report",
    body: "World Environment Day campaign artwork created as part of Coforge's #NowForClimate sustainability communication.",
    images: [
      "./sustain-1.png",
      "./sustain-2.png",
      "./sustain-3.png",
      "./sustain-4.png",
    ],
  },
  {
    number: "04",
    tag: "Design Systems & Templates",
    title: "Frameworks that scale storytelling across teams.",
    body: "Established a strategic design and storytelling framework that transformed proposal development into a cohesive, visually engaging experience—improving quality, reinforcing brand consistency, and enabling faster delivery under tight business deadlines.",
    images: [
      "/template-1.png",
      "/template-2.png",
      "./template-3.png",
      "./template-4.png",
    ],
  },
];

function Page() {
  return (
    <>
      <Nav />
      <section id="work">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-40">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                (01) A showcase of design & creative work
              </div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance">
                Creative portfolio
              </h2>
            </div>
            <span className="hidden md:block text-sm text-muted-foreground">
              Puneet Verma Senior Director, Design & Marketing | Interview
              Presentation
            </span>
          </div>
          <Indexing />
        </div>
        {PROJECTS.map((p, i) => (
          <ProjectBlock key={p.number} project={p} index={i} />
        ))}
      </section>
    </>
  );
}

export default Page;
