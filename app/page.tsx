const projects = [
  {
    title: "Othello Game Platform",
    description:
      "Full-stack strategy game with intelligent AI using minimax algorithm with alpha-beta pruning, achieving 80-90% search space reduction. Features PostgreSQL move database for sub-500ms AI responses, binary tree move history with branching support, and 30+ keyboard shortcuts. Built with Python/FastAPI backend and React frontend.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "AI/ML", "Minimax"],
    year: "2025",
    status: "Under Maintenance",
    link: "https://othello-sigma-eosin.vercel.app",
  },
  {
    title: "Stock Portfolio Dashboard",
    description:
      "Full-stack financial data aggregation platform integrating 9 API endpoints from Finnhub and Polygon.io. Built with Node.js/Express backend serving real-time quotes, 6-month historical charts, analyst recommendations, and insider sentiment. Mock trading environment for practice with portfolio management and risk-free execution.",
    tags: ["Node.js", "Express", "JavaScript", "REST APIs", "Financial Data"],
    year: "2025",
    status: "Under Maintenance",
    link: "#",
  },
  {
    title: "MyWorkout iOS App",
    description:
      "Privacy-first iOS fitness app built with SwiftUI and MVVM architecture. Features local JSON storage in Application Support, custom design system with MidnightSand/StudioMinimal themes, reusable workout templates, and progress tracking. Supports both strength and cardio workouts with comprehensive data models.",
    tags: ["SwiftUI", "iOS", "MVVM", "Local Storage", "Design System"],
    year: "2026",
    status: "Under Maintenance",
    link: "#",
  },
];

const experience = [
  {
    role: "GenAI Intern",
    company: "NEXED",
    period: "Jun 2025 - Dec 2025",
    description:
      "Built scalable face swapping and video creation systems with Flask, AWS (EC2, S3, EBS), and multi-threaded processing. Designed production-grade infrastructure with autoscaling, persistent storage flows, and comprehensive monitoring. Reduced latency by 55% and failure rates by 40% under concurrent load.",
  },
  {
    role: "Software Development Intern",
    company: "Liberty Shoes",
    period: "Apr 2023 - Dec 2023",
    description:
      "Spearheaded analysis efforts identifying critical features and engineered scalable data pipelines, boosting model accuracy by 15% and resilience by 25% across three major product lines. Designed sales forecasting system using Python and TensorFlow for 30+ products, driving over $200K in annual cost savings and reducing inventory costs by 12%.",
  },
];

const skills = [
  "Python",
  "C++",
  "C",
  "JavaScript",
  "TypeScript",
  "Swift",
  "React",
  "Node.js",
  "Express.js",
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
  "GraphQL",
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
            href="/resume.pdf"
            download="Sanyam_Raina_Resume.pdf"
          >
            Resume
          </a>
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
                { label: "Years Experience", value: "1+" },
                { label: "Projects Built", value: "20+" },
                { label: "Research Papers", value: "2+" },
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
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
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
              Recently completed MS in Computer Science at USC (Dec 2025), with a strong foundation in algorithms, AI, and full-stack development. Previously earned B.Tech in Computer Engineering from PDEU, India.
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
                Machine learning systems, full-stack applications, and scalable cloud infrastructure. Recently graduated Dec 2025.
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

        <section className="rounded-3xl border border-foreground/10 bg-card p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Research Publications
          </p>
          <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
            Academic Contributions
          </h2>
          <div className="mt-6 space-y-8">
            <div className="border-l border-foreground/10 pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Jul 2023 • Springer
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Automatic Subjective Answer Evaluator using BERT
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Designed a BERT-based subjective answer evaluation system achieving 90% accuracy compared to manual grading. Architected hybrid NLP algorithm integrating TF-IDF and BERT embeddings for automated grading with semantic relevance matching.
              </p>
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-99-3315-0_40"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
              >
                View Publication →
              </a>
            </div>
            <div className="border-l border-foreground/10 pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Jul 2022 • CRC Press
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                SafeShop: Integrated System for Safe Pickup of Items during COVID-19
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Developed real-time face mask detection system using SSD ResNet-50 with 94.67% accuracy. Enhanced user safety with Android application for contactless ordering, real-time pickup coordination, and GPS-based social distancing enforcement.
              </p>
              <a
                href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003303053-7/safeshop-integrated-system-safe-pickup-items-covid-19-nisarg-kapkar-jahnavi-shah-sanyam-raina-nisarg-dave-mustafa-africawala"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
              >
                View Publication →
              </a>
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
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/30"
                href="/resume.pdf"
                download="Sanyam_Raina_Resume.pdf"
              >
                Download Resume
              </a>
              <a
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:translate-y-[-1px]"
                href="mailto:work.sanyam.raina@gmail.com"
              >
                Get in Touch
              </a>
            </div>
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
