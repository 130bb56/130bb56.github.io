import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpenText,
  FileText,
  Mail,
} from "lucide-react";

const researchAreas = [
  {
    number: "01",
    title: "GPU kernels & compilers",
    summary:
      "Reasoning across algorithms, memory hierarchies, and compiler transformations to make irregular workloads run predictably on modern accelerators.",
    tags: ["CUDA", "Triton", "MLIR"],
  },
  {
    number: "02",
    title: "Distributed learning systems",
    summary:
      "Studying the interaction between collective communication, parallelism strategies, and model structure at training scale.",
    tags: ["Collectives", "Parallelism", "Profiling"],
  },
  {
    number: "03",
    title: "Efficient inference",
    summary:
      "Reducing latency and memory cost through quantization, batching, and hardware-aware serving without losing statistical quality.",
    tags: ["LLM serving", "Quantization", "Evaluation"],
  },
];

const selectedWork = [
  {
    year: "20XX",
    type: "Sample manuscript · replace",
    title: "A Systems Approach to Memory-Bound Tensor Programs",
    authors: "Your Name, Collaborator Name, Advisor Name",
    venue: "Venue or manuscript status",
    abstract:
      "A concise two-sentence summary should state the systems problem, the core method, and the principal result without marketing language.",
  },
  {
    year: "20XX",
    type: "Sample project · replace",
    title: "Communication-Aware Scheduling for Distributed Training",
    authors: "Your Name, Collaborator Name",
    venue: "Workshop, preprint, or technical report",
    abstract:
      "Use this space for work that demonstrates research taste even when it is still in progress. Link only artifacts that are ready for faculty review.",
  },
];

const cvColumns = [
  {
    label: "Education",
    entries: [
      ["20XX — present", "M.S. in Computer Science", "University · Advisor: Name"],
      ["20XX — 20XX", "B.S. in Computer Science", "University · Honors if verified"],
    ],
  },
  {
    label: "Research experience",
    entries: [
      ["20XX — present", "Research Assistant", "Lab name · one-line scope"],
      ["20XX — 20XX", "Research Intern", "Institution · one-line scope"],
    ],
  },
  {
    label: "Selected skills",
    entries: [
      ["Systems", "CUDA · Triton · PyTorch", "Linux · C++ · Python"],
      ["Methods", "Performance modeling", "Profiling · reproducible evaluation"],
    ],
  },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Your Name, home">
          <span className="brand-mark" aria-hidden="true">
            YN
          </span>
          <span className="brand-copy">
            <strong>Your Name</strong>
            <small>Academic profile</small>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="#cv">CV</a>
        </nav>

        <a className="header-contact" href="#contact">
          <Mail size={15} aria-hidden="true" />
          Contact
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-main">
            <p className="eyebrow">Prospective PhD applicant · academic portfolio draft</p>
            <h1 id="hero-title">Your Name</h1>
            <p className="hero-role">ML Systems · GPU Computing · Efficient AI</p>
            <p className="hero-statement">
              I study how learning algorithms and computer systems can be designed
              together. My current interests center on fast GPU kernels,
              communication-efficient training, and reliable inference at scale.
            </p>

            <div className="hero-actions" aria-label="Profile shortcuts">
              <a className="action action-primary" href="#research">
                Research profile
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a className="action action-secondary" href="#cv">
                Curriculum vitae
                <FileText size={16} aria-hidden="true" />
              </a>
            </div>

            <p className="draft-notice">
              Draft notice — identity, institutions, publications, and contact details
              below are explicit placeholders pending your verified CV.
            </p>
          </div>

          <aside className="hero-index" aria-label="Research index">
            <p className="index-label">Research index</p>
            <ol>
              <li>
                <span>01</span>
                GPU kernels
              </li>
              <li>
                <span>02</span>
                Distributed training
              </li>
              <li>
                <span>03</span>
                Efficient inference
              </li>
            </ol>
            <div className="status-note">
              <span className="status-dot" aria-hidden="true" />
              Preparing for U.S. PhD applications
              <small>Target cycle · 20XX</small>
            </div>
          </aside>
        </section>

        <section className="section" id="research" aria-labelledby="research-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">01 · Research</p>
              <h2 id="research-title">Questions I want to pursue</h2>
            </div>
            <p>
              Three focused themes are more persuasive than a long keyword list.
              Each description should connect a scientific question to a systems
              mechanism.
            </p>
          </div>

          <div className="research-list">
            {researchAreas.map((area) => (
              <article className="research-row" key={area.number}>
                <span className="row-number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.summary}</p>
                <ul aria-label={area.title + " topics"}>
                  {area.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading compact-heading">
            <div>
              <p className="section-kicker">02 · Selected work</p>
              <h2 id="work-title">Research outputs</h2>
            </div>
            <p>
              Only verified work belongs here. The two entries below demonstrate
              hierarchy and copy length; they are not publication claims.
            </p>
          </div>

          <div className="work-list">
            {selectedWork.map((work) => (
              <article className="work-row" key={work.title}>
                <div className="work-meta">
                  <span>{work.year}</span>
                  <small>{work.type}</small>
                </div>
                <div className="work-body">
                  <h3>{work.title}</h3>
                  <p className="authors">{work.authors}</p>
                  <p className="venue">{work.venue}</p>
                  <p className="work-abstract">{work.abstract}</p>
                </div>
                <span className="artifact-status">Artifacts pending</span>
              </article>
            ))}
          </div>
        </section>

        <section className="technical-section" id="writing" aria-labelledby="writing-title">
          <div className="technical-intro">
            <p className="section-kicker section-kicker-light">03 · Technical writing</p>
            <h2 id="writing-title">A serious home for equations and code.</h2>
            <p>
              Long-form notes use a narrower reading measure, restrained syntax
              color, numbered references, and display math that remains legible on
              mobile screens.
            </p>
            <a className="writing-link" href="#note-preview">
              View note preview
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>

          <article className="note-preview" id="note-preview">
            <header className="note-header">
              <div>
                <p>Technical note · Systems</p>
                <h3>Reasoning about the roofline of a fused GPU kernel</h3>
              </div>
              <BookOpenText size={22} aria-hidden="true" />
            </header>

            <p className="note-lede">
              A compact performance model often reveals whether another optimization
              pass is likely to matter before we reach for the profiler.
            </p>

            <div className="equation-block" aria-label="Roofline equation">
              <span className="equation-number">(1)</span>
              <math
                xmlns="http://www.w3.org/1998/Math/MathML"
                display="block"
                aria-label="Performance is bounded by the minimum of peak throughput and arithmetic intensity times memory bandwidth"
              >
                <mrow>
                  <mi>P</mi>
                  <mo>≤</mo>
                  <mi>min</mi>
                  <mo>(</mo>
                  <msub>
                    <mi>P</mi>
                    <mtext>peak</mtext>
                  </msub>
                  <mo>,</mo>
                  <mi>I</mi>
                  <mo>·</mo>
                  <msub>
                    <mi>B</mi>
                    <mtext>mem</mtext>
                  </msub>
                  <mo>)</mo>
                </mrow>
              </math>
            </div>

            <div className="definition">
              <span>Observation 1.</span>
              <p>
                Fusion helps only while saved memory traffic outweighs the occupancy
                or instruction-level cost introduced by the fused program.
              </p>
            </div>

            <pre className="code-block" aria-label="CUDA kernel excerpt">
              <code>
                <span className="code-comment">
                  {"// Cooperative tile load with a guarded boundary\n"}
                </span>
                <span className="code-keyword">{"__global__"}</span>
                {" void fused_tile("}
                <span className="code-type">{"half"}</span>
                {"* x, "}
                <span className="code-type">{"half"}</span>
                {"* y, "}
                <span className="code-type">{"int"}</span>
                {" n) {\n  "}
                <span className="code-type">{"int"}</span>
                {" i = blockIdx.x * blockDim.x + threadIdx.x;\n  "}
                <span className="code-keyword">{"if"}</span>
                {" (i < n) y[i] = "}
                <span className="code-function">{"__hmax"}</span>
                {"(x[i], "}
                <span className="code-number">{"0.0h"}</span>
                {");\n}"}
              </code>
            </pre>

            <footer className="note-footer">
              <span>[1] Williams et al., Roofline, CACM 2009.</span>
              <span>6 min read · Updated 20XX</span>
            </footer>
          </article>
        </section>

        <section className="section cv-section" id="cv" aria-labelledby="cv-title">
          <div className="section-heading compact-heading">
            <div>
              <p className="section-kicker">04 · Curriculum vitae</p>
              <h2 id="cv-title">Condensed CV</h2>
            </div>
            <p>
              The web version gives faculty a fast scan; a dated PDF should remain
              available for the complete record.
            </p>
          </div>

          <div className="cv-grid">
            {cvColumns.map((column) => (
              <section className="cv-column" key={column.label}>
                <h3>{column.label}</h3>
                {column.entries.map(([date, title, detail]) => (
                  <div className="cv-entry" key={date + title}>
                    <span>{date}</span>
                    <strong>{title}</strong>
                    <p>{detail}</p>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">05 · Contact</p>
            <h2 id="contact-title">Let the work start the conversation.</h2>
          </div>
          <div className="contact-copy">
            <p>
              Replace this block with a two-line research fit statement and one
              professional email address. Keep all cold-email links stable and public.
            </p>
            <a href="mailto:your.name@university.edu">
              your.name@university.edu
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 20XX Your Name</span>
        <span>Built for readable research communication.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
