'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const keywords = [
    "SHAP", "LIME", "TMMi Level 5", "PKI", "TLS", "Cypress", "Playwright", "Selenium", "Burp Suite",
    "Azure DevOps", "Jenkins", "Scrum Master", "WCAG", "Nexus Android OS", "Python", "JavaScript", "REST APIs",
    "Nexus 5", "Google HQ"
]

const HighlightText = ({ text }: { text: string }) => {
    const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'g'))
    return (
        <span>
            {parts.map((part, i) =>
                keywords.includes(part) ? (
                    <span key={i} className="text-emerald-400 font-mono font-bold bg-emerald-400/10 px-1 rounded mx-0.5 text-[0.9em] border border-emerald-400/20">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </span>
    )
}

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

    const experiences = [
        {
            year: "2016 — 2025",
            title: "Full Stack AI Security & Quality Engineer",
            entity: "Tier-1 Digital Consultancy & Government Advisory (Riyadh)",
            note: "(Formerly Jodayn)",
            mission: "Architected the digital defense and quality backbone for a nation’s most critical infrastructure. Operated at the intersection of AI innovation, cybersecurity, and process maturity.",
            operations: [
                { title: "AI Integrity & Ethics", text: "Engineered the &quot;Fairness Framework&quot; for AI decision-making models using SHAP & LIME, ensuring algorithmic accountability for government use-cases." },
                { title: "The TMMi Level 5 Transformation", text: "Spearheaded a global maturity initiative, guiding enterprise organizations to the pinnacle of quality governance (Level 5), a status held by few entities worldwide." },
                { title: "Fintech Security Shield", text: "Designed the PKI & Digital Signature architecture for secure document transmission, fortifying the financial sector against tampering." },
                { title: "Offensive Security (Red Teaming)", text: "Executed deep-dive Burp Suite penetration tests on REST APIs, proactively hunting vulnerabilities before they could threaten national data." },
                { title: "DevSecOps Pipeline", text: "Built the &quot;Invisible Wall&quot; of security—automated Azure DevOps/Jenkins pipelines that enforce code quality gates and security checks on every commit." }
            ],
            tags: ["#AI_Security", "#TMMi_L5", "#DevSecOps"]
        },
        {
            year: "2015 — 2016",
            title: "Senior Software Quality Engineer",
            entity: "Enterprise Software Solution House (Amman)",
            note: "(Formerly CUBIC)",
            mission: "Enforced digital inclusivity and stability for high-traffic enterprise ecosystems.",
            operations: [
                { title: "The Accessibility Mandate", text: "Achieved 100% WCAG Compliance, ensuring digital services were universally accessible across the region." },
                { title: "Performance Engineering", text: "Diagnosed and neutralized critical bottlenecks in distributed web architectures, ensuring zero-downtime releases for corporate stakeholders." }
            ],
            tags: ["#WCAG", "#Performance", "#WebArchitecture"]
        },
        {
            year: "2012 — 2015",
            title: "Automation Software Quality Engineer",
            entity: "Global Electronics & Mobile R&D Giant (EMEA)",
            note: "(Formerly LG Electronics)",
            mission: "Bridged the engineering gap between Silicon Valley and the Middle East, ensuring the flagship Nexus line met global standards.",
            operations: [
                { title: "The Google Alliance", text: "Managed the strategic engineering partnership for the Nexus 5 rollout, validating pure Android OS builds directly with Google HQ engineering teams." },
                { title: "Global Carrier Certification", text: "Led the &quot;Green Light&quot; automation protocols for regional carrier compliance, ensuring the hardware performed flawlessly across diverse network infrastructures." },
                { title: "Mobile Automation Scale", text: "Architected native automation frameworks that slashed regression testing cycles for Android ecosystems." }
            ],
            tags: ["#Android", "#Nexus", "#Automation"]
        }
    ]

    return (
        <section id="experience" className="py-32 relative overflow-hidden bg-slate-950/80">
            <div className="container mx-auto px-6" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-4 inline-block">
                        The Mission Log
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        From Global R&D to National Digital Sovereignty.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Living Timeline Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-800">
                        <motion.div
                            style={{ scaleY, transformOrigin: 'top' }}
                            className="w-full h-full bg-gradient-to-b from-emerald-500 via-blue-500 to-amber-500"
                        />
                    </div>

                    {experiences.map((exp, i) => (
                        <div key={i} className={`relative flex items-start justify-between gap-8 mb-24 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-left"}`}>

                            {/* Timeline Node */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 mt-8 w-5 h-5 rounded-full bg-slate-950 border-[3px] border-slate-700 z-10 group-hover:border-emerald-500 transition-colors shadow-[0_0_15px_rgba(0,0,0,1)]">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="w-full h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 opacity-80"
                                />
                            </div>

                            {/* Date Side */}
                            <div className={`hidden md:block w-1/2 px-12 pt-6 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                                <div className="inline-flex flex-col">
                                    <span className="text-2xl font-mono text-emerald-400/90 font-bold tracking-tight">
                                        {exp.year}
                                    </span>
                                    <span className="text-slate-500 text-xs uppercase tracking-widest mt-1">Mission Timeline</span>
                                </div>
                            </div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8 group"
                            >
                                <div className="glass-card p-8 rounded-2xl border border-slate-800/60 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden shadow-2xl bg-slate-900/40 backdrop-blur-md hover:scale-[1.01]">
                                    {/* Mobile Year */}
                                    <span className="md:hidden text-xs font-mono text-emerald-500 mb-4 block border border-emerald-500/20 bg-emerald-500/5 px-2 py-1 w-fit rounded">
                                        {exp.year}
                                    </span>

                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        {exp.title}
                                    </h3>

                                    <div className="mb-6">
                                        <p className="text-lg font-semibold text-blue-400 mb-0.5">
                                            {exp.entity}
                                        </p>
                                        <p className="text-slate-500 text-sm italic">{exp.note}</p>
                                    </div>

                                    <div className="mb-8 p-4 bg-slate-950/50 rounded-lg border-l-2 border-amber-500/50">
                                        <p className="text-slate-300 italic text-sm leading-relaxed">
                                            &quot;{exp.mission}&quot;
                                        </p>
                                    </div>

                                    <ul className="space-y-5 mb-8">
                                        {exp.operations.map((op, j) => (
                                            <li key={j} className="relative pl-6">
                                                <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                <strong className="text-slate-100 block mb-1 text-sm">{op.title}</strong>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    <HighlightText text={op.text} />
                                                </p>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold text-slate-400 bg-slate-950/50 px-3 py-1 rounded-full border border-slate-800 uppercase tracking-wider hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
