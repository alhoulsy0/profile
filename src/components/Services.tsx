'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Activity, Scale } from 'lucide-react'

export default function Services() {
    const services = [
        {
            title: 'TMMi Maturity Assessment',
            subtitle: 'Governance & Roadmap',
            description: 'A rigorous evaluation of your current quality processes against the global TMMi standard.',
            icon: Scale,
            color: "emerald",
            grad: "from-emerald-500/20 to-teal-500/5",
            features: [
                'Official TMMi Gap Analysis',
                'Maturity Roadmap (Level 2-5)',
                'QMO Governance Setup',
                'Process Definition & Optimization'
            ]
        },
        {
            title: 'Project Rescue Strategy',
            subtitle: 'Interim Leadership',
            description: 'Parachute leadership for failing projects. Diagnosing bottlenecks and restructuring quality delivery.',
            icon: Activity,
            color: "blue",
            grad: "from-blue-500/20 to-indigo-500/5",
            features: [
                'Crisis Management & Recovery',
                'QA Strategy Overhaul',
                'Interim QA Leadership',
                'Team Competency Building'
            ]
        },
        {
            title: 'AI Automation Architecture',
            subtitle: 'Future Stack Design',
            description: 'Designing the next generation of intelligent test ecosystems using Agentic AI and self-healing tech.',
            icon: Cpu,
            color: "violet",
            grad: "from-violet-500/20 to-fuchsia-500/5",
            features: [
                'Agentic Test Frameworks',
                'Self-Healing Implementation',
                'RAG Pipeline Design',
                'Tool Stack Selection Strategy'
            ]
        },
        {
            title: 'Cybersecurity Operations',
            subtitle: 'Offensive Defense',
            description: 'Comprehensive offensive security operations including rigorous penetration testing and vulnerability assessments.',
            icon: ShieldCheck,
            color: "rose",
            grad: "from-rose-500/20 to-orange-500/5",
            features: [
                'Network & Web App Penetration Testing',
                'Continuous Vulnerability Assessment',
                'Security Architecture Review',
                'Threat Modeling & Risk Analysis'
            ]
        }
    ]

    return (
        <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">

            {/* --- PREMIUM AI-MESH BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">

                {/* 1. Base Grid Layer */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.2)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

                {/* 2. Floating 'Neural' Dots */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * 1000,
                                y: Math.random() * 1000,
                                opacity: Math.random() * 0.5 + 0.1
                            }}
                            animate={{
                                y: [Math.random() * 1000, Math.random() * 1000],
                                x: [Math.random() * 1000, Math.random() * 1000],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            }}
                            className="absolute w-1 h-1 bg-slate-500 rounded-full"
                        />
                    ))}
                </div>

                {/* 3. Ambient Color Orbs (Matching the Service Colors) */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">Deployment Capabilities</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                        Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">Services.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        High-precision engagements for organizations demanding tier-one quality governance and security assurance.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-full cursor-default"
                        >
                            {/* Inner Card Background (Slightly Lighter Slate) */}
                            <div className="absolute inset-0 bg-slate-900/50 rounded-[2rem] border border-slate-800 transition-all duration-500 group-hover:border-slate-700 group-hover:bg-slate-900/80 backdrop-blur-sm" />

                            {/* Hover Gradient Bloom */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-2xl`} />

                            {/* Content Container */}
                            <div className="relative z-10 p-10 h-full flex flex-col rounded-[2rem] overflow-hidden">

                                {/* Top: Icon & Subtitle */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center 
                                        ${service.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                            service.color === 'blue' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                service.color === 'violet' ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20' :
                                                    'bg-rose-500/10 text-rose-400 border border-rose-500/20'} 
                                        transition-transform duration-500 group-hover:scale-110 shadow-lg`}>
                                        <service.icon className="w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-800 bg-slate-950/50 text-slate-400 group-hover:border-slate-700 transition-colors`}>
                                        {service.subtitle}
                                    </div>
                                </div>

                                {/* Title & Text */}
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-10 h-20 text-base">
                                    {service.description}
                                </p>

                                {/* Features Grid - Minimalist Dots */}
                                <div className="grid grid-cols-1 gap-3 border-t border-slate-800 pt-8 mt-auto">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-300 group/feature">
                                            <div className={`w-1.5 h-1.5 rounded-full 
                                                ${service.color === 'emerald' ? 'bg-emerald-500' :
                                                    service.color === 'blue' ? 'bg-blue-500' :
                                                        service.color === 'violet' ? 'bg-violet-500' :
                                                            'bg-rose-500'} 
                                                transition-all group-hover/feature:scale-150 duration-300 shadow-[0_0_8px_currentColor]`} />
                                            {feature}
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
