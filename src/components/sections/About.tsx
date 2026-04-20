import { Award, Coffee, Heart, Zap } from "lucide-react";
import { Reveal } from "../Reveal";
import profileImage from "@/Images/Profile.png";

const facts = [
  {
    icon: Award,
    label: "15+ Awards",
    grad: "bg-gradient-orange",
    hoverBg: "hsl(25 100% 96%)",
    hoverBorder: "hsl(25 95% 70%)",
  },
  {
    icon: Coffee,
    label: "1000+ Coffees",
    grad: "bg-gradient-orange",
    hoverBg: "hsl(38 100% 95%)",
    hoverBorder: "hsl(38 95% 65%)",
  },
  {
    icon: Heart,
    label: "30+ Clients",
    grad: "bg-gradient-pink",
    hoverBg: "hsl(326 100% 97%)",
    hoverBorder: "hsl(326 100% 78%)",
  },
  {
    icon: Zap,
    label: "50+ Projects",
    grad: "bg-gradient-brand",
    hoverBg: "hsl(280 100% 97%)",
    hoverBorder: "hsl(280 90% 78%)",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--brand-purple))]">
                About Me
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="heading-display mt-4 text-[clamp(2rem,5vw,3.5rem)] text-foreground">
                Building digital products with{" "}
                <span className="text-gradient-brand">passion</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm a full-stack developer and UI/UX designer with over 6 years
                  of experience creating beautiful, functional digital products.
                  My approach combines technical expertise with a deep
                  understanding of user needs.
                </p>
                <p>
                  I specialize in modern web technologies and love turning complex
                  problems into simple, elegant solutions. Whether it's a
                  responsive web app or a complete design system, I focus on
                  delivering exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends,
                  contributing to open source, or mentoring aspiring developers.
                </p>
              </div>
            </Reveal>

            {/* FACTS */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={300 + i * 80}>
                  <div
                    className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-card border border-border smooth-transform transition-colors hover:-translate-y-1 hover:shadow-soft"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = f.hoverBg;
                      e.currentTarget.style.borderColor = f.hoverBorder;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${f.grad} text-white`}
                    >
                      <f.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {f.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-card">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};