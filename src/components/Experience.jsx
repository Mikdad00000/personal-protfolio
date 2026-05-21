import { JsxTag, Token, Tag } from './primitives'
import { SectionHeader } from './Shell'

const COMMITS = [
  {
    hash: "9f2c1ab", branch: "main", ref: "HEAD",
    role: "Software Engineer", company: "PACGEM",
    date: "Oct 2025 – present", location: "Dhaka, BD",
    stack: ["React.js","Spring Boot","Angular 17","PostgreSQL","JWT","Docker"],
    bullets: [
      "Architected 9-module Account Management System (React + PostgreSQL) serving 100+ users at 99.9% uptime.",
      "Integrated Claude and OpenAI APIs — automated boilerplate, unit tests, and documentation, cutting repetitive work ~40%.",
      "Implemented cost and rate-limit management strategies for LLM API usage across multiple projects.",
      "Built secure APIs handling 10,000+ daily requests (<200ms avg); Docker CI/CD cut deploy time from 2h to 15min.",
      "Mentored junior developers on AI-augmented practices and conducted regular code reviews."
    ],
    current: true
  },
  {
    hash: "4d8a702", branch: "main", ref: null,
    role: "Software Developer", company: "Telcobright Limited",
    date: "Apr 2023 – Sep 2025", location: "Dhaka, BD",
    stack: ["Spring Boot",".NET Core","React.js","MySQL","MariaDB","Percona","Docker"],
    bullets: [
      "Processed 20M+ daily CDR/SMS records with 99.5% accuracy for national telecom operators.",
      "Optimized 500GB+ databases — reduced processing from 4 hours to 45 minutes via query redesign and indexing.",
      "Built telecom billing APIs handling $2M+ monthly — usage calculations, invoice generation, operator reconciliation.",
      "Developed government-grade SMS Portal for 15M+ daily messages with wallet integration and traffic routing.",
      "Used AI tools daily for documentation, debugging complex performance issues, and refactoring legacy code."
    ],
    current: false
  }
]

function CommitNode({ c, last }) {
  return (
    <div style={{ position: "relative", paddingLeft: 40, paddingBottom: last ? 0 : 48 }}>
      {!last && <span style={{ position: "absolute", left: 11, top: 26, bottom: 0, width: 1, background: "var(--border)" }} />}
      <span style={{ position: "absolute", left: 4, top: 6, width: 16, height: 16, borderRadius: "50%", background: c.current ? "var(--accent)" : "var(--bg-elev)", border: "2px solid " + (c.current ? "var(--accent)" : "var(--border-strong)"), boxShadow: c.current ? "0 0 0 6px var(--accent-soft)" : "none" }} />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--text-muted)", marginBottom: 10, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <span style={{ color: "var(--warn)" }}>commit</span>
        <span style={{ color: "var(--text-dim)" }}>{c.hash}</span>
        <span style={{ padding: "2px 8px", borderRadius: 4, border: "1px solid var(--border)", color: "var(--info)", fontSize: 11 }}>({c.branch}{c.ref ? ` -> ${c.ref}` : ""})</span>
        {c.current && <span className="pill" style={{ padding: "2px 8px" }}><span className="dot" />current</span>}
        <span style={{ color: "var(--text-dim)" }}>·</span>
        <span style={{ color: "var(--text-dim)" }}>Date: {c.date}</span>
      </div>
      <div style={{ marginBottom: 6 }}>
        <h4 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontVariationSettings: '"opsz" 60, "SOFT" 30', fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--text)" }}>
          {c.role} <span style={{ color: "var(--text-muted)" }}>@ </span>
          <span style={{ color: "var(--accent)" }}>{c.company}</span>
        </h4>
        <div style={{ color: "var(--text-dim)", fontSize: 13.5, marginTop: 2, fontFamily: "var(--font-mono)" }}>{c.location}</div>
      </div>
      <div style={{ marginTop: 16, padding: "16px 18px", borderLeft: "2px solid var(--border)", background: "var(--bg-elev)", borderRadius: "0 6px 6px 0", color: "var(--text-muted)", fontSize: 15, lineHeight: 1.6 }}>
        {c.bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 12, padding: "5px 0" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", minWidth: 14, marginTop: 2 }}>+</span>
            <span>{b}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
        {c.stack.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeader
          kicker="// section 03"
          tag={<JsxTag name="History" props={[{ k: "log", v: "true" }]} />}
          title={<>Three years of <em>commits</em> across telecom and AI infra.</>}
          lead={<>Listed reverse-chronologically. <span className="mono" style={{ color: "var(--text-dim)" }}>git log --oneline --decorate</span> — but readable.</>}
        />
        <div className="comment" style={{ marginBottom: 28 }}>$ git log --author="mikdad" --pretty=full</div>
        <div>{COMMITS.map((c, i) => <CommitNode key={c.hash} c={c} last={i === COMMITS.length - 1} />)}</div>
        <div className="card" style={{ marginTop: 48, padding: 22 }}>
          <div className="comment" style={{ marginBottom: 8 }}>// pre-history · root commit</div>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, alignItems: "flex-start" }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--text)" }}>
                Masters in Islamic Studies <span style={{ color: "var(--text-muted)" }}>· Dawra-e-Hadith</span>
              </div>
              <div style={{ color: "var(--text-muted)", marginTop: 4 }}>Al-Jamia Ahlia Darul Ulum Moinul Islam, Hathazari</div>
            </div>
            <span className="pill mono">2020 — 2022</span>
          </div>
        </div>
      </div>
    </section>
  )
}
