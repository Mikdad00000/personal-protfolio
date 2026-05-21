import { JsxTag, Token, Prompt } from './primitives'
import { SectionHeader } from './Shell'

function ContactRow({ label, value, href, icon, cmd, primary }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
      className="card card-hover" style={{ display: "block", padding: "16px 18px", textDecoration: "none", color: "var(--text)", background: primary ? "var(--accent-soft)" : "var(--bg-elev-2)", borderColor: primary ? "var(--accent-line)" : "var(--border)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: primary ? "var(--accent)" : "var(--text-muted)" }}>
          {icon}
          <span className="mono" style={{ fontSize: 12 }}>{label}</span>
        </span>
        <span className="mono" style={{ color: "var(--text-dim)", fontSize: 11 }}>&#8599;</span>
      </div>
      <div className="mono" style={{ fontSize: 13.5, marginTop: 8, color: "var(--text)" }}>{value}</div>
      <div className="mono" style={{ fontSize: 11, marginTop: 4, color: "var(--text-dim)" }}>$ {cmd}</div>
    </a>
  )
}

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHeader
          kicker="// section 05"
          tag={<JsxTag name="Contact" props={[{ k: "open", v: "true" }]} />}
          title={<>Let's <em>pair</em> on something ambitious.</>}
          lead="I'm open to senior full-stack roles, AI-product engineering, and consulting on LLM integration. Lowest-friction channel below."
        />
        <div className="card" style={{ overflow: "hidden", marginBottom: 36 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 18px", borderBottom: "1px solid var(--border)", background: "var(--bg-elev-2)", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-flex", gap: 6 }}>
                <i style={{ width: 10, height: 10, borderRadius: 50, background: "#ff5f57" }} />
                <i style={{ width: 10, height: 10, borderRadius: 50, background: "#febc2e" }} />
                <i style={{ width: 10, height: 10, borderRadius: 50, background: "#28c840" }} />
              </span>
              <span>contact.sh — bash</span>
            </div>
            <span style={{ color: "var(--text-dim)" }}>executable</span>
          </div>
          <div style={{ padding: "28px 28px 30px" }}>
            <Prompt path="~/mikdad" cmd="./contact.sh --reach me" />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--text-muted)", marginTop: 14, lineHeight: 1.9 }}>
              <Token type="comment"># pick your weapon of choice</Token>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14, marginTop: 20 }}>
              <ContactRow label="email" cmd="mailto:mikdad00000@gmail.com" value="mikdad00000@gmail.com" href="mailto:mikdad00000@gmail.com" primary
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              />
              <ContactRow label="github" cmd="open github.com/Mikdad00000" value="github.com/Mikdad00000" href="https://github.com/Mikdad00000"
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>}
              />
              <ContactRow label="linkedin" cmd="open linkedin.com/in/mikdad-rahman" value="in/mikdad-rahman" href="https://www.linkedin.com/in/mikdad-rahman/"
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <Prompt path="~/mikdad" cmd="">
                <span style={{ color: "var(--text-muted)" }}>response_time</span>
                <Token type="dim"> = </Token>
                <Token type="string">"&lt;24h business days"</Token>
                <span className="blink" style={{ marginLeft: 8 }} />
              </Prompt>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0", position: "relative", zIndex: 1 }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
        <div className="mono" style={{ fontSize: 12, color: "var(--text-dim)" }}>
          <Token type="comment">// © {new Date().getFullYear()} Mikdad Rahman · built with Claude</Token>
        </div>
        <div className="mono" style={{ fontSize: 12, color: "var(--text-dim)", display: "flex", gap: 14 }}>
          <span>uptime: 99.9%</span><span>·</span><span>last_deploy: just now</span>
        </div>
      </div>
    </footer>
  )
}
