import { useState, useEffect, useCallback, useRef } from 'react'
import { Shell, SECTIONS } from './components/Shell'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact, Footer } from './components/Contact'

const ACCENT_PRESETS = {
  "#a3e635": { soft: "rgba(163,230,53,0.12)", line: "rgba(163,230,53,0.32)" },
  "#22d3ee": { soft: "rgba(34,211,238,0.12)", line: "rgba(34,211,238,0.32)" },
  "#fb923c": { soft: "rgba(251,146,60,0.12)", line: "rgba(251,146,60,0.32)" },
  "#f472b6": { soft: "rgba(244,114,182,0.12)", line: "rgba(244,114,182,0.32)" },
}

const DEFAULTS = { theme: "terminal", accent: "#22d3ee", cursor: "on", rain: "on", density: "comfortable" }
const LS_KEY = "portfolio.prefs.v1"

function loadStored() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "null") } catch { return null }
}

function applyTweaks(t) {
  const body = document.body
  body.dataset.theme = t.theme
  body.dataset.cursor = t.cursor
  body.dataset.rain = t.rain
  body.dataset.density = t.density
  if (t.theme === "terminal") {
    const preset = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS["#a3e635"]
    document.documentElement.style.setProperty("--accent", t.accent)
    document.documentElement.style.setProperty("--accent-soft", preset.soft)
    document.documentElement.style.setProperty("--accent-line", preset.line)
  } else {
    document.documentElement.style.removeProperty("--accent")
    document.documentElement.style.removeProperty("--accent-soft")
    document.documentElement.style.removeProperty("--accent-line")
  }
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      let best = null
      entries.forEach(e => {
        if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e
      })
      if (best) setActive(best.target.id)
    }, { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] })
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return active
}

export default function App() {
  const stored = useRef(loadStored())
  const [prefs, setPrefsState] = useState({ ...DEFAULTS, ...(stored.current || {}) })

  const setPrefs = useCallback((patch) => {
    setPrefsState(prev => {
      const next = { ...prev, ...patch }
      try { localStorage.setItem(LS_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }, [])

  useEffect(() => { applyTweaks(prefs) }, [prefs])

  const active = useActiveSection(SECTIONS.map(s => s.id))

  const onJump = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Shell active={active} onJump={onJump} prefs={prefs} setPrefs={setPrefs} />
      <main>
        <Hero onJump={onJump} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
