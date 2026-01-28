const projects = [
  {
    title: "Othello Game Platform",
    description:
      "Full-stack strategy game with AI opponent using minimax algorithm, PostgreSQL move database, and real-time gameplay. Features advanced move history, branching support, and sub-500ms AI response times.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "AI/ML"],
    year: "2025",
    status: "Under Maintenance",
    link: "#",
  },
  {
    title: "Stock Trading Platform",
    description:
      "Real-time stock trading platform with portfolio management, live price feeds, and secure execution for 1,200+ users. Cross-platform with React web and Swift iOS apps.",
    tags: ["React", "Node.js", "MongoDB", "Swift", "AWS"],
    year: "2025",
    status: "Under Maintenance",
    link: "#",
  },
  {
    title: "MyWorkout iOS App",
    description:
      "Privacy-first fitness tracking app for iOS with workout templates, progress charts, and local storage. Built with SwiftUI featuring custom design system and dark/light themes.",
    tags: ["SwiftUI", "iOS", "Swift Charts", "MVVM"],
    year: "2026",
    status: "Demo Video Available",
    link: "#",
  },
];

const experience = [
  {
    role: "GenAI Intern",
    company: "NEXED",
    period: "Jun 2025 - Dec 2025",
    description:
      "Built scalable face swapping and video creation systems with Flask, AWS (EC2, S3, EBS), and multi-threaded processing. Reduced latency by 55% and failure rates by 40% under concurrent load.",
  },
  {
    role: "Software Development Intern",
    company: "Liberty Shoes",
    period: "Apr 2023 - Dec 2023",
    description:
      "Designed sales forecasting system using Python and TensorFlow for 30+ products, improving accuracy by 15% and reducing inventory costs by 12%. Automated evaluations with Jenkins.",
  },
];

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "Swift",
  "React",
  "Node.js",
  "Django",
  "Flask",
  "FastAPI",
  "SwiftUI",
  "TensorFlow",
  "PyTorch",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "REST APIs",
  "Machine Learning",
  "NLP",
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
              Portfolio 2026
            </p>
            <h1 className="animate-fade-up-delayed mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl font-[var(--font-display)]">
              Full-stack engineer building intelligent systems with AI, scalable backends, and polished user experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              MS in Computer Science at USC. Passionate about machine learning, full-stack development, and creating products that solve real problems. From AI-powered games to production-grade trading platforms.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:translate-y-[-1px]"
                href="#contact"
              >
                Start a Conversation
              </a>
              <a
                className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/30"
                href="#projects"
              >
                View Projects
              </a>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Built", value: "15+" },
                { label: "Research Papers", value: "2" },
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
                Featured Projects
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              From AI-powered game engines to production trading platforms. Each project showcases full-stack development, scalable architecture, and attention to detail.
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
                    <span className="px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20">{project.status}</span>
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
              Building intelligent systems from concept to production.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Currently pursuing MS in Computer Science at USC (graduating Dec 2025), with a strong foundation in algorithms, AI, and full-stack development. Previously earned B.Tech in Computer Engineering from PDEU, India.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I've published research on BERT-based answer evaluation and real-time face mask detection, worked on production systems at NEXED and Liberty Shoes, and built everything from AI game engines to trading platforms. I love solving complex problems with clean, scalable code.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-foreground/10 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                Current Focus
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                Machine learning systems, full-stack applications, and scalable cloud infrastructure. Graduating Dec 2025.
              </p>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                Open to Opportunities
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                Seeking full-time Software Engineering roles starting Jan 2026. Open to ML Engineer, Backend, and Full-Stack positions.
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
                Let&apos;s build something great together.
              </h2>
              <p className="mt-4 text-base text-muted">
                Email: work.sanyam.raina@gmail.com · Phone: +1 (213) 696-2781
              </p>
            </div>
            <a
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:translate-y-[-1px]"
              href="mailto:work.sanyam.raina@gmail.com"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: "GitHub", value: "github.com/sanyamraina", link: "https://github.com/sanyamraina" },
              { label: "LinkedIn", value: "linkedin.com/in/sanyam-raina", link: "https://www.linkedin.com/in/sanyam-raina-5769b61b3/" },
              { label: "Email", value: "work.sanyam.raina@gmail.com", link: "mailto:work.sanyam.raina@gmail.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-foreground/10 bg-white/70 p-5 transition hover:border-foreground/30 hover:bg-white/90"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-10 text-xs uppercase tracking-[0.2em] text-muted">
        <span>© 2026 Sanyam Raina</span>
        <span>Built with Next.js & Tailwind</span>
      </footer>
    </div>
  );
}
