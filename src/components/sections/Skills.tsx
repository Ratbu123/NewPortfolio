import { Code2, Database, Palette, Smartphone, Wrench, Users } from "lucide-react";
import { Reveal } from "../Reveal";

const skills = [
  { title: "Frontend Development", icon: Code2, grad: "bg-gradient-blue", hoverBg: "hsl(220 100% 97%)", hoverBorder: "hsl(220 90% 75%)", chipBg: "hsl(220 100% 95%)", chipText: "hsl(220 90% 40%)", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { title: "Backend Development", icon: Database, grad: "bg-gradient-green", hoverBg: "hsl(150 70% 96%)", hoverBorder: "hsl(150 70% 65%)", chipBg: "hsl(150 70% 93%)", chipText: "hsl(150 70% 30%)", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
  { title: "UI/UX Design", icon: Palette, grad: "bg-gradient-pink", hoverBg: "hsl(326 100% 97%)", hoverBorder: "hsl(326 100% 78%)", chipBg: "hsl(326 100% 95%)", chipText: "hsl(326 90% 45%)", items: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"] },
  { title: "Mobile Development", icon: Smartphone, grad: "bg-gradient-brand", hoverBg: "hsl(280 100% 97%)", hoverBorder: "hsl(280 90% 78%)", chipBg: "hsl(280 100% 95%)", chipText: "hsl(280 85% 45%)", items: ["React Native", "Flutter", "iOS", "Android", "Responsive Design"] },
  { title: "DevOps & Tools", icon: Wrench, grad: "bg-gradient-orange", hoverBg: "hsl(25 100% 96%)", hoverBorder: "hsl(25 95% 70%)", chipBg: "hsl(25 100% 93%)", chipText: "hsl(25 95% 40%)", items: ["Git", "Docker", "CI/CD", "AWS", "Testing"] },
  { title: "Soft Skills", icon: Users, grad: "bg-gradient-brand-strong", hoverBg: "hsl(252 100% 97%)", hoverBorder: "hsl(252 90% 78%)", chipBg: "hsl(252 100% 95%)", chipText: "hsl(252 90% 45%)", items: ["Team Leadership", "Agile", "Communication", "Problem Solving", "Mentoring"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--brand-purple))]">
              Skills & Expertise
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-display mt-4 text-[clamp(2.25rem,6vw,4rem)] text-foreground">
              What I Bring to the Table
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A comprehensive skill set spanning design, development, and deployment
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div
                className="group h-full rounded-3xl bg-card p-7 border border-border shadow-card smooth-transform transition-colors hover:-translate-y-2 hover:shadow-soft"
                style={
                  {
                    ["--hb" as any]: s.hoverBg,
                    ["--hbd" as any]: s.hoverBorder,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = s.hoverBg;
                  e.currentTarget.style.borderColor = s.hoverBorder;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.grad} text-white shadow-md transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover:scale-110 group-hover:rotate-3`}>
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors duration-300"
                      style={
                        {
                          ["--cb" as any]: s.chipBg,
                          ["--ct" as any]: s.chipText,
                        } as React.CSSProperties
                      }
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = s.chipBg;
                        e.currentTarget.style.color = s.chipText;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.color = "";
                      }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
