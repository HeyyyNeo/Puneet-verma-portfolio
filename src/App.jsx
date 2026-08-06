import React, { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
/* ---------------------------------------------------------
   Data
--------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
];

const STATS = [
  {
    value: 2,
    suffix: "+",
    label: "Years designing",
    sub: "consumer products, enterprise software & design systems",
  },
  {
    value: 5,
    suffix: "M+",
    label: "Users",
    sub: "reached by the products I've helped ship at Mygate",
  },
];

const PROJECTS = [
  {
    index: "",
    year: "",
    title:
      "Developed executive-level pitch decks and proposal experiences aligned with client objectives and brand guidelines.",
    tags: [""],
    image: "https://puneet-verma-senior-ux-ui.vercel.app/ey-3.png",
    desc: "From boardroom presentations to multimillion-dollar proposals, I crafted visually compelling narratives that combined strategic thinking, storytelling, and design excellence to influence decisions and create memorable client experiences.",
  },
  {
    index: "",
    year: "",
    title:
      "Transformed complex business solutions into clear, engaging visual stories to improve proposal effectiveness.",
    tags: [""],
    desc: "Led the creative development of high-impact executive presentations and proposal experiences, transforming complex business ideas into compelling visual narratives that strengthened client engagement, reinforced brand identity, and supported strategic business growth.",
    image: "https://puneet-verma-senior-ux-ui.vercel.app/ey-1-blur.jpeg",
    cta: "",
    href: null,
  },
  {
    index: "",
    year: "",
    title:
      "Collaborated with SMEs, sales teams, and leadership stakeholders to deliver high-impact RFP responses within aggressive timelines.",
    tags: [""],
    desc: "Worked closely with cross-functional teams to create winning proposal responses and executive presentations, translating complex technical information into persuasive client narratives that enhanced engagement and supported successful business pursuits.",
    image: "https://puneet-verma-senior-ux-ui.vercel.app/fd-2-blur.jpeg",
    cta: "",
    href: "",
  },
  {
    index: "",
    year: "",
    title:
      "Established design standards and storytelling approaches to improve consistency, quality, and efficiency across proposal deliverables.",
    tags: [""],
    desc: "Established a strategic design and storytelling framework that transformed proposal development into a cohesive, visually engaging experience—improving quality, reinforcing brand consistency, and enabling faster delivery under tight business deadlines.",
    image: "https://puneet-verma-senior-ux-ui.vercel.app/ey-1.png",
    cta: "",
    href: "https://play.google.com/store/apps/details?id=com.mygate.quickpass&hl=en_IN",
  },
];

const EXPERIENCE = [
  {
    role: "Division Head - Senior Director",
    company: "COFORGE",
    points: [
      "Applied GenAI tools to support UX research synthesis, ideation, and rapid design exploration.",
      "Integrated GenAI into product and content workflows to improve usability and delivery efficiency.",
      "Designed user-centered product interfaces and digital assets using Adobe Creative Suite.",
      "Collaborated with stakeholders to translate business requirements into product solutions.",
      "Led design teams while continuously learning and applying business and process insights.",
    ],
    place: "Greater Noida, India",
    period: "Aug '25 – July '26",
    logo: "/cof.png",
  },
  {
    role: "Senior Manager UX/UI Design",
    company: "Kyndryl",
    points: [
      "Led and supported a team of UX designers, helping them grow in their careers while ensuring high-quality and impactful work.",
      "Collaborated closely with product managers, engineers, and other stakeholders to create seamless experiences and align on priorities.",
      "Used research and data to understand user pain points, validate ideas, and create solutions that make a difference.",
    ],
    place: "Hybrid",
    period: "July '24 – Aug '25",
    logo: "/kind.png",
  },
  {
    role: "Assistant Director : Content Design India Leader",
    company: "Ernst & Young LLP",
    place: "Gurgaon",
    points: [
      "Optimized and designed digital content for various industry sectors across ey.com and associated digital properties, including the EY Client Portal and social media.",
      "Managed content quality and relevancy within the firm's knowledge infrastructure, ensuring an enhanced end-user experience.",
      "Led the production of the Technical Content team, supporting tools like GBB, Discover, and SharePoint sites.",
      "Established a new Content Delivery team in Poland.",
      "Supervised a team of 60+ web developers and producers, assigning work based on competency.",
      "Coordinated with editors and stakeholders to prepare prototypes and wireframes for online portals.",
      "Acted as a subject matter expert on complex technical content management and design issues.",
      "Created design prototypes for external and internal community sites, including graphics and site navigation.",
    ],
    period: "Jan '13 – July '24",
    logo: "/ey.png",
  },
  {
    role: "Team Leader - Graphic Design / Web Design",
    company: "Fidelity",
    points: [
      "Directed a development team, delivering quality design solutions for web and print collaterals.",
      "Created compelling PowerPoint presentations and web pages aligned with responsive design principles.",
      "Spearheaded internal and external corporate design projects, ensuring consistency with brand standards.",
      "Developed and maintained engaging digital content to optimize internal and external communication.",
    ],
    place: "Bangalore",
    period: "Sept '06 – Jan '13",
    logo: "/fid.png",
  },
  {
    role: "Analyst",
    company: "Deloitte",
    points: [
      "Designed marketing brochures, posters, and proposals adhering to brand standards.",
      "Utilized graphic design expertise to create visually compelling PowerPoint presentations.",
    ],
    place: "Hyderabad",
    period: "Oct '05 – Sept '06",
    logo: "/del.png",
  },
  {
    role: "Graphic Designer",
    company: "A.T. Kearney Pvt. Ltd",
    place: "Gurgaon",
    points: [
      "Edited and formatted PowerPoint presentations, ensuring brand consistency.",
      "Collaborated with cross-functional teams to deliver accurate and creative design outputs.",
    ],
    period: "Mar '05 – Sept '05",
    logo: "ker.png",
  },
];

const RECS = [
  {
    name: "Ritik Raj",
    role: "Senior Product Designer @ Slice",
    avatar:
      "https://framerusercontent.com/images/SQWHMwl7It1vFbtH0k8ECPyFvt8.png",
    quote:
      "Puneet, during his design internship at Gida Technologies, proved himself to be a talented and reliable designer. His strong grasp of user-centric design, attention to detail, and ability to take feedback and improve rapidly made him a key contributor to our projects. Beyond his skills, he was proactive, collaborative, and a joy to work with.",
  },
  {
    name: "Stian Michael Årsnes",
    role: "Founder, Naitsmania AS",
    avatar:
      "https://framerusercontent.com/images/26Z6s5ehGPjE6sYyTtKXzfqcv0s.png",
    quote:
      "I highly recommend Puneet, he has an excellent eye for design (both visually and UI/UX) and quality. He is able to adapt his design to different cultures and patterns and always makes sure to really understand the customer needs.",
  },
  {
    name: "Sujeet Pillai",
    role: "Founder & CTO, Aurochs Solutions",
    avatar: "https://framerusercontent.com/images/bpPp6XLpneAoquc3uAsqpBls.png",
    quote:
      "Puneet was outstanding at Aurochs. His short stint of just 6 weeks left a great impact. He's patient and listens to your point of view but has his own opinions and viewpoints as well. His formal training is solid and it's evident from his structured UI/UX process.",
  },
];

/* ---------------------------------------------------------
   Hooks
--------------------------------------------------------- */

function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

/* ---------------------------------------------------------
   Small building blocks
--------------------------------------------------------- */

function Reveal({ children, delay = 0, y = 24, className = "", style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div
      style={{
        fontSize: 12,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#8a8f98",
        fontWeight: 600,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------
   Nav
--------------------------------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          padding: scrolled ? "14px 20px" : "26px 20px",
          transition: "padding 0.4s cubic-bezier(.16,1,.3,1)",
          pointerEvents: "none",
        }}
      >
        <nav
          style={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: 760,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "10px 10px 10px 22px" : "0px 4px",
            borderRadius: 100,
            background: scrolled ? "rgba(15,15,17,0.72)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
            border: scrolled
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid transparent",
            boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.35)" : "none",
            transition: "all 0.5s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <a
            href="#top"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#f4f2ee",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Puneet Verma
          </a>

          <div
            style={{ display: "flex", alignItems: "center", gap: 4 }}
            className="nav-links-desktop"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 13.5,
                  color: "#c9cbd1",
                  textDecoration: "none",
                  padding: "9px 16px",
                  borderRadius: 100,
                  transition: "background 0.25s ease, color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#c9cbd1";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

/* ---------------------------------------------------------
   Hero
--------------------------------------------------------- */

function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const words = ["Creative", "Director", "&", "Design Leader"];

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "160px 24px 100px",
        overflow: "hidden",
      }}
    >
      {/* ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 900,
          background:
            "radial-gradient(circle, rgba(217,119,87,0.16) 0%, rgba(217,119,87,0) 65%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 28,
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(14px)",
            transition:
              "opacity 0.8s ease 0.05s, transform 0.8s cubic-bezier(.16,1,.3,1) 0.05s",
          }}
        >
          <span style={{ fontSize: 20 }}>👋</span>
          <span style={{ color: "#a9adb5", fontSize: 15 }}>
            Hey, I'm Puneet
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {words.map((w, i) => (
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: "clamp(48px, 10vw, 108px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: "#f6f4ef",
                margin: 0,
                display: "inline",
                fontStyle: i === 1 ? "italic" : "normal",
                color: i === 1 ? "#121212" : "#f6f4ef",
                opacity: ready ? 1 : 0,
                textAlign: "left",
                transform: ready ? "translateY(0%)" : "translateY(100%)",
                backgroundColor: (i + 1) % 2 == 0 ? "#d97757" : "",
                transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${0.15 + i * 0.12}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${0.15 + i * 0.12}s`,
              }}
            >
              {w}
            </h1>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: ready ? 0.5 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        <div className="scroll-line" />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Intro statement + Stats
--------------------------------------------------------- */

function StatCard({ stat, delay }) {
  const [ref, visible] = useReveal(0.5);
  const val = useCountUp(stat.value, visible);
  const display = stat.value % 1 === 0 ? Math.floor(val) : val.toFixed(1);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      <div
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(40px, 6vw, 64px)",
          color: "#f6f4ef",
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        {display}
        {stat.suffix}
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: 15,
          color: "#e9e6df",
          fontWeight: 600,
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          marginTop: 6,
          fontSize: 13.5,
          color: "#8a8f98",
          lineHeight: 1.5,
          maxWidth: 280,
        }}
      >
        {stat.sub}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Work / Projects
--------------------------------------------------------- */

function ProjectCard({ project, delay }) {
  const [ref, visible] = useReveal(0.15);
  const [hover, setHover] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      <div
        href={project.href || undefined}
        target={project.href ? "_blank" : undefined}
        rel="noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 48,
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
          cursor: project.href ? "pointer" : "default",
          padding: "36px 0",
          borderTop: "1px solid rgba(255,255,255,0.09)",
        }}
        className="project-row"
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 18,
            }}
          >
            <span
              style={{
                fontSize: 12.5,
                color: "#6f7480",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {project.index}
            </span>
            <span style={{ fontSize: 12.5, color: "#6f7480" }}>
              {project.year}
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(22px, 2.6vw, 32px)",
              lineHeight: 1.2,
              color: "#f4f2ee",
              margin: 0,
              transition: "color 0.3s ease",
            }}
          >
            {project.title}
          </h3>
          <div
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}
          >
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 11.5,
                  padding: "5px 12px",
                  borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#a9adb5",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <p
            style={{
              marginTop: 20,
              color: "#9a9ea6",
              fontSize: 14.5,
              lineHeight: 1.6,
              maxWidth: 420,
            }}
          >
            {project.desc}
          </p>
          <div
            style={{
              marginTop: 24,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13.5,
              fontWeight: 600,
              color: project.href ? "#d97757" : "#6f7480",
            }}
          >
            {project.cta}
            {project.href && (
              <span
                style={{
                  display: "inline-block",
                  transform: hover ? "translateX(4px)" : "translateX(0)",
                  transition: "transform 0.3s cubic-bezier(.16,1,.3,1)",
                }}
              >
                →
              </span>
            )}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            borderRadius: 18,
            overflow: "hidden",
            aspectRatio: "4 / 3",
            background: "#1b1b1e",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: hover ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(.16,1,.3,1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" style={{ padding: "40px 24px 120px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(26px, 4.2vw, 48px)",
              color: "#f6f4ef",
              background: "#d97757",
              width: "max-content",
              margin: "0 0 14px",
            }}
          >
            Check out some of my work
          </h2>
        </Reveal>

        <div style={{ marginTop: 56 }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard project={p} key={p.title} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   About
--------------------------------------------------------- */

function About() {
  return (
    <section id="about" style={{ padding: "40px 24px 120px" }}>
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gap: 64,
          alignItems: "start",
        }}
        className="about-grid"
      >
        <div>
          <Reveal>
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 3.6vw, 40px)",
                color: "#f6f4ef",
                width: "100%",
                margin: "0 0 28px",
                textAlign: "left",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.1rem",
              }}
            >
              <span style={{ padding: "0.5rem" }}>
                Proposal & Business Development
              </span>
              {/* <span style={{ padding: '0.5rem' }}>&</span>
      <span style={{padding: '0.5rem' }}>Business Development</span>  */}
              <span
                style={{
                  background: "#d97757",
                  padding: "0.5rem",
                  color: "#121212",
                }}
              >
                Design Leadership
              </span>
            </div>
          </Reveal>

          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              opacity: 1,
              transition: `opacity 0.8s ease 1s, transform 0.4s cubic-bezier(.16,1,.3,1)`,
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.09)",
              margin: "1rem 0",
              borderRadius: 18,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
            }}
          >
            <p
              style={{
                color: "#c3c6cc",
                fontSize: 14.5,
                lineHeight: 1.7,
                flex: 1,
              }}
            >
              Led strategic design support for high-value RFP/RFI responses,
              client pitches, and business proposals, partnering with sales,
              account teams, and business leaders to create compelling visual
              narratives, executive presentations, solution showcases, and
              proposal collateral. Enabled teams to deliver differentiated,
              brand-aligned proposals that strengthened client engagement and
              contributed to successful business acquisition initiatives.
              Supported proposal design engagements for global clients across
              industries
            </p>
          </div>
        </div>
      </div>

      <img
        src="/css_sprites.png"
        style={{
          display: "flex",
          maxWidth: "1000px",
          margin: "auto",
          width: "100%",
        }}
      />
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          alignItems: "start",
        }}
        className="about-grid"
      >
        <Reveal>
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.6vw, 40px)",
              color: "#f6f4ef",
              width: "100%",
              margin: "0 0 28px",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.1rem",
              marginTop: "2rem",
            }}
          >
            <span
              style={{
                padding: "0.5rem",
                background: "#d97757",
                color: "#121212",
              }}
            >
              Key Contributions
            </span>
          </div>
        </Reveal>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            opacity: 1,
            transition: `opacity 0.8s ease 1s, transform 0.4s cubic-bezier(.16,1,.3,1)`,
            background: "rgba(255,255,255,0.035)",
            border: "1px solid rgba(255,255,255,0.09)",
            margin: "1rem 0",
            borderRadius: 18,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
          }}
        >
          <p
            style={{
              color: "#c3c6cc",
              fontSize: 14.5,
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            <li>
              Developed executive-level pitch decks and proposal experiences
              aligned with client objectives and brand guidelines.
            </li>{" "}
            <li>
              {" "}
              Transformed complex business solutions into clear, engaging visual
              stories to improve proposal effectiveness.{" "}
            </li>
            Collaborated with SMEs, sales teams, and leadership stakeholders to
            deliver high-impact RFP responses within aggressive timelines.{" "}
            <li>
              Established design standards and storytelling approaches to
              improve consistency, quality, and efficiency across proposal
              deliverables.
            </li>
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1000, margin: "120px auto 0" }}>
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 5.6vw, 40px)",
              color: "#f6f4ef",
              margin: "0 0 28px",
              background: "#f06909",
              width: "max-content",
            }}
          >
            The journey so far
          </h2>
        </Reveal>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 27,
              top: 6,
              bottom: 6,
              width: 1,
              background: "rgba(255,255,255,0.09)",
            }}
            className="timeline-line"
          />
          {EXPERIENCE.map((e, i) => (
            <ExperienceRow key={e.role + e.company} exp={e} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ exp, delay }) {
  const [ref, visible] = useReveal(0.15);
  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 24,
        marginBottom: 44,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "baseline",
          }}
        >
          <img
            src={exp.logo}
            alt={exp.company}
            style={{ display: "flex", maxWidth: "5rem", objectFit: "contain" }}
          />
          <h4
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 600,
              color: "#f4f2ee",
            }}
          >
            {exp.role}
          </h4>

          {/* <span style={{ color: "#121212", fontSize: 20, background: '#d97757', fontWeight: 600,fontFamily: "'Fraunces', serif",padding: '0.25rem'
 }}>{exp.company}</span> */}
        </div>
        <div style={{ fontSize: 12.5, color: "#6f7480" }}>
          {exp.place} &middot; {exp.period}
        </div>
        <ul
          style={{
            margin: 0,
            color: "#9a9ea6",
            fontSize: 14.5,
            lineHeight: 1.75,
          }}
        >
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              opacity: 1,
              transition: `opacity 0.8s ease 1s, transform 0.4s cubic-bezier(.16,1,.3,1)`,
              margin: "1rem 0",
              borderRadius: 18,
            }}
          >
            <p
              style={{
                color: "#c3c6cc",
                fontSize: 14.5,
                lineHeight: 1.7,
                flex: 1,
              }}
            >
              {exp?.points?.map((p, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 6,
                    color: "white",
                  }}
                >
                  {p}
                </div>
              ))}
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Recommendations
--------------------------------------------------------- */

function Recommendations() {
  return (
    <section style={{ padding: "40px 24px 120px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <Eyebrow>Recommendations</Eyebrow>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.6vw, 40px)",
              color: "#f6f4ef",
              margin: "0 0 8px",
            }}
          >
            What people say about me
          </h2>
          <p style={{ color: "#8a8f98", fontSize: 15.5, margin: "0 0 48px" }}>
            A few words from people I've designed with, shipped alongside, and
            problem-solved next to.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {RECS.map((r, i) => (
            <RecCard rec={r} key={r.name} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecCard({ rec, delay }) {
  const [ref, visible] = useReveal(0.2);
  const [hover, setHover] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : 24}px) ${hover ? "translateY(-4px)" : ""}`,
        transition: `opacity 0.8s ease ${delay}s, transform 0.4s cubic-bezier(.16,1,.3,1)`,
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: 18,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        boxShadow: hover ? "0 20px 40px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <p
        style={{
          color: "#c3c6cc",
          fontSize: 14.5,
          lineHeight: 1.7,
          flex: 1,
          margin: "0 0 24px",
        }}
      >
        {rec.quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src={rec.avatar}
          alt={rec.name}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#f4f2ee" }}>
            {rec.name}
          </div>
          <div style={{ fontSize: 12, color: "#8a8f98" }}>{rec.role}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Contact / Footer
--------------------------------------------------------- */

function Contact() {
  const [ref, visible] = useReveal(0.3);
  const words = [
    "lets",
    "design,",
    "build,",
    "create",
    "incredible",
    "work",
    "together.",
  ];

  return (
    <section id="resume" style={{ padding: "60px 24px 60px" }}>
      <div style={{ maxWidth: 1000, margin: "2rem auto", textAlign: "center" }}>
        <h2
          ref={ref}
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: "clamp(34px, 7vw, 76px)",
            lineHeight: 1.08,
            color: "#f6f4ef",
            margin: "0 0 56px",
          }}
        >
          {words.map((w, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: visible ? 1 : 0,
                color: w === "incredible" ? "#d97757" : "#f6f4ef",
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease ${i * 0.06}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.06}s`,
              }}
            >
              {w}&nbsp;
            </span>
          ))}
        </h2>

        <Reveal delay={0.3}>
          <a
            href="mailto:puneetverma1@yahoo.com"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 600,
              color: "#15151a",
              background: "#ede8de",
              padding: "16px 36px",
              borderRadius: 100,
              textDecoration: "none",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            target="_blank"
          >
            puneetverma1@yahoo.com
          </a>
        </Reveal>
        <br />
        <Reveal delay={0.3}>
          <a
            href="https://wa.me/919971000764?text=Hi%20Puneet"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 600,
              color: "#15151a",
              background: "#ede8de",
              padding: "16px 36px",
              borderRadius: 100,
              textDecoration: "none",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            target="_blank"
          >
            Reach out: +91-9971000764
          </a>
        </Reveal>
        <br />
        <Reveal delay={0.3}>
          <a
            href="https://www.linkedin.com/in/puneet-verma-8586b32a/"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 600,
              color: "#15151a",
              background: "#ede8de",
              padding: "16px 36px",
              borderRadius: 100,
              textDecoration: "none",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            target="_blank"
          >
            Let's connect on linkedin
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Custom cursor blob (subtle Framer-esque touch)
--------------------------------------------------------- */

function CursorGlow() {
  const ref = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);

    let raf;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(217,119,87,0.08) 0%, rgba(217,119,87,0) 70%)",
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
      }}
      className="cursor-glow"
    />
  );
}

/* ---------------------------------------------------------
   Root
--------------------------------------------------------- */

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#e9e6df",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        body { 
          margin: 0; 
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
          background-image: url('./hero-image.png');
        }

        ::selection { background: #d97757; color: #0c0c0e; }

        a { -webkit-tap-highlight-color: transparent; }

        .scroll-line {
          width: 1px;
          height: 46px;
          background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0));
          animation: scrollPulse 1.8s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.6; }
          50% { transform: scaleY(0.6); opacity: 1; }
        }

        .project-row:hover h3 { color: #d97757; }

        @media (max-width: 780px) {
          .nav-links-desktop { gap: 0; }
          .about-grid { grid-template-columns: 1fr !important; }
          .timeline-line { left: 27px; }
          .project-row { grid-template-columns: 1fr !important; }
          .project-row > div:last-child { order: -1; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Work />

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          alignItems: "start",
          padding: "40px 24px 120px",
        }}
        className="about-grid"
      >
        <Reveal>
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.6vw, 40px)",
              color: "#f6f4ef",
              width: "100%",
              margin: "0 0 28px",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.1rem",
              marginTop: "2rem",
            }}
          >
            <span
              style={{
                padding: "0.5rem",
                background: "#d97757",
                color: "#121212",
              }}
            >
              Achievements
            </span>
          </div>
        </Reveal>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            opacity: 1,
            transition: `opacity 0.8s ease 1s, transform 0.4s cubic-bezier(.16,1,.3,1)`,
            background: "rgba(255,255,255,0.035)",
            border: "1px solid rgba(255,255,255,0.09)",
            margin: "1rem 0",
            borderRadius: 18,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
          }}
        >
          <p
            style={{
              color: "#c3c6cc",
              fontSize: 14.5,
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            <li>Earned EY badges on Design Thinking and Data Visualisation</li>{" "}
            <li>
              {" "}
              Recognized as an Exemplar in EY Knowledge team given to a select
              few outperformers
            </li>
            <li>
              Collaborated with SMEs, sales teams, and leadership stakeholders
              to deliver high-impact RFP responses within aggressive
              timelines.{" "}
            </li>
            <li>
              Obtained learning badges on Design Thinking and Data Visualization
              Received award for "positive attitude and best turnaround time"
              within first three months of joining Fidelity
            </li>
            <li>
              Received 7 awards for "best quality work & turnaround time" in the
              year 2008 and got promoted to Senior Specialist
            </li>
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
