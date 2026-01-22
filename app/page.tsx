const projects = [
  {
    title: "Atlas Taskboard",
    description:
      "A collaboration hub for fast-moving teams with real-time updates, smart views, and frictionless handoffs.",
    tags: ["Next.js", "TypeScript", "Realtime", "Design Systems"],
    year: "2024",
  },
  {
    title: "Nimbus Finance",
    description:
      "A modern finance dashboard that turns complex data into clean, actionable storytelling.",
    tags: ["React", "Data Viz", "API Integration"],
    year: "2023",
  },
  {
    title: "Pulse Health",
    description:
      "A mobile-first care companion with intuitive flows, secure onboarding, and calm UX.",
    tags: ["Product Design", "Mobile", "Accessibility"],
    year: "2023",
  },
];

const experience = [
  {
    role: "Product Engineer",
    company: "Studio Vertex",
    period: "2023 - Present",
    description:
      "Lead end-to-end delivery for startup clients, building polished interfaces and rapid MVPs.",
  },
  {
    role: "Frontend Developer",
    company: "Brightline Labs",
    period: "2021 - 2023",
    description:
      "Created design systems, optimized UI performance, and shipped new product features.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "REST APIs",
  "Accessibility",
  "Design Systems",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.2),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-[360px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(42,157,143,0.18),transparent_65%)] blur-3xl" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-10">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-foreground text-background grid place-items-center text-sm font-semibold">
            SR
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              Sanyam Raina
            </p>
            <p className="text-base font-medium">Product-focused Developer</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          <a className="transition hover:text-foreground" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-foreground" href="#about">
            About
          </a>
          <a className="transition hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="rounded-full border border-foreground/10 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-foreground/30"
            href="#contact"
          >
            Let&apos;s Talk
          </a>
          <a
            className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:translate-y-[-1px]"
            href="#projects"
          >
            View Work
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20">
        <section className="section-grid glow-ring relative overflow-hidden rounded-3xl border border-foreground/10 bg-card p-10 md:p-16">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.85),transparent_60%)]" />
          <div className="relative">
            <p className="animate-fade-up text-sm uppercase tracking-[0.3em] text-muted">
              Portfolio 2024
            </p>
            <h1 className="animate-fade-up-delayed mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl font-[var(--font-display)]">
              Building bold, editorial-grade digital experiences for modern
              products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              I help ambitious teams translate ideas into high-impact web
              experiences. Clear structure, confident typography, and sharp
              interaction design come standard.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:translate-y-[-1px]"
                href="#contact"
              >
                Start a Project
              </a>
              <a
                className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/30"
                href="#projects"
              >
                Explore Case Studies
              </a>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { label: "Years Shipping", value: "4+" },
                { label: "Projects Delivered", value: "18" },
                { label: "Avg. Client Rating", value: "4.9/5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-foreground/10 bg-white/70 p-6 backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl font-[var(--font-display)]">
                Projects that move the needle
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              A blend of product strategy and UI craftsmanship. Each build is
              designed to stand out in competitive markets.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-card p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(20,20,20,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                    <span>Case Study</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold font-[var(--font-display)]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-foreground/10 bg-white px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="grid gap-10 rounded-3xl border border-foreground/10 bg-card p-10 md:grid-cols-[1.2fr_1fr] md:p-14"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl font-[var(--font-display)]">
              A calm, decisive builder for ambitious teams.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              I blend product thinking with modern frontend engineering to ship
              work that feels inevitable. I care about the details recruiters
              notice: structure, performance, and the story a product tells.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I collaborate closely with founders, designers, and growth teams
              to make sure every launch feels deliberate, cohesive, and ready to
              scale.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-foreground/10 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                Current Focus
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                High-impact web applications, digital storytelling, and UI
                systems that support growth.
              </p>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                Collaboration
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                Open to new roles, freelance collaborations, and product
                partnerships worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-foreground/10 bg-card p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
              Technical toolkit
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-foreground/10 bg-white px-4 py-2 text-sm font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-card p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
              Recent roles
            </h2>
            <div className="mt-6 space-y-6">
              {experience.map((role) => (
                <div key={role.role} className="border-l border-foreground/10 pl-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {role.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {role.role} · {role.company}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-foreground/10 bg-card p-10 md:p-14"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl font-[var(--font-display)]">
                Let&apos;s build something unforgettable.
              </h2>
              <p className="mt-4 text-base text-muted">
                Email: sanyam.raina@email.com · Phone: +91 00000 00000
              </p>
            </div>
            <a
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:translate-y-[-1px]"
              href="mailto:sanyam.raina@email.com"
            >
              Book a Call
            </a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: "GitHub", value: "github.com/sanyamraina" },
              { label: "LinkedIn", value: "linkedin.com/in/sanyamraina" },
              { label: "Portfolio", value: "sanyamraina.dev" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-foreground/10 bg-white/70 p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-10 text-xs uppercase tracking-[0.2em] text-muted">
        <span>© 2024 Sanyam Raina</span>
        <span>Designed for bold stories</span>
      </footer>
    </div>
  );
}
