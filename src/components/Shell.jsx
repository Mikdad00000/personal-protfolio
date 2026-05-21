import { useState, useEffect, useRef } from 'react'

export const SECTIONS = [
  { id: "home",       label: "_hero.tsx" },
  { id: "about",      label: "about.json" },
  { id: "skills",     label: "stack.config.ts" },
  { id: "experience", label: "history.log" },
  { id: "projects",   label: "projects/" },
  { id: "contact",    label: "contact.sh" },
]

const THEME_OPTIONS = [
  { id: "terminal",  label: "Terminal",  swatch: ["#0b0c0e","#a3e635"], hint: "warm dark + lime" },
  { id: "crt",       label: "CRT",       swatch: ["#050807","#5cff9d"], hint: "phosphor scanlines" },
  { id: "blueprint", label: "Blueprint", swatch: ["#0a1929","#67e8f9"], hint: "drafting grid" },
  { id: "notebook",  label: "Notebook",  swatch: ["#f5efde","#c2410c"], hint: "graph paper + ink" },
]
const ACCENT_OPTIONS = [
  { id: "#a3e635", label: "lime" },
  { id: "#22d3ee", label: "cyan" },
  { id: "#fb923c", label: "amber" },
  { id: "#f472b6", label: "pink" },
]

function SettingLabel({ children }) {
  return (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)" }}>
      {children}
    </div>
  )
}

function SettingToggle({ label, value, onChange }) {
  return (
    <button onClick={() => onChange(!value)} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "transparent", border: "none", padding: "4px 0", cursor: "pointer",
      color: "var(--text)", textAlign: "left", fontFamily: "var(--font-sans)", fontSize: 13, width: "100%"
    }}>
      <span>{label}</span>
      <span style={{
        width: 32, height: 18, borderRadius: 999,
        background: value ? "var(--accent)" : "var(--bg-elev-2)",
        border: "1px solid " + (value ? "var(--accent-line)" : "var(--border)"),
        position: "relative", transition: "background 150ms", flexShrink: 0
      }}>
        <span style={{
          position: "absolute", top: 1, left: value ? 15 : 1,
          width: 14, height: 14, borderRadius: "50%",
          background: value ? "#0b0c0e" : "var(--text-muted)",
          transition: "left 150ms"
        }} />
      </span>
    </button>
  )
}

function PortfolioControls({ prefs, setPrefs }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey) }
  }, [open])

  return (
    <span ref={wrapRef} style={{ position: "relative" }}>
      <button onClick={() => setOpen(o => !o)} aria-label="Customize appearance" style={{
        display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px 4px 8px",
        background: open ? "var(--accent-soft)" : "var(--bg-elev)",
        border: "1px solid " + (open ? "var(--accent-line)" : "var(--border)"),
        borderRadius: 6, fontFamily: "var(--font-mono)", fontSize: 11,
        color: open ? "var(--accent)" : "var(--text-muted)", cursor: "pointer", transition: "all 150ms"
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <span>customize</span>
      </button>

      {open && (
        <div role="dialog" style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0, width: 320,
          background: "var(--bg-elev)", border: "1px solid var(--border-strong)",
          borderRadius: 10, boxShadow: "0 16px 48px rgba(0,0,0,0.45)", zIndex: 60,
          color: "var(--text)", overflow: "hidden"
        }}>
          <div style={{
            padding: "10px 14px", borderBottom: "1px solid var(--border)", background: "var(--bg-elev-2)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)"
          }}>
            <span>// appearance.config</span>
            <button onClick={() => setOpen(false)} style={{ background: "transparent", border: "none", color: "var(--text-dim)", cursor: "pointer", fontSize: 14, padding: 0 }}>x</button>
          </div>
          <div style={{ padding: "16px 14px", display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <SettingLabel>Theme</SettingLabel>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
                {THEME_OPTIONS.map(opt => {
                  const isActive = prefs.theme === opt.id
                  return (
                    <button key={opt.id} onClick={() => setPrefs({ theme: opt.id })} style={{
                      background: "var(--bg)", border: "1px solid " + (isActive ? "var(--accent-line)" : "var(--border)"),
                      outline: isActive ? "2px solid var(--accent)" : "none", outlineOffset: -1,
                      borderRadius: 8, padding: 8, cursor: "pointer", textAlign: "left"
                    }}>
                      <div style={{ height: 36, borderRadius: 5, marginBottom: 7, background: opt.swatch[0], position: "relative", overflow: "hidden", border: "1px solid var(--border)" }}>
                        <span style={{ position: "absolute", left: 6, bottom: 5, width: 8, height: 8, borderRadius: "50%", background: opt.swatch[1], boxShadow: `0 0 8px ${opt.swatch[1]}` }} />
                        {opt.id === "crt" && <span style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg,transparent 0px,transparent 2px,rgba(0,0,0,0.4) 3px,rgba(0,0,0,0.4) 3px)" }} />}
                        {opt.id === "blueprint" && <span style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(103,232,249,0.25) 1px,transparent 1px),linear-gradient(90deg,rgba(103,232,249,0.25) 1px,transparent 1px)", backgroundSize: "8px 8px" }} />}
                        {opt.id === "notebook" && <span style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(28,64,132,0.18) 1px,transparent 1px),linear-gradient(90deg,rgba(28,64,132,0.18) 1px,transparent 1px)", backgroundSize: "6px 6px" }} />}
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: isActive ? "var(--accent)" : "var(--text)" }}>{opt.label}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", marginTop: 2 }}>{opt.hint}</div>
                    </button>
                  )
                })}
              </div>
            </div>
            <div style={{ opacity: prefs.theme === "terminal" ? 1 : 0.4, pointerEvents: prefs.theme === "terminal" ? "auto" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <SettingLabel>Accent</SettingLabel>
                {prefs.theme !== "terminal" && <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)" }}>locked by theme</span>}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                {ACCENT_OPTIONS.map(a => {
                  const isActive = prefs.accent === a.id && prefs.theme === "terminal"
                  return (
                    <button key={a.id} onClick={() => setPrefs({ accent: a.id })} aria-label={a.label} style={{
                      width: 32, height: 32, borderRadius: "50%", background: a.id,
                      border: "2px solid " + (isActive ? "var(--text)" : "transparent"),
                      outline: "1px solid var(--border)", outlineOffset: -2, cursor: "pointer",
                      transform: isActive ? "scale(1.05)" : "scale(1)"
                    }} />
                  )
                })}
              </div>
            </div>
            <div>
              <SettingLabel>Flair</SettingLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                <SettingToggle label="Blinking cursor" value={prefs.cursor === "on"} onChange={(v) => setPrefs({ cursor: v ? "on" : "off" })} />
                <SettingToggle label="Code-rain (hero)" value={prefs.rain === "on"} onChange={(v) => setPrefs({ rain: v ? "on" : "off" })} />
                <SettingToggle label="Compact density" value={prefs.density === "compact"} onChange={(v) => setPrefs({ density: v ? "compact" : "comfortable" })} />
              </div>
            </div>
            <button onClick={() => setPrefs({ theme: "terminal", accent: "#a3e635", cursor: "on", rain: "on", density: "comfortable" })} style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)",
              background: "transparent", border: "1px dashed var(--border)", borderRadius: 6, padding: "8px 10px", cursor: "pointer"
            }}>
              $ reset --defaults
            </button>
          </div>
        </div>
      )}
    </span>
  )
}

export function Shell({ active, onJump, prefs, setPrefs }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="editor-chrome" style={{ borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 22px", borderBottom: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ display: "inline-flex", gap: 6 }}>
            <i style={{ width: 11, height: 11, borderRadius: 50, background: "#ff5f57" }} />
            <i style={{ width: 11, height: 11, borderRadius: 50, background: "#febc2e" }} />
            <i style={{ width: 11, height: 11, borderRadius: 50, background: "#28c840" }} />
          </span>
          <span style={{ color: "var(--text-dim)" }}>~/mikdad/portfolio</span>
          <span style={{ color: "var(--text-dim)" }}>—</span>
          <span style={{ color: "var(--text-muted)" }}>main</span>
          <span style={{ color: "var(--accent)" }}>●</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ color: "var(--text-dim)" }}>UTC+6 · Dhaka</span>
          <span className="pill"><span className="dot" />open to opportunities</span>
          <PortfolioControls prefs={prefs} setPrefs={setPrefs} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "stretch", overflow: "auto", scrollbarWidth: "none" }}>
        {SECTIONS.map(s => {
          const isActive = active === s.id
          return (
            <button key={s.id} onClick={() => onJump(s.id)} style={{
              background: isActive ? "var(--bg)" : "transparent", border: "none",
              borderRight: "1px solid var(--border)",
              borderBottom: isActive ? "1px solid var(--bg)" : "1px solid var(--border)",
              marginBottom: isActive ? "-1px" : 0,
              padding: "10px 18px", fontFamily: "var(--font-mono)", fontSize: 12.5,
              color: isActive ? "var(--text)" : "var(--text-muted)",
              position: "relative", whiteSpace: "nowrap", transition: "color 150ms",
              display: "inline-flex", alignItems: "center", gap: 8
            }}>
              {isActive && <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--accent)" }} />}
              <span style={{ color: isActive ? "var(--accent)" : "var(--text-dim)" }}>●</span>
              {s.label}
            </button>
          )
        })}
        <div style={{ flex: 1, borderBottom: "1px solid var(--border)" }} />
      </div>
    </div>
  )
}

export function SectionHeader({ kicker, title, lead, tag }) {
  return (
    <div style={{ marginBottom: 56, maxWidth: 880 }}>
      {tag && <div style={{ marginBottom: 14 }}>{tag}</div>}
      <div className="kicker">{kicker}</div>
      <h2 className="section-title">{title}</h2>
      {lead && <p style={{ marginTop: 22, color: "var(--text-muted)", fontSize: 18, lineHeight: 1.6, maxWidth: 680 }}>{lead}</p>}
    </div>
  )
}
