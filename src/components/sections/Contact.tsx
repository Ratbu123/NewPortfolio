import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { Reveal } from "../Reveal";

const socials = [
  { icon: Github, label: "GitHub", grad: "bg-gradient-brand" },
  { icon: Linkedin, label: "LinkedIn", grad: "bg-gradient-blue" },
  { icon: Twitter, label: "Twitter", grad: "bg-gradient-blue" },
  { icon: Mail, label: "Email", grad: "bg-gradient-pink" },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--brand-purple))]">
              Contact
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-display mt-4 text-[clamp(2.25rem,6vw,4rem)] text-foreground">
              Let's Work Together
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Have a project in mind? Feel free to reach out and let's create something amazing
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full">
              <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-blue text-white shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-base text-foreground">GuceDiter03@gmail.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-green text-white shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-base text-foreground">+69 963 679 6878</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-pink text-white shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-base text-foreground">Alitagtag, Batangas</span>
                </li>
              </ul>

              <div className="mt-10">
                <h4 className="text-base font-bold text-foreground">Follow Me</h4>
                <div className="mt-4 flex gap-3">
                  {socials.map((s) => (
                    <button
                      key={s.label}
                      aria-label={s.label}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.grad} text-white shadow-md smooth-transform hover:-translate-y-1 hover:scale-110`}
                    >
                      <s.icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl bg-[hsl(326_100%_98%)] p-7 sm:p-9 border border-white shadow-card"
            >
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-foreground">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-shadow focus:shadow-soft focus:border-[hsl(var(--brand-purple))]"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-shadow focus:shadow-soft focus:border-[hsl(var(--brand-purple))]"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-shadow focus:shadow-soft focus:border-[hsl(var(--brand-purple))]"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-brand-strong px-6 py-3.5 text-base font-semibold text-white shadow-glow smooth-transform hover:-translate-y-0.5 hover:scale-[1.01]"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
