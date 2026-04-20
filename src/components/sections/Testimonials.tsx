import { Quote } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  {
    quote:
      "Alex is an exceptional developer who consistently delivers high-quality work. Their ability to understand complex requirements and translate them into elegant solutions is remarkable.",
    name: "Sarah Chen",
    role: "CEO, TechCorp Solutions",
    initials: "SC",
    avatarGrad: "bg-gradient-brand-strong",
    bar: "bg-gradient-brand-strong",
    hoverBg: "hsl(280 100% 97%)",
    hoverBorder: "hsl(280 90% 78%)",
    quoteColor: "hsl(280 85% 55%)",
  },
  {
    quote:
      "Working with Alex was a game-changer for our product. They brought both technical expertise and design sensibility, creating experiences our users absolutely love.",
    name: "Michael Rodriguez",
    role: "Product Manager, DesignLab",
    initials: "MR",
    avatarGrad: "bg-gradient-blue",
    bar: "bg-gradient-blue",
    hoverBg: "hsl(220 100% 97%)",
    hoverBorder: "hsl(220 90% 75%)",
    quoteColor: "hsl(220 90% 50%)",
  },
  {
    quote:
      "Alex's attention to detail and commitment to best practices helped elevate our entire development process. A true professional and excellent team player.",
    name: "Emma Thompson",
    role: "CTO, StartupHub Inc",
    initials: "ET",
    avatarGrad: "bg-gradient-orange",
    bar: "bg-gradient-orange",
    hoverBg: "hsl(25 100% 96%)",
    hoverBorder: "hsl(25 95% 70%)",
    quoteColor: "hsl(25 95% 50%)",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--brand-purple))]">
              Testimonials
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-display mt-4 text-[clamp(2.25rem,6vw,4rem)] text-foreground">
              What People Say
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Feedback from clients and colleagues I've worked with
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure
                className="group relative h-full overflow-hidden rounded-3xl bg-card p-7 border border-border shadow-card smooth-transform hover:-translate-y-2 hover:shadow-soft"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.hoverBg;
                  e.currentTarget.style.borderColor = t.hoverBorder;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${t.bar}`} />
                <Quote
                  className="h-8 w-8 opacity-60 transition-colors duration-500"
                  style={{ color: t.quoteColor }}
                />
                <blockquote className="mt-4 text-base leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${t.avatarGrad} text-sm font-bold text-white shadow-md transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover:scale-110`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
