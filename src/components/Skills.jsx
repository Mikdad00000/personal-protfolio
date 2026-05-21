import { useState, useEffect, useRef } from 'react'
import { JsxTag, Token, Stat } from './primitives'
import { SectionHeader } from './Shell'

const SKILL_GROUPS = [
  { name: "Frontend", icon: "</>", items: [
    { k: "react", v: "18", level: 88 }, { k: "typescript", v: "5.x", level: 88 },
    { k: "angular", v: "17", level: 80 }, { k: "tailwind", v: "3", level: 85 },
  ]},
  { name: "Backend", icon: "{}", items: [
    { k: "spring-boot", v: "3", level: 92 }, { k: "dotnet-core", v: "8", level: 88 },
    { k: "node-express", v: "20", level: 85 }, { k: "rest-microservices", v: null, level: 90 },
  ]},
  { name: "AI & LLM", icon: "✦", items: [
    { k: "anthropic-claude", v: null, level: 88 }, { k: "openai", v: null, level: 85 },
    { k: "prompt-engineering", v: "RAG", level: 82 }, { k: "multi-turn", v: null, level: 80 },
  ]},
  { name: "Databases", icon: "DB", items: [
    { k: "postgres", v: null, level: 85 }, { k: "mongodb", v: null, level: 85 },
    { k: "mysql-mariadb", v: null, level: 88 }, { k: "query-opt", v: "500GB+", level: 85 },
  ]},
  { name: "DevOps / Security", icon: "Δ", items: [
    { k: "docker", v: null, level: 80 }, { k: "ci-cd", v: null, level: 80 },
    { k: "jwt-rbac", v: null, level: 85 }, { k: "git-linux", v: null, level: 88 },
  ]},
]

function SkillGroup({ group, visible }) {
  return (
    <div className="card" style={{ padding: "22px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 30, height: 30, borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--bg-elev-2)", border: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)" }}>{group.icon}</span>
          <h4 style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text)" }}>
            <Token type="keyword">export const </Token><Token type="fn">{group.name.toLowerCase().replace(/[\s&/]+/g, "_")}</Token>
          </h4>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)" }}>{group.items.length} items</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {group.items.map(it => (
          <div key={it.k}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13.5 }}>
                <Token type="dim">{"<"}</Token>
                <Token type="tag">{it.k}</Token>
                {it.v && (<> <Token type="prop">v</Token><Token type="dim">=</Token><Token type="string">"{it.v}"</Token></>)}
                <Token type="dim">{" />"}</Token>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-dim)" }}>{it.level}<Token type="dim">%</Token></span>
            </div>
            <div style={{ height: 3, background: "var(--bg-elev-2)", borderRadius: 2, overflow: "hidden", border: "1px solid var(--border)" }}>
              <div style={{ height: "100%", width: visible ? `${it.level}%` : "0%", background: "var(--accent)", transition: "width 1100ms cubic-bezier(.2,.7,.2,1)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker="// section 02"
          tag={<JsxTag name="Stack" props={[{ k: "modules", v: 5 }]} />}
          title={<>Every layer of the stack — <em>configured</em> for AI velocity.</>}
          lead="Pragmatic about tools, opinionated about quality. The list below is what I reach for daily in production — not what I've skimmed."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))", gap: 18 }}>
          {SKILL_GROUPS.map(g => <SkillGroup key={g.name} group={g} visible={visible} />)}
        </div>
        <div style={{ marginTop: 56 }}>
          <div className="comment" style={{ marginBottom: 14 }}>// production_impact.metrics</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            <Stat value="20" suffix="M+" label="daily CDR / SMS records processed" />
            <Stat value="$2" suffix="M+" label="monthly billing volume handled" />
            <Stat value="40" suffix="%" label="repetitive work cut with AI tooling" />
            <Stat value="83" suffix="%" label="DB processing time reduced (4h to 45m)" />
          </div>
        </div>
      </div>
    </section>
  )
}
