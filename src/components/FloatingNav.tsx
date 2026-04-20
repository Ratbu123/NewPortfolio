import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home", color: "hsl(var(--brand-pink))" },
  { id: "about", label: "About", color: "hsl(var(--brand-cyan))" },
  { id: "work", label: "Work", color: "hsl(var(--brand-green))" },
  { id: "skills", label: "Skills", color: "hsl(var(--brand-orange))" },
  { id: "contact", label: "Contact", color: "hsl(var(--brand-pink))" },
];

export const FloatingNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = l.id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-full px-2 sm:w-auto sm:px-0">
      <ul className="glass flex items-center sm:gap-1 rounded-full px-1 sm:px-2 py-1 sm:py-2 shadow-nav border border-white/40 w-full sm:w-auto">
        {links.map((l) => {
          const isActive = active === l.id;

          return (
            <li key={l.id} className="flex-1 sm:flex-none text-center">
              <a
                href={`#${l.id}`}
                className="block px-1 sm:px-5 py-1 sm:py-2 text-sm font-semibold transition-colors duration-300"
                style={{
                  color: isActive
                    ? l.color
                    : "hsl(var(--muted-foreground))",
                }}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};