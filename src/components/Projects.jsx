import { useState } from 'react'
import { JsxTag, Token, Tag } from './primitives'
import { SectionHeader } from './Shell'

const PROJECTS = [
  {
    id: "ai-factory", file: "ai-software-factory.tsx",
    title: "AI Software Factory", subtitle: "Chat-first SaaS for SMEs · Multi-tenant",
    role: "Lead engineer",
    blurb: "SME owners describe needs in Bengali/Banglish and receive custom software via a multi-turn LLM pipeline. Multi-tenant headless backend (auth, bKash/Nagad, orders, inventory) shared at zero token cost.",
    highlights: [
      { k: "tokens_saved", v: "shared backend -> 0 token cost per tenant" },
      { k: "model_strategy", v: "cheap models for UI, expensive for business logic" },
      { k: "languages", v: "Bengali · Banglish · English" },
    ],
    stack: ["Claude API","OpenAI API","React","Node.js","MongoDB"],
    accent: "var(--accent)"
  },
  {
    id: "cdr", file: "cdr-analysis.java",
    title: "CDR Analysis System", subtitle: "Government telecom · 20M+ daily records",
    role: "Backend engineer",
    blurb: "National telecom infrastructure for government-level CDR processing. 83% processing time reduction (4h to 45m) via query redesign and indexing on 500GB+ databases. Handles $2M+ monthly billing.",
    highlights: [
      { k: "throughput", v: "20M+ records / day @ 99.5% accuracy" },
      { k: "perf_gain", v: "4 hours -> 45 min processing" },
      { k: "scale", v: "500GB+ databases, multi-operator" },
    ],
    stack: ["Spring Boot",".NET Core","MySQL","Percona","MariaDB"],
    accent: "var(--warn)"
  },
  {
    id: "sms-billing", file: "sms-billing.cs",
    title: "SMS Billing System", subtitle: "National telecom · $2M+ monthly volume",
    role: "Full-stack engineer",
    blurb: "End-to-end SMS billing engine with usage metering, rate-plan management, invoice generation, and operator reconciliation. Multi-operator billing with real-time wallet deduction.",
    highlights: [
      { k: "accuracy", v: "99.5% across all billing cycles" },
      { k: "operators", v: "Multi-operator reconciliation" },
      { k: "real_time", v: "Wallet deduction at message-rate" },
    ],
    stack: ["Spring Boot",".NET Core","MySQL","MariaDB"],
    accent: "var(--info)"
  },
  {
    id: "chatbot", file: "restaurant-bot.ts",
    title: "Restaurant AI Chatbot", subtitle: "Natural-language ordering · Claude API",
    role: "Full-stack engineer",
    blurb: "Natural-language ordering chatbot with Claude API prompt caching and structured order extraction from free-form chat. LLM data pipeline with conversation context management to minimize token cost.",
    highlights: [
      { k: "prompt_cache", v: "Anthropic prompt caching for cost reduction" },
      { k: "extraction", v: "Structured orders from free-form chat" },
      { k: "context", v: "Multi-turn conversation memory" },
    ],
    stack: ["Node.js","Express","MongoDB","React","Claude API"],
    accent: "#f472b6"
  }
]

export function Projects() {
  const [active, setActive] = useState(PROJECTS[0].id)
  const cur = PROJECTS.find(p => p.id === active)

  return (
    <section id="projects">
      <div className="container">
        <SectionHeader
          kicker="// section 04"
          tag={<JsxTag name="Projects" props={[{ k: "count", v: PROJECTS.length }]} />}
          title={<>Selected <em>builds</em> — shipped, scaled, learned from.</>}
          lead="Click any tab to inspect. These are real production systems, not weekend sketches."
        />

        <div className="card" style={{ overflow: "hidden", background: "var(--bg-elev)" }}>
          <div style={{ display: "flex", overflow: "auto", borderBottom: "1px solid var(--border)", background: "var(--bg-elev-2)" }}>
            {PROJECTS.map(p => {
              const isActive = p.id === active
              return (
                <button key={p.id} onClick={() => setActive(p.id)} style={{
                  background: isActive ? "var(--bg-elev)" : "transparent",
                  border: "none", borderRight: "1px solid var(--border)",
                  padding: "12px 18px", fontFamily: "var(--font-mono)", fontSize: 12.5,
                  color: isActive ? "var(--text)" : "var(--text-muted)",
                  position: "relative", whiteSpace: "nowrap",
                  display: "inline-flex", alignItems: "center", gap: 10
                }}>
                  {isActive && <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: p.accent }} />}
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: isActive ? p.accent : "var(--text-dim)" }} />
                  {p.file}
                  {isActive && <span style={{ color: "var(--text-dim)", marginLeft: 4 }}>x</span>}
                </button>
              )
            })}
            <div style={{ flex: 1 }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 22px", borderBottom: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-dim)" }}>
            <span>~/projects / {cur.file}</span>
            <span>{cur.role}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,320px)", gap: 0, minHeight: 440 }} className="proj-grid">
            <div style={{ padding: "32px 36px", borderRight: "1px solid var(--border)" }}>
              <div className="comment" style={{ marginBottom: 18 }}>
                {"/**"}{"\n"}
                {" * "}{cur.subtitle}{"\n"}
                {" */"}
              </div>
              <h3 style={{ margin: "0 0 14px", fontFamily: "var(--font-display)", fontWeight: 400, fontVariationSettings: '"opsz" 144, "SOFT" 30', fontSize: "clamp(34px,4vw,48px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--text)" }}>
                {cur.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: 17, lineHeight: 1.6, maxWidth: 600, marginBottom: 28 }}>{cur.blurb}</p>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, lineHeight: 1.95, color: "var(--text)", padding: "16px 18px", background: "var(--bg-elev-2)", borderRadius: 6, border: "1px solid var(--border)", marginBottom: 26 }}>
                <div><Token type="keyword">const </Token><Token type="fn">impact</Token><Token type="dim"> = {"{"}</Token></div>
                {cur.highlights.map(h => (
                  <div key={h.k} style={{ paddingLeft: 16 }}>
                    <Token type="prop">{h.k}</Token><Token type="dim">: </Token><Token type="string">"{h.v}"</Token><Token type="dim">,</Token>
                  </div>
                ))}
                <div><Token type="dim">{"}"}</Token>;</div>
              </div>
              <div>
                <div className="comment" style={{ marginBottom: 8 }}>// dependencies</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cur.stack.map(t => <Tag key={t} accent>{t}</Tag>)}
                </div>
              </div>
            </div>

            <div style={{ padding: "32px 26px", background: "var(--bg)" }}>
              <div className="comment" style={{ marginBottom: 14 }}>// EXPLORER</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, fontFamily: "var(--font-mono)", fontSize: 12.5 }}>
                {PROJECTS.map(p => {
                  const isActive = p.id === active
                  return (
                    <button key={p.id} onClick={() => setActive(p.id)} style={{
                      display: "flex", alignItems: "center", gap: 10, padding: "8px 10px",
                      background: isActive ? "var(--accent-soft)" : "transparent",
                      border: "1px solid " + (isActive ? "var(--accent-line)" : "transparent"),
                      borderRadius: 5, color: isActive ? "var(--text)" : "var(--text-muted)",
                      textAlign: "left", cursor: "pointer"
                    }}>
                      <span style={{ width: 7, height: 7, borderRadius: "50%", background: p.accent, flexShrink: 0 }} />
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.file}</span>
                    </button>
                  )
                })}
              </div>
              <div className="divider" style={{ margin: "22px 0" }} />
              <div className="comment" style={{ marginBottom: 10 }}>// quick stats</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-mono)", fontSize: 12.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><Token type="muted">role</Token><span>{cur.role}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><Token type="muted">status</Token><span style={{ color: "var(--accent)" }}>● shipped</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><Token type="muted">type</Token><span>production</span></div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 18px", background: "var(--accent)", color: "#0b0c0e", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500 }}>
            <span>main · no errors · {cur.stack.length} deps</span>
            <span>UTF-8 · LF · {cur.file.split(".").pop().toUpperCase()}</span>
          </div>
        </div>
        <style>{`@media(max-width:820px){.proj-grid{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </section>
  )
}
