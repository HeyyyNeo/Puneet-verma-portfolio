"use client";

import { useEffect, useState, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  MoveRight,
} from "lucide-react";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
  { label: "Portfolio", href: "/portfolio" },
];

const EXPERIENCES = [
  {
    company: "Coforge",
    role: "Division Head — Senior Director",
    location: "Greater Noida, India",
    period: "Aug '25 — July '26",
    points: [
      "Applied GenAI tools to support UX research synthesis, ideation, and rapid design exploration.",
      "Integrated GenAI into product and content workflows to improve usability and delivery efficiency.",
      "Designed user-centered product interfaces and digital assets using Adobe Creative Suite.",
      "Collaborated with stakeholders to translate business requirements into product solutions.",
    ],
  },
  {
    company: "Kyndryl",
    role: "Senior Manager UX/UI Design",
    location: "Hybrid",
    period: "July '24 — Aug '25",
    points: [
      "Led and mentored a team of UX designers, ensuring high-quality, impactful work.",
      "Partnered with product, engineering, and stakeholders to create seamless experiences.",
      "Used research and data to validate ideas and craft outcome-driven solutions.",
    ],
  },
  {
    company: "Ernst & Young LLP",
    role: "Assistant Director — Content Design India Leader",
    location: "Gurgaon",
    period: "Jan '13 — July '24",
    points: [
      "Optimized digital content across ey.com, EY Client Portal, and social properties.",
      "Led the Technical Content team supporting GBB, Discover, and SharePoint sites.",
      "Established a new Content Delivery team in Poland.",
      "Supervised a team of 60+ web developers and producers.",
    ],
  },
  {
    company: "Fidelity",
    role: "Team Leader — Graphic & Web Design",
    location: "Bangalore",
    period: "Sept '06 — Jan '13",
    points: [
      "Directed a development team delivering design solutions for web and print.",
      "Crafted responsive web pages and executive presentations aligned to brand.",
      "Spearheaded internal and external corporate design projects end-to-end.",
    ],
  },
  {
    company: "Deloitte",
    role: "Analyst",
    location: "Hyderabad",
    period: "Oct '05 — Sept '06",
    points: [
      "Designed marketing brochures, posters, and proposals adhering to brand standards.",
      "Created visually compelling PowerPoint presentations for consulting engagements.",
    ],
  },
  {
    company: "A.T. Kearney",
    role: "Graphic Designer",
    location: "Gurgaon",
    period: "Mar '05 — Sept '05",
    points: [
      "Edited and formatted executive PowerPoint presentations for brand consistency.",
      "Collaborated with cross-functional teams to deliver creative outputs on tight timelines.",
    ],
  },
];

export const PROJECTS = [
  {
    number: "01",
    tag: "Executive Pitch Decks",
    title: "Boardroom-grade proposals that win pursuits.",
    body: "From boardroom presentations to multimillion-dollar proposals, I crafted visually compelling narratives that combined strategic thinking, storytelling, and design excellence to influence decisions and create memorable client experiences.",
    images: [
      "./steadfast-1.png",
      "./steadfast-2.png",
      "./steadfast-3.png",
      "./steadfast-4.png",
    ],
  },
  {
    number: "02",
    tag: "Visual Storytelling",
    title: "Complex ideas transformed into clear narratives.",
    body: "Led the creative development of high-impact executive presentations and proposal experiences—transforming complex business ideas into compelling visual narratives that strengthened engagement, reinforced brand identity, and supported strategic business growth.",
    images: [
      "./dubai-1.png",
      "./dubai-2.png",
      "./dubai-3.png",
      "./dubai-4.png",
    ],
  },
  {
    number: "03",
    tag: "RFP / RFI Responses",
    title: "High-impact responses under aggressive timelines.",
    body: "Worked closely with cross-functional teams to create winning proposal responses and executive presentations—translating complex technical information into persuasive client narratives that enhanced engagement and supported successful business pursuits.",
    images: [
      "./coffee-1.png",
      "./coffee-2.png",
      "./coffee-3.png",
      "./coffee-4.png",
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

const KEY_CONTRIBUTIONS = [
  "Developed executive-level pitch decks and proposal experiences aligned with client objectives and brand guidelines.",
  "Transformed complex business solutions into clear, engaging visual stories to improve proposal effectiveness.",
  "Collaborated with SMEs, sales teams, and leadership stakeholders to deliver high-impact RFP responses within aggressive timelines.",
  "Established design standards and storytelling approaches to improve consistency, quality, and efficiency across proposal deliverables.",
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${true ? "py-3 backdrop-blur-xl bg-[hsl(var(--background))]/70 border-b border-black/5" : "py-6"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center font-serif text-lg">
            P
          </span>
          <span className="font-medium tracking-tight text-[15px]">
            Puneet Verma
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-[#1D1816]">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-2 text-sm text-[#1D1816] hover:text-foreground transition-colors "
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 md:px-5 py-2 text-sm font-medium hover:bg-foreground/90 transition-all"
        >
          Get in touch
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-end pb-16 md:pb-24 pt-32 overflow-hidden"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="absolute inset-0 -z-10 noise opacity-[0.12]" />
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10">
        <div className="flex items-center gap-3 mb-8 fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
        </div>
        <div
          className="flex flex-col sm:flex-row sm:items-end gap-3 mb-4 fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <span className="text-2xl md:text-3xl">👋</span>

          <span className="font-serif italic text-xl md:text-2xl text-[#1D1816]">
            Hey, I'm Puneet Verma
          </span>
        </div>
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row">
          <h1
            className="font-serif text-balance leading-[0.92] tracking-tight text-[16vw] md:text-[10.5vw] lg:text-[9rem] fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Creative <br />
            <em className="italic my-[0.2rem]">Director</em>
            <span className=""> &amp; </span>
            <br />
            Design <em className="italic">Leader</em>.
          </h1>
          <div className="relative">
            <span className="bg-white  rounded-full shadow-md absolute text-xs px-4 p-2 -top-2 -left-4  ">
              ⚡️ Passion for design
            </span>

            <span className="bg-white absolute  rounded-full shadow-xl text-xs px-2 p-2 top-12 -right-4 ">
              🧠 Pitch decks
            </span>

            <span className="bg-white absolute rounded-full shadow-xl text-xs px-2 p-2 bottom-12 -right-4 ">
              🧩 Visual Storytelling decks
            </span>

            <img
              src="./hero-image.png"
              className="max-h-[40rem] md:max-h-[30rem] rounded-xl"
            />
          </div>
        </div>
        <div
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8 fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <p className="max-w-xl text-base md:text-lg text-[#1D1816] leading-relaxed">
            Twenty years crafting proposals, pitch decks, and design systems for
            global enterprises — turning strategy into stories that win
            business.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-sm font-medium"
            >
              <span className="h-12 w-12 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <ArrowRight size={16} />
              </span>
              See the work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Coforge",
    "Kyndryl",
    "Ernst & Young",
    "Fidelity",
    "Deloitte",
    "A.T. Kearney",
    "GenAI × Design",
    "Executive Storytelling",
  ];
  return (
    <section className="border-y border-black/10 py-6 overflow-hidden bg-[hsl(var(--secondary))]/40">
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="font-serif italic text-2xl md:text-4xl text-foreground/60 mx-8 flex items-center gap-8"
          >
            {it}
            <span className="text-foreground/20">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                (01) About
              </div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Proposal &amp; <em className="italic">Business</em> Development.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Design Leadership across two decades.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <p className="text-lg md:text-2xl leading-relaxed text-foreground/85 font-light text-balance">
              Led strategic design support for high-value RFP/RFI responses,
              client pitches, and business proposals — partnering with sales,
              account teams, and business leaders to create compelling visual
              narratives, executive presentations, solution showcases, and
              proposal collateral.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              Enabled teams to deliver differentiated, brand-aligned proposals
              that strengthened client engagement and contributed to successful
              business acquisition initiatives across global industries.
            </p>

            <div className="mt-14">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Key contributions
              </div>
              <ul className="divide-y divide-black/10 border-y border-black/10">
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
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-40 bg-[hsl(var(--secondary))]/40 border-y border-black/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (02) Experience
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              The journey <em className="italic">so far.</em>
            </h2>
          </div>
          <div className="hidden md:block text-right text-muted-foreground text-sm">
            <div className="font-serif text-4xl text-foreground">20+</div>
            <div>years of design leadership</div>
          </div>
        </div>
        <ol className="relative">
          {EXPERIENCES.map((exp, i) => (
            <li
              key={exp.company}
              className="group relative border-t border-black/10 py-8 md:py-10 hover:bg-background/60 transition-colors -mx-4 md:-mx-6 px-4 md:px-6 rounded-lg"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-1 font-serif italic text-muted-foreground text-lg">
                  0{i + 1}
                </div>
                <div className="md:col-span-3">
                  <div className="font-serif text-2xl md:text-3xl leading-tight">
                    {exp.company}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {exp.location}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="text-foreground/90 font-medium">
                    {exp.role}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {exp.period}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <ul className="space-y-2">
                    {exp.points.slice(0, 3).map((p, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-3"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
          <li className="border-t border-black/10" />
        </ol>
      </div>
    </section>
  );
}

export function ProjectBlock({ project, index }) {
  const flip = index % 2 === 1;
  return (
    <div className="py-20 md:py-32 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div
          className={`grid md:grid-cols-12 gap-8 md:gap-12 items-start ${flip ? "md:[&>div:first-child]:order-2" : ""}`}
        >
          <div className="md:col-span-5 md:sticky md:top-28">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif italic text-4xl text-muted-foreground">
                {project.number}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {project.tag}
              </span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              {project.title}
            </h3>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {project.body}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
            >
              Discuss a similar project <MoveRight size={14} />
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-lg bg-muted group`}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-[0.98]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-background opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                    <span className="text-xs uppercase tracking-widest">
                      {project.tag}
                    </span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              ))}
            </div>
            {project?.videos?.map((s) => (
              <iframe
                className="ml-0"
                width="100%"
                height="320px"
                src="https://youtube.com/embed/Yb1XLVBTj14"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Work({ projectFromProps }) {
  return (
    <section id="work">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-40">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (03) Selected work
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance">
              Check out some <em className="italic">of my work.</em>
            </h2>
          </div>
          <span className="hidden md:block text-sm text-muted-foreground">
            04 projects
          </span>
        </div>
      </div>
      {(PROJECTS || projectFromProps).map((p, i) => (
        <ProjectBlock key={p.number} project={p} index={i} />
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-40 bg-foreground text-background"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-xs uppercase tracking-[0.25em] text-background/60 mb-8">
          (04) Let's connect
        </div>
        <h2 className="font-serif text-5xl md:text-8xl leading-[0.98] tracking-tight text-balance">
          Let's design, build,
          <br />
          <em className="italic text-background/70">
            create incredible work
          </em>{" "}
          together.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-8 border-t border-background/20 pt-10">
          <a
            href="mailto:puneetverma1@yahoo.com"
            className="group flex items-start gap-4"
          >
            <span className="h-10 w-10 rounded-full border border-background/30 flex items-center justify-center shrink-0 group-hover:bg-background group-hover:text-foreground transition-all">
              <Mail size={16} />
            </span>
            <div>
              <div className="text-xs uppercase tracking-widest text-background/60">
                Email
              </div>
              <div className="mt-1 text-lg">puneetverma1@yahoo.com</div>
            </div>
          </a>
          <a href="tel:+919971000764" className="group flex items-start gap-4">
            <span className="h-10 w-10 rounded-full border border-background/30 flex items-center justify-center shrink-0 group-hover:bg-background group-hover:text-foreground transition-all">
              <Phone size={16} />
            </span>
            <div>
              <div className="text-xs uppercase tracking-widest text-background/60">
                Phone
              </div>
              <div className="mt-1 text-lg">+91 99710 00764</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/puneet-verma-8586b32a"
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-4"
          >
            <span className="h-10 w-10 rounded-full border border-background/30 flex items-center justify-center shrink-0 group-hover:bg-background group-hover:text-foreground transition-all">
              <Linkedin size={16} />
            </span>
            <div>
              <div className="text-xs uppercase tracking-widest text-background/60">
                LinkedIn
              </div>
              <div className="mt-1 text-lg">Let's connect →</div>
            </div>
          </a>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 text-background/50 text-sm">
          <div>
            © {new Date().getFullYear()} Puneet Verma. Crafted with care.
          </div>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-background transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
};

export default App;
