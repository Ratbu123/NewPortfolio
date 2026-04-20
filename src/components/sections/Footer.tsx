import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  { icon: Github, grad: "bg-gradient-brand" },
  { icon: Linkedin, grad: "bg-gradient-blue" },
  { icon: Twitter, grad: "bg-gradient-blue" },
  { icon: Mail, grad: "bg-gradient-pink" },
];

export const Footer = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border px-6 pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="text-2xl font-extrabold text-gradient-brand">Rodolfo Guce</div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Full-Stack Developer & UI/UX Designer crafting exceptional digital experiences.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s, i) => (
              <button
                key={i}
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.grad} text-white shadow-md smooth-transform hover:-translate-y-1 hover:scale-110`}
              >
                <s.icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-foreground">Quick Links</h4>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {["Home", "About", "Portfolio", "Skills", "Experience", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground transition-colors hover:text-[hsl(var(--brand-purple))]">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-foreground">Stay Updated</h4>
          <p className="mt-4 text-sm text-muted-foreground">Subscribe to get the latest projects and updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-shadow focus:shadow-soft focus:border-[hsl(var(--brand-purple))]"
            />
            <button className="rounded-xl bg-gradient-brand-strong px-5 py-2.5 text-sm font-semibold text-white shadow-md smooth-transform hover:-translate-y-0.5">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6 text-sm text-muted-foreground flex items-center justify-between flex-wrap gap-2">
        <span>© 2026 Rodolfo Guce. Made with</span>
        <span className="inline-flex items-center gap-1.5">
          <Heart className="h-4 w-4 fill-[hsl(var(--brand-pink))] text-[hsl(var(--brand-pink))] animate-pulse-soft" />
          and clean code.
        </span>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand-strong text-white shadow-glow transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};
