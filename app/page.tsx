'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import BayesianFilterArticle, {
  metadata as bayesianFilterMetadata,
} from '@/content/articles/introduction-to-bayesian-filter.mdx';

const viewIds = [
  'home',
  'cv',
  'publications',
  'articles',
  'article-bayesian-filter',
  'projects',
  'contact',
] as const;
type ViewId = (typeof viewIds)[number];
type Theme = 'light' | 'dark';

const themeColors: Record<Theme, string> = {
  light: '#f7f7f7',
  dark: '#141718',
};

const navigation = [
  { id: 'home', label: 'HOME' },
  { id: 'cv', label: 'CV' },
  { id: 'publications', label: 'PUBLICATIONS' },
  { id: 'articles', label: 'ARTICLES' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
] as const;

function viewFromHash(hash: string): ViewId {
  const candidate = hash.replace(/^#/, '');

  return viewIds.includes(candidate as ViewId) ? (candidate as ViewId) : 'home';
}

function applyTheme(theme: Theme, persist: boolean) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', themeColors[theme]);

  if (persist) {
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // The visual preference still applies when storage is unavailable.
    }
  }
}

function preferredTheme(): Theme {
  try {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
  } catch {
    // Fall through to the document or operating-system preference.
  }

  const documentTheme = document.documentElement.dataset.theme;
  if (documentTheme === 'light' || documentTheme === 'dark') {
    return documentTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

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
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-heading">
      <p className="page-kicker">{eyebrow}</p>
      <h1 id={id}>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .267.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  const [activeView, setActiveView] = useState<ViewId>('home');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const syncViewWithHash = () => {
      setActiveView(viewFromHash(window.location.hash));
    };

    syncViewWithHash();
    window.addEventListener('hashchange', syncViewWithHash);

    return () => window.removeEventListener('hashchange', syncViewWithHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [activeView]);

  useEffect(() => {
    const initialTheme = preferredTheme();
    applyTheme(initialTheme, false);
    const frame = window.requestAnimationFrame(() => setTheme(initialTheme));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme, true);
      return nextTheme;
    });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="site-name"
          href="#home"
          aria-label="Seokhyeon Lee, home"
          aria-current={activeView === 'home' ? 'page' : undefined}
          onClick={() => setActiveView('home')}
        >
          Seokhyeon Lee
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              aria-current={activeView === item.id ? 'page' : undefined}
              onClick={() => setActiveView(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-tools" aria-label="Site controls">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="header-icon-button"
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            aria-pressed={theme === 'dark'}
            title={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <Moon aria-hidden="true" />
            ) : (
              <Sun aria-hidden="true" />
            )}
          </Button>
          <a
            className="header-icon-button"
            href="https://github.com/130bb56"
            aria-label="Open Seokhyeon Lee's GitHub profile in a new tab"
            title="GitHub profile"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubMark />
          </a>
        </div>
      </header>

      <main className="site-main">
        <section
          className={`view home-view${
            activeView === 'home' ? ' is-active' : ''
          }`}
          id="home"
          aria-labelledby="home-title"
          aria-hidden={activeView !== 'home'}
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
            <a href="mailto:130bb56@gmail.com">Email</a>
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
          className={`view content-view cv-view${
            activeView === 'cv' ? ' is-active' : ''
          }`}
          id="cv"
          aria-labelledby="cv-title"
          aria-hidden={activeView !== 'cv'}
        >
          <div className="view-toolbar">
            <PageHeading
              id="cv-title"
              eyebrow="Curriculum Vitae"
              title="Seokhyeon Lee"
              description="Computer systems engineer working on efficient machine learning and accelerator software."
            />
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
                <p className="award-meta">
                  Korean Mathematical Society, <time dateTime="2023">2023</time>
                </p>
              </article>
              <article>
                <h3>
                  Silver Prize, National Mathematics Competition for University
                  Students
                </h3>
                <p className="award-meta">
                  Korean Mathematical Society, <time dateTime="2024">2024</time>
                </p>
              </article>
              <article>
                <h3>Silver Prize, Algorithm Problem Solving Competition</h3>
                <p className="award-meta">
                  Chonnam National University, <time dateTime="2021">2021</time>
                </p>
              </article>
              <article>
                <h3>Silver Prize, Algorithm Problem Solving Competition</h3>
                <p className="award-meta">
                  Chonnam National University, <time dateTime="2022">2022</time>
                </p>
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
          className={`view content-view${
            activeView === 'publications' ? ' is-active' : ''
          }`}
          id="publications"
          aria-labelledby="publications-title"
          aria-hidden={activeView !== 'publications'}
        >
          <PageHeading
            id="publications-title"
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
          className={`view content-view${
            activeView === 'articles' ? ' is-active' : ''
          }`}
          id="articles"
          aria-labelledby="articles-title"
          aria-hidden={activeView !== 'articles'}
        >
          <PageHeading
            id="articles-title"
            eyebrow="Technical Logbook"
            title="Articles"
            description="Long-form notes on accelerator kernels, performance analysis, and ML systems."
          />
          <div className="article-list">
            <a
              className="article-card"
              href="#article-bayesian-filter"
              onClick={() => setActiveView('article-bayesian-filter')}
            >
              <div className="article-card-meta">
                <time dateTime={bayesianFilterMetadata.date}>
                  {bayesianFilterMetadata.displayDate}
                </time>
                <span>{bayesianFilterMetadata.tags.join(' · ')}</span>
              </div>
              <h2>{bayesianFilterMetadata.title}</h2>
              <p>{bayesianFilterMetadata.description}</p>
              <span className="article-card-link">Read article →</span>
            </a>
          </div>
        </section>

        <section
          className={`view content-view article-view${
            activeView === 'article-bayesian-filter' ? ' is-active' : ''
          }`}
          id="article-bayesian-filter"
          aria-labelledby="bayesian-filter-title"
          aria-hidden={activeView !== 'article-bayesian-filter'}
        >
          <a
            className="article-back-link"
            href="#articles"
            onClick={() => setActiveView('articles')}
          >
            ← All articles
          </a>
          <header className="article-header">
            <p className="page-kicker">Technical Note</p>
            <h1 id="bayesian-filter-title">{bayesianFilterMetadata.title}</h1>
            <p className="article-deck">{bayesianFilterMetadata.description}</p>
            <div className="article-byline">
              <span>Seokhyeon Lee</span>
              <time dateTime={bayesianFilterMetadata.date}>
                {bayesianFilterMetadata.displayDate}
              </time>
              <span>{bayesianFilterMetadata.tags.join(' · ')}</span>
            </div>
          </header>
          <article className="article-prose">
            <BayesianFilterArticle />
          </article>
        </section>

        <section
          className={`view content-view${
            activeView === 'projects' ? ' is-active' : ''
          }`}
          id="projects"
          aria-labelledby="projects-title"
          aria-hidden={activeView !== 'projects'}
        >
          <PageHeading
            id="projects-title"
            eyebrow="Selected Engineering"
            title="Projects"
            description="Focused implementations that connect algorithms with hardware behavior."
          />
        </section>

        <section
          className={`view content-view${
            activeView === 'contact' ? ' is-active' : ''
          }`}
          id="contact"
          aria-labelledby="contact-title"
          aria-hidden={activeView !== 'contact'}
        >
          <PageHeading
            id="contact-title"
            eyebrow="Get in Touch"
            title="Contact"
            description="For research and professional inquiries, email is the best way to reach me."
          />
          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:130bb56@gmail.com">130bb56@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a
                  href="https://github.com/130bb56"
                  rel="noreferrer"
                  target="_blank"
                >
                  github.com/130bb56
                </a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a
                  href="https://www.linkedin.com/in/seokhyeon-lee/"
                  rel="noreferrer"
                  target="_blank"
                >
                  linkedin.com/in/seokhyeon-lee
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Seokhyeon Lee</span>
        <span>Systems for efficient machine learning</span>
      </footer>
    </div>
  );
}
