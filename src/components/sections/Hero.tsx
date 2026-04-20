import { ArrowRight, Code2, Palette, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";

const stats = [
  { num: "6+", label: "Years Experience", className: "text-gradient-brand" },
  { num: "50+", label: "Projects Completed", className: "text-gradient-pink" },
  { num: "30+", label: "Happy Clients", className: "text-gradient-blue" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
    >
      {/* Floating blobs */}
      <div aria-hidden className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,hsl(326_100%_75%/0.55),transparent_60%)] animate-blob-float" />
      <div aria-hidden className="absolute -bottom-32 -right-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,hsl(280_100%_82%/0.5),transparent_60%)] animate-blob-float" style={{ animationDelay: "-6s" }} />
      <div aria-hidden className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,hsl(220_100%_82%/0.45),transparent_60%)] animate-blob-float" style={{ animationDelay: "-12s" }} />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(280_100%_92%/0.7)] px-5 py-2 text-sm font-medium text-[hsl(280_85%_50%)] backdrop-blur-sm border border-white/40">
            <Sparkles className="h-4 w-4" />
            Welcome to my portfolio
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="heading-display mt-8 text-[clamp(2.75rem,8vw,6.5rem)] text-foreground">
            Hi, I'm <span className="text-gradient-brand">Rodolfo Guce</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-semibold text-foreground border border-white/60 shadow-card">
              <Code2 className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
              Full-Stack Developer
            </span>
            <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-semibold text-foreground border border-white/60 shadow-card">
              <Palette className="h-5 w-5 text-[hsl(var(--brand-pink))]" />
              UI/UX Designer
            </span>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Crafting elegant digital experiences with clean code and thoughtful design. I build products that users love and businesses need.
          </p>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand-strong px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-base font-semibold text-foreground shadow-card border border-border transition-transform duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal delay={620}>
          <div className="mt-20 grid grid-cols-3 gap-6 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className={`heading-display text-[clamp(2rem,5vw,3.75rem)] ${s.className}`}>{s.num}</div>
                <div className="mt-2 text-sm sm:text-base text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
