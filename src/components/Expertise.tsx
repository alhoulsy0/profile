'use client'
import { motion } from 'framer-motion'
import { BrainCircuit, ShieldCheck, Zap, Landmark } from 'lucide-react'

export default function Expertise() {
    const areas = [
        {
            title: 'Organizational Maturity Architecture',
            subtext: "Transforming chaotic development cycles into governed, predictable quality engines.",
            icon: Landmark,
            theme: 'governance',
            keywords: [
                'TMMi Level 5 Strategy',
                'Quality Management Office (QMO)',
                'Process Optimization',
                'Agile Governance (PSM I)'
            ]
        },
        {
            title: 'Hyper-Scale Test Automation',
            subtext: "Building self-healing frameworks that validate software at enterprise speed.",
            icon: Zap,
            theme: 'automation',
            keywords: [
                'End-to-End Frameworks (Playwright/Cypress)',
                'CI/CD Pipeline Integration',
                'Performance Engineering (JMeter)',
                '"Zero-Touch" Delivery'
            ]
        },
        {
            title: 'Agentic AI Engineering',
            subtext: "Bridging the gap between LLM potential and production reliability.",
            icon: BrainCircuit,
            theme: 'ai',
            keywords: [
                'Autonomous AI Agents',
                'RAG Architectures & Vector DBs',
                'Python AI Integration',
                'AI Fairness & Ethics (SHAP)'
            ]
        },
        {
            title: 'Offensive Security & Resilience',
            subtext: "Hardening critical infrastructure through proactive threat simulation.",
            icon: ShieldCheck,
            theme: 'security',
            keywords: [
                'Red Team Operations',
                'AppSec & Penetration Testing',
                'Vulnerability Management',
                'DevSecOps Implementation'
            ]
        }
    ]

    const themes: Record<string, string> = {
        governance: 'border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500/50 text-yellow-500',
        automation: 'border-blue-500/20 bg-blue-500/5 hover:border-blue-500/50 text-blue-400',
        ai: 'border-purple-500/20 bg-purple-500/5 hover:border-purple-500/50 text-purple-400',
        security: 'border-green-500/20 bg-green-500/5 hover:border-green-500/50 text-green-400'
    }

    return (
        <section id="expertise" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The &quot;Quad-Core&quot; Expertise</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Operating at the intersection of Strategy, Scale, Intelligence, and Defense.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {areas.map((area, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group overflow-hidden ${themes[area.theme] || 'border-slate-800'}`}
                        >
                            {/* Hover Reveal Pattern */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl bg-slate-950/50 ring-1 ring-white/10 ${themes[area.theme].split(' ').pop()}`}>
                                        <area.icon className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-slate-400 text-sm italic mb-8 border-l-2 border-slate-700 pl-3">
                                    {area.subtext}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {area.keywords.map((keyword, j) => (
                                        <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                                            <span className={`w-1.5 h-1.5 rounded-full ${themes[area.theme]?.split(' ').pop()?.replace('text-', 'bg-')}`} />
                                            {keyword}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
