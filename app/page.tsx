const navigation = [
  { label: 'CV', href: '#cv' },
  { label: 'PUBLICATIONS', href: '#publications' },
  { label: 'ARTICLES', href: '#articles' },
  { label: 'PROJECTS', href: '#projects' },
];

const workHighlights = [
  <>
    Implemented and optimized Tenstorrent NPU kernels for distributed LLM
    training and inference across pytest validation, Python/C++ bindings, host
    runtime, device kernels, and the SFPU&apos;s SIMD instructions.
  </>,
  <>
    Designed and implemented a multicore cumsum kernel based on the Sklansky
    parallel-prefix sum, using NoC multicast and inter/intra-core semaphore
    synchronization, achieving a 110x speedup over the baseline tt-metal kernel.
  </>,
  <>
    Diagnosed and fixed a nondeterministic hang in composite
    collective-communication kernels caused by trace replay corrupting
    L1-resident semaphores (analogous to CUDA Graph replay).{' '}
    <a
      className="inline-link"
      href="https://github.com/tenstorrent/tt-metal/pull/40276"
      rel="noreferrer"
      target="_blank"
    >
      #40276
    </a>
  </>,
  <>
    Developed a vLLM plugin for Tenstorrent NPUs, enabling end-to-end serving of
    models from a few billion to hundreds of billions of parameters, including
    Qwen3, Llama3, and GPT-OSS, while resolving stability and performance
    regressions.{' '}
    <a
      className="inline-link"
      href="https://github.com/tenstorrent/tt-metal/pull/43692"
      rel="noreferrer"
      target="_blank"
    >
      #43692
    </a>
  </>,
];

function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-heading">
      <p className="page-kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="site-name" href="#home" aria-label="Seokhyeon Lee, home">
          Seokhyeon Lee
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <section
          className="view home-view"
          id="home"
          aria-labelledby="home-title"
        >
          <p className="page-kicker">ML Systems · Hardware-Aware AI</p>
          <h1 id="home-title">Seokhyeon Lee</h1>

          <div className="intro-copy">
            <p>
              I am a computer systems engineer interested in hardware-aware
              machine learning algorithms, algorithm-hardware co-design, systems
              for AI, and on-device AI.
            </p>
            <p>
              My recent work has focused on high-performance NPU kernels,
              distributed LLM training and inference, and reliable accelerator
              software across Python, C++, host runtimes, and device kernels.
            </p>
          </div>

          <div className="profile-links" aria-label="Profile links">
            <a href="mailto:130bb56@g.skku.edu">Email</a>
            <a
              href="https://github.com/130bb56"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/seokhyeon-lee/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section
          className="view content-view cv-view"
          id="cv"
          aria-labelledby="cv-title"
        >
          <div className="view-toolbar">
            <PageHeading
              eyebrow="Curriculum Vitae"
              title="Seokhyeon Lee"
              description="Computer systems engineer working on efficient machine learning and accelerator software."
            />
            <a
              className="pdf-link"
              href="/CV.pdf"
              rel="noreferrer"
              target="_blank"
            >
              View PDF
            </a>
          </div>

          <div className="cv-contact" aria-label="Contact information">
            <a href="mailto:130bb56@g.skku.edu">130bb56@g.skku.edu</a>
            <a
              href="https://github.com/130bb56"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/seokhyeon-lee/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>

          <dl className="cv-summary">
            <div>
              <dt>Research Interests</dt>
              <dd>
                HW-Aware ML Algorithms, Algorithm-HW Co-design, Systems for AI,
                On-device AI
              </dd>
            </div>
            <div>
              <dt>Skills</dt>
              <dd>
                C/C++, Python, CUDA, CUTLASS, OpenMP, PyTorch, TensorFlow, Git,
                GitHub Actions (CI)
              </dd>
            </div>
          </dl>

          <section className="cv-section" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <div className="timeline-list">
              <article className="timeline-entry">
                <div>
                  <h3>Sungkyunkwan University</h3>
                  <p>B.S. in Computer Science and Engineering</p>
                </div>
                <div className="entry-meta">
                  <span>South Korea</span>
                  <time>Mar. 2023 - Feb. 2025</time>
                </div>
              </article>
              <article className="timeline-entry">
                <div>
                  <h3>Chonnam National University</h3>
                  <p>
                    B.S. Candidate in Mechanical Design Engineering
                    <span className="detail-note">
                      Transferred to SKKU in 2023
                    </span>
                  </p>
                </div>
                <div className="entry-meta">
                  <span>South Korea</span>
                  <time>Mar. 2017 - Feb. 2023</time>
                </div>
              </article>
            </div>
          </section>

          <section className="cv-section" aria-labelledby="experience-title">
            <h2 id="experience-title">Work Experience</h2>
            <article className="experience-entry">
              <div className="experience-heading">
                <div>
                  <h3>MOREH</h3>
                  <p>NPU Software Engineer</p>
                </div>
                <div className="entry-meta">
                  <span>South Korea</span>
                  <time>May 2025 - Jun. 2026</time>
                </div>
              </div>
              <ul className="cv-bullets">
                {workHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="cv-section" aria-labelledby="cv-project-title">
            <h2 id="cv-project-title">Personal Project</h2>
            <article className="experience-entry">
              <div className="experience-heading">
                <div>
                  <h3>HPMC: High-Performance MNIST Classification</h3>
                </div>
                <div className="entry-meta">
                  <time>Feb. 2025 - Mar. 2025</time>
                </div>
              </div>
              <ul className="cv-bullets">
                <li>
                  Built a deterministic end-to-end MLP training pipeline in
                  CUDA/C++ from scratch without cuBLAS or CUTLASS, achieving up
                  to 8x training speedup and 13% lower GPU memory usage compared
                  to the PyTorch baseline.
                </li>
              </ul>
            </article>
          </section>

          <section className="cv-section" aria-labelledby="awards-title">
            <h2 id="awards-title">Awards</h2>
            <div className="award-list">
              <article>
                <h3>
                  Silver Prize, National Mathematics Competition for University
                  Students
                </h3>
                <p>Korean Mathematical Society</p>
                <time>2023, 2024</time>
              </article>
              <article>
                <h3>Silver Prize, Algorithm Problem Solving Competition</h3>
                <p>Chonnam National University</p>
                <time>2021, 2022</time>
              </article>
            </div>
          </section>

          <section className="cv-section" aria-labelledby="activities-title">
            <h2 id="activities-title">Activities</h2>
            <article className="experience-entry">
              <div className="experience-heading">
                <div>
                  <h3>Sungkyunkwan University</h3>
                  <p>
                    Undergraduate Research Intern at Dash Lab, supervised by
                    Prof. Simon Woo
                  </p>
                </div>
                <div className="entry-meta">
                  <span>South Korea</span>
                  <time>Jun. 2024 - Dec. 2024</time>
                </div>
              </div>
              <ul className="cv-bullets">
                <li>
                  Read and presented research papers in the field of AI
                  Security.
                </li>
                <li>Contributed to a joint ML project with Kia Motors.</li>
              </ul>
            </article>

            <article className="experience-entry tutoring-entry">
              <div className="experience-heading">
                <div>
                  <h3>Programming Tutoring</h3>
                </div>
              </div>
              <ul className="tutoring-list">
                <li>
                  <span>Python Programming Tutor for Freshmen</span>
                  <time>2024</time>
                </li>
                <li>
                  <span>C++ Algorithm Tutor for CS Undergraduate Students</span>
                  <time>2023</time>
                </li>
              </ul>
            </article>
          </section>
        </section>

        <section
          className="view content-view"
          id="publications"
          aria-labelledby="publications-title"
        >
          <PageHeading
            eyebrow="Research Record"
            title="Publications"
            description="Peer-reviewed papers, preprints, and technical reports."
          />
          <div className="empty-state">
            <p>No formal publications are listed in the current CV.</p>
            <span>
              This page is intentionally kept factual and will be updated when a
              citable research output is available.
            </span>
          </div>
        </section>

        <section
          className="view content-view"
          id="articles"
          aria-labelledby="articles-title"
        >
          <PageHeading
            eyebrow="Technical Logbook"
            title="Articles"
            description="Long-form notes on accelerator kernels, performance analysis, and ML systems."
          />
          <div className="empty-state">
            <p>No articles have been published yet.</p>
            <span>
              Future entries will use readable TeX-style mathematics, restrained
              syntax highlighting, and a narrow scholarly reading column.
            </span>
          </div>
        </section>

        <section
          className="view content-view"
          id="projects"
          aria-labelledby="projects-title"
        >
          <PageHeading
            eyebrow="Selected Engineering"
            title="Projects"
            description="Focused implementations that connect algorithms with hardware behavior."
          />
          <article className="project-entry">
            <div className="project-meta">
              <time>Feb. 2025 - Mar. 2025</time>
              <span>CUDA · C++ · PyTorch</span>
            </div>
            <h2>HPMC: High-Performance MNIST Classification</h2>
            <p>
              A deterministic end-to-end MLP training pipeline implemented in
              CUDA/C++ from scratch without cuBLAS or CUTLASS.
            </p>
            <dl className="project-results">
              <div>
                <dt>Training speedup</dt>
                <dd>Up to 8x</dd>
              </div>
              <div>
                <dt>GPU memory</dt>
                <dd>13% lower</dd>
              </div>
              <div>
                <dt>Baseline</dt>
                <dd>PyTorch</dd>
              </div>
            </dl>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Seokhyeon Lee</span>
        <span>Systems for efficient machine learning</span>
      </footer>
    </div>
  );
}
