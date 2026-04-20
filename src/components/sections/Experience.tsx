import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "../Reveal";

type Item = {
  title: string;
  org: string;
  period: string;
  desc: string;
  bullets: string[];
  icon: typeof Briefcase;
  badgeGrad: string;
  iconGrad: string;
  bulletColor: string;
  hoverBg: string;
  hoverBorder: string;
};

const items: Item[] = [
  {
    title: "Full-Stack Developer",
    org: "NextGenIT Solutions",
    period: "2026 - Present",
    desc: "Leading development of enterprise web applications. Architecting scalable solutions and mentoring junior developers.",
    bullets: [
      "Reduced application load time by 60% through optimization",
      "Led team of 5 developers on flagship product",
      "Implemented automated testing pipeline",
    ],
    icon: Briefcase,
    badgeGrad: "bg-gradient-brand-strong",
    iconGrad: "bg-gradient-brand-strong",
    bulletColor: "hsl(var(--brand-magenta))",
    hoverBg: "hsl(280 100% 97%)",
    hoverBorder: "hsl(280 90% 78%)",
  },
  {
    title: "UI/UX Developer",
    org: "Canva & Figma",
    period: "2025 - 2026",
    desc: "Bridged design and development teams to create seamless user experiences across web and mobile platforms.",
    bullets: [
      "Designed and developed component library used by 50+ developers",
      "Increased user engagement by 45% through UX improvements",
      "Established design system standards",
    ],
    icon: Briefcase,
    badgeGrad: "bg-gradient-pink",
    iconGrad: "bg-gradient-pink",
    bulletColor: "hsl(var(--brand-pink))",
    hoverBg: "hsl(326 100% 97%)",
    hoverBorder: "hsl(326 100% 78%)",
  },
  {
    title: "Frontend Developer",
    org: "Freelancing",
    period: "2024 - 2025",
    desc: "Developed responsive web applications using modern JavaScript frameworks and best practices.",
    bullets: [
      "Built 15+ client projects from concept to deployment",
      "Improved code quality through peer review process",
      "Mentored 3 junior developers",
    ],
    icon: Briefcase,
    badgeGrad: "bg-gradient-brand",
    iconGrad: "bg-gradient-brand",
    bulletColor: "hsl(var(--brand-purple))",
    hoverBg: "hsl(270 100% 97%)",
    hoverBorder: "hsl(270 90% 78%)",
  },
  {
    title: "Senior High",
    org: "Alitagtag Senior High School",
    period: "2023 - 2024",
    desc: "Graduated with honors. Focus on software engineering and web development.",
    bullets: [
      "Avg: 91.5",
      "With Honors",
      "Top Student on web development",
    ],
    icon: GraduationCap,
    badgeGrad: "bg-gradient-blue",
    iconGrad: "bg-gradient-blue",
    bulletColor: "hsl(var(--brand-cyan))",
    hoverBg: "hsl(220 100% 97%)",
    hoverBorder: "hsl(220 90% 75%)",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--brand-purple))]">
              Experience
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-display mt-4 text-[clamp(2.25rem,6vw,4rem)] text-foreground">
              Professional Journey
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              My career path and educational background
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 pl-12 sm:pl-20">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-8 top-2 bottom-2 w-0.5 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, hsl(var(--brand-purple)), hsl(var(--brand-pink)) 40%, hsl(var(--brand-blue)))",
            }}
          />

          <div className="space-y-10">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 100}>
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`absolute -left-12 sm:-left-20 top-2 flex h-10 w-10 items-center justify-center rounded-full ${it.iconGrad} text-white shadow-md ring-4 ring-background`}
                  >
                    <it.icon className="h-5 w-5" />
                  </div>

                  <div
                    className="rounded-3xl bg-card p-6 sm:p-7 border border-border shadow-card smooth-transform transition-colors hover:-translate-y-1 hover:shadow-soft"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = it.hoverBg;
                      e.currentTarget.style.borderColor = it.hoverBorder;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{it.title}</h3>
                        <div className="mt-1 text-sm font-semibold text-muted-foreground">{it.org}</div>
                      </div>
                      <span className={`inline-flex items-center rounded-full ${it.badgeGrad} px-4 py-1.5 text-sm font-semibold text-white shadow-sm whitespace-nowrap`}>
                        {it.period}
                      </span>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{it.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {it.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: it.bulletColor }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
