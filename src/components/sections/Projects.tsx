import { ExternalLink, Github, Star } from "lucide-react";
import { Reveal } from "../Reveal";

type Project = {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  featured?: boolean;
  demoGrad: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    desc: "A fully responsive online shopping platform with cart management, payment integration, and admin dashboard.",
    img: "https://images.unsplash.com/photo-1591222380707-dcde425cc8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true,
    demoGrad: "bg-gradient-brand-strong",
  },
  {
    title: "Project Management Tool",
    desc: "Collaborative workspace for teams with task tracking, time management, and real-time updates.",
    img: "https://images.unsplash.com/photo-1649119162006-304b172c12d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
    demoGrad: "bg-gradient-blue",
  },
  {
    title: "Design System",
    desc: "Comprehensive UI component library with extensive documentation and accessibility features.",
    img: "https://images.unsplash.com/photo-1608682285597-156feb50eb4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["React", "Tailwind", "Storybook", "TypeScript"],
    featured: true,
    demoGrad: "bg-gradient-pink",
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time data visualization platform with customizable widgets and comprehensive reporting.",
    img: "https://images.unsplash.com/flagged/photo-1574506272440-8bebbef1ee26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["Vue.js", "D3.js", "Express", "Redis"],
    demoGrad: "bg-gradient-green",
  },
  {
    title: "Mobile Banking App",
    desc: "Secure mobile-first banking solution with biometric authentication and instant transfers.",
    img: "https://images.unsplash.com/photo-1622579521534-8252f7da47fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["React Native", "Firebase", "Node.js", "JWT"],
    demoGrad: "bg-gradient-orange",
  },
  {
    title: "AI Content Generator",
    desc: "Machine learning powered tool for generating marketing copy and creative content.",
    img: "https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    featured: true,
    demoGrad: "bg-gradient-brand",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--brand-purple))]">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-display mt-4 text-[clamp(2.25rem,6vw,4rem)] text-foreground">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A selection of projects that showcase my skills in design and development
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card border border-border shadow-card smooth-transform hover:-translate-y-2 hover:shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-110"
                  />
                  {p.featured && (
                    <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-orange px-3 py-1 text-xs font-bold text-white shadow-md">
                      <Star className="h-3 w-3 fill-white" />
                      Featured
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-[hsl(326_100%_95%)] px-3 py-1 text-xs font-medium text-[hsl(326_85%_45%)]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-2">
                    <button className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl ${p.demoGrad} px-4 py-2.5 text-sm font-semibold text-white shadow-md smooth-transform hover:-translate-y-0.5`}>
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </button>
                    <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground smooth-transform hover:-translate-y-0.5 hover:bg-secondary">
                      <Github className="h-4 w-4" />
                      Code
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
