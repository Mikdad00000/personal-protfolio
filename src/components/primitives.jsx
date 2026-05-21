import { useRef } from 'react'

export function JsxTag({ name, props = [], selfClose = true, closing = false, className = "", as: As = "span" }) {
  return (
    <As className={"jsx-tag " + className}>
      <span className="tag-bracket">{closing ? "</" : "<"}</span>
      <span className="tag-name">{name}</span>
      {props.map((p, i) => (
        <span key={i}>
          {" "}
          <span className="tag-prop">{p.k}</span>
          {p.v != null && (
            <>
              <span className="tag-bracket">=</span>
              {typeof p.v === "number"
                ? <span style={{ color: "var(--tok-number)" }}>{"{" + p.v + "}"}</span>
                : <span className="tag-str">"{p.v}"</span>}
            </>
          )}
        </span>
      ))}
      <span className="tag-bracket">{selfClose ? " />" : ">"}</span>
    </As>
  )
}

export function Prompt({ path = "~/mikdad", cmd, children, accent = true }) {
  return (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.7 }}>
      <span style={{ color: "var(--text-dim)" }}>{path}</span>
      <span style={{ color: accent ? "var(--accent)" : "var(--text-muted)", margin: "0 8px" }}>❯</span>
      {cmd && <span style={{ color: "var(--text)" }}>{cmd}</span>}
      {children}
    </div>
  )
}

export function Token({ type, children }) {
  const map = {
    keyword: "var(--tok-keyword)", string: "var(--tok-string)", number: "var(--tok-number)",
    prop: "var(--tok-prop)", comment: "var(--tok-comment)", fn: "var(--tok-fn)",
    tag: "var(--tok-tag)", muted: "var(--text-muted)", dim: "var(--text-dim)", fg: "var(--text)"
  }
  return <span style={{ color: map[type] || "inherit" }}>{children}</span>
}

export function CodeBlock({ filename, lang, children, style = {}, dense = false }) {
  return (
    <div className="card" style={{ overflow: "hidden", ...style }}>
      {(filename || lang) && (
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "10px 16px", borderBottom: "1px solid var(--border)",
          background: "var(--bg-elev-2)", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-flex", gap: 6 }}>
              <i style={{ width: 10, height: 10, borderRadius: 50, background: "#ff5f57" }} />
              <i style={{ width: 10, height: 10, borderRadius: 50, background: "#febc2e" }} />
              <i style={{ width: 10, height: 10, borderRadius: 50, background: "#28c840" }} />
            </span>
            <span>{filename}</span>
          </div>
          {lang && <span style={{ color: "var(--text-dim)" }}>{lang}</span>}
        </div>
      )}
      <pre style={{
        margin: 0, padding: dense ? "14px 18px" : "20px 22px",
        fontFamily: "var(--font-mono)", fontSize: 13.5, lineHeight: 1.65,
        color: "var(--text)", overflow: "auto"
      }}>
        {children}
      </pre>
    </div>
  )
}

export function Tag({ children, accent = false }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "4px 9px", borderRadius: 4,
      border: "1px solid " + (accent ? "var(--accent-line)" : "var(--border)"),
      background: accent ? "var(--accent-soft)" : "transparent",
      fontFamily: "var(--font-mono)", fontSize: 11.5,
      color: accent ? "var(--accent)" : "var(--text-muted)",
      letterSpacing: "0.01em", whiteSpace: "nowrap"
    }}>
      {children}
    </span>
  )
}

export function Stat({ value, label, suffix = "" }) {
  return (
    <div className="card" style={{ padding: "22px 22px 20px" }}>
      <div style={{
        fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1,
        fontVariationSettings: '"opsz" 144, "SOFT" 30',
        color: "var(--text)", letterSpacing: "-0.02em"
      }}>
        {value}{suffix && <span style={{ color: "var(--accent)" }}>{suffix}</span>}
      </div>
      <div style={{ marginTop: 10, color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.4 }}>{label}</div>
    </div>
  )
}

export function CodeRain() {
  const cols = 14
  const lines = useRef(null)
  if (!lines.current) {
    const chars = "01<>{}[];=()/*-+abcdef"
    lines.current = Array.from({ length: cols }).map(() =>
      Array.from({ length: 80 }).map(() => chars[(Math.random() * chars.length) | 0]).join("\n")
    )
  }
  return (
    <div className="code-rain" aria-hidden="true">
      {lines.current.map((s, i) => (
        <div className="col" key={i} style={{
          left: `${(i / cols) * 100}%`,
          animationDuration: `${14 + (i % 5) * 4}s`,
          animationDelay: `${-(i * 1.3)}s`,
          width: `${100 / cols}%`,
        }}>{s}</div>
      ))}
    </div>
  )
}
