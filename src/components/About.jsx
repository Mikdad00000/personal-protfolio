import { JsxTag, Token, CodeBlock } from './primitives'
import { SectionHeader } from './Shell'

export function About() {
  return (
    <section id="about">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: 56, alignItems: "start" }} className="about-grid">
          <div>
            <SectionHeader
              kicker="// section 01"
              tag={<JsxTag name="About" props={[{ k: "render", v: "true" }]} />}
              title={<>An engineer who treats <em>AI</em> as a peer, not a tool.</>}
            />
            <div style={{ color: "var(--text-muted)", fontSize: 17.5, lineHeight: 1.65, maxWidth: 620 }}>
              <p style={{ marginTop: 0 }}>
                I'm a full-stack developer with <Token type="fg">3+ years</Token> delivering production at scale —
                from <Token type="fg">government telecom infrastructure</Token> to AI-powered SaaS platforms. I work
                across the MERN stack, Spring Boot, .NET Core, and Angular.
              </p>
              <p>
                Currently at <Token type="fg">PACGEM</Token>, I architect multi-module systems,
                integrate the <Token type="fg">Claude</Token> and <Token type="fg">OpenAI APIs</Token>, and ship
                AI-native features end-to-end. Previously at <Token type="fg">Telcobright</Token>, I processed
                <Token type="fg"> 20M+ daily CDR/SMS records</Token> for national telecom operators.
              </p>
              <p>
                I've deeply integrated AI tools (Claude Code, ChatGPT) into every phase of development —
                code generation, debugging, test writing, documentation — and built LLM products with cost
                optimization, prompt caching, and multi-turn conversation design.
              </p>
            </div>
            <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 10 }}>
              <span className="pill"><span className="dot" style={{ background: "var(--info)", boxShadow: "0 0 8px var(--info)" }} /> ai-native workflow</span>
              <span className="pill"><span className="dot" style={{ background: "var(--warn)", boxShadow: "0 0 8px var(--warn)" }} /> production at scale</span>
              <span className="pill"><span className="dot" /> systems thinker</span>
            </div>
          </div>

          <CodeBlock filename="me.json" lang="json" style={{ position: "sticky", top: 110 }}>
            <span><Token type="dim">{"{"}</Token></span>{"\n"}
            <span>  <Token type="prop">"name"</Token><Token type="dim">: </Token><Token type="string">"Mikdad Rahman"</Token><Token type="dim">,</Token></span>{"\n"}
            <span>  <Token type="prop">"role"</Token><Token type="dim">: </Token><Token type="string">"Software Engineer"</Token><Token type="dim">,</Token></span>{"\n"}
            <span>  <Token type="prop">"company"</Token><Token type="dim">: </Token><Token type="string">"PACGEM"</Token><Token type="dim">,</Token></span>{"\n"}
            <span>  <Token type="prop">"location"</Token><Token type="dim">: </Token><Token type="string">"Dhaka, Bangladesh"</Token><Token type="dim">,</Token></span>{"\n"}
            <span>  <Token type="prop">"focus"</Token><Token type="dim">: [</Token></span>{"\n"}
            <span>    <Token type="string">"full-stack systems"</Token><Token type="dim">,</Token></span>{"\n"}
            <span>    <Token type="string">"llm-integrated products"</Token><Token type="dim">,</Token></span>{"\n"}
            <span>    <Token type="string">"data at scale"</Token></span>{"\n"}
            <span>  <Token type="dim">],</Token></span>{"\n"}
            <span>  <Token type="prop">"superpowers"</Token><Token type="dim">: [</Token></span>{"\n"}
            <span>    <Token type="string">"shipping fast w/ ai"</Token><Token type="dim">,</Token></span>{"\n"}
            <span>    <Token type="string">"query optimization"</Token><Token type="dim">,</Token></span>{"\n"}
            <span>    <Token type="string">"system architecture"</Token></span>{"\n"}
            <span>  <Token type="dim">],</Token></span>{"\n"}
            <span>  <Token type="prop">"available"</Token><Token type="dim">: </Token><span style={{ color: "var(--accent)" }}>true</span></span>{"\n"}
            <span><Token type="dim">{"}"}</Token></span>
          </CodeBlock>
        </div>
        <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </section>
  )
}
