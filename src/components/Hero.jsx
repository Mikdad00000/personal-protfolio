import { useState, useEffect } from 'react'
import { CodeRain, Prompt, Token, Tag } from './primitives'
import { JsxTag } from './primitives'

const HERO_LINES = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "mikdad-rahman" },
  { type: "cmd", text: "cat ./bio.md | head -3" },
]

export function Hero({ onJump }) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep(s => Math.min(s + 1, HERO_LINES.length)), 320)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" style={{ paddingTop: "5.5rem", paddingBottom: "6.5rem", overflow: "hidden" }}>
      <CodeRain />
      <div className="container" style={{ position: "relative" }}>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,360px)", gap: 28, alignItems: "start", marginBottom: 48 }} className="hero-top">
          <div className="card" style={{ padding: "18px 22px", background: "var(--bg-elev)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)" }}>
              <span>zsh — login</span><span>80x24</span>
            </div>
            {HERO_LINES.slice(0, step).map((l, i) => (
              l.type === "cmd"
                ? <Prompt key={i} path="~/mikdad" cmd={l.text} />
                : <div key={i} style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>{l.text}</div>
            ))}
            {step >= HERO_LINES.length && (
              <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
                <div><Token type="comment"># 3+ yrs · full-stack · ai-native workflows</Token></div>
                <div><Token type="comment"># shipped 20m daily txns, $2m+/mo billing, ai saas</Token></div>
                <div><Token type="comment"># currently @ pacgem, dhaka</Token></div>
              </div>
            )}
            <Prompt path="~/mikdad" cmd=""><span className="blink" /></Prompt>
          </div>

          <div className="card" style={{ padding: "18px 20px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)", marginBottom: 14, display: "flex", justifyContent: "space-between" }}>
              <span>// status.json</span><span>v2026.05</span>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.9 }}>
              <div><Token type="prop">role</Token><Token type="dim">: </Token><Token type="string">"software engineer"</Token></div>
              <div><Token type="prop">company</Token><Token type="dim">: </Token><Token type="string">"PACGEM"</Token></div>
              <div><Token type="prop">stack</Token><Token type="dim">: </Token><Token type="string">"react · spring · ai"</Token></div>
              <div><Token type="prop">location</Token><Token type="dim">: </Token><Token type="string">"Dhaka, BD"</Token></div>
              <div><Token type="prop">avail</Token><Token type="dim">: </Token><span style={{ color: "var(--accent)" }}>true</span></div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1040, marginTop: 8 }}>
          <JsxTag name="Engineer" props={[{ k: "focus", v: "ai-native" }, { k: "since", v: 2023 }]} className="mono" />
          <h1 style={{
            margin: "18px 0 22px", fontFamily: "var(--font-display)",
            fontVariationSettings: '"opsz" 144, "SOFT" 30', fontWeight: 400,
            fontSize: "clamp(54px,8vw,112px)", lineHeight: 0.95, letterSpacing: "-0.035em", color: "var(--text)"
          }}>
            Building{" "}<em style={{ fontStyle: "italic", fontVariationSettings: '"opsz" 144, "SOFT" 100', color: "var(--accent)" }}>production</em>{" "}systems<br />
            that scale with{" "}<span style={{ position: "relative" }}>
              AI
              <svg viewBox="0 0 80 14" style={{ position: "absolute", left: 0, right: 0, bottom: "-0.12em", width: "100%", height: "0.18em", color: "var(--accent)" }} preserveAspectRatio="none">
                <path d="M2 9 Q 20 2, 40 7 T 78 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}at every layer.
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: 19, lineHeight: 1.55, maxWidth: 720, margin: "8px 0 36px" }}>
            Full-stack engineer with <strong style={{ color: "var(--text)", fontWeight: 600 }}>3+ years</strong> shipping production at scale —
            from <strong style={{ color: "var(--text)", fontWeight: 600 }}>20M daily telecom transactions</strong> to multi-tenant AI SaaS.
            Claude · OpenAI · Spring · React · Postgres. Currently @ <Token type="tag">PACGEM</Token>.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 36 }}>
            <a href="#projects" onClick={e => { e.preventDefault(); onJump && onJump("projects") }} style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 20px",
              background: "var(--accent)", color: "#0b0c0e", borderRadius: 6,
              fontFamily: "var(--font-mono)", fontSize: 13.5, fontWeight: 600
            }}>
              <span style={{ color: "#0b0c0e" }}>&#10095;</span>
              ./view_projects.sh
            </a>
            <a href="https://github.com/Mikdad00000" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 18px",
              background: "transparent", color: "var(--text)", border: "1px solid var(--border-strong)",
              borderRadius: 6, fontFamily: "var(--font-mono)", fontSize: 13.5
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              github / Mikdad00000
            </a>
            <a href="mailto:mikdad00000@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 18px", background: "transparent", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 13.5 }}>
              &#8627; mikdad00000@gmail.com
            </a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "16px 0 0", borderTop: "1px dashed var(--border)", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dim)", alignItems: "center" }}>
            <span>// active stack &#8594;</span>
            {["react","typescript","spring-boot",".net-core","postgres","claude-api","openai","docker","node.js"].map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:880px){.hero-top{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
