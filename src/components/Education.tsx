'use client'

import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2, GraduationCap, Globe, Award, Lock, School, ScrollText, ArrowUpRight, BookOpen } from 'lucide-react'

// --- DATA ---
const degrees = [
    {
        id: "master",
        title: "Master of Science in Informatics",
        school: "University Sultan Zainal Abidin (Malaysia)",
        period: "2023 — 2025",
        icon: BookOpen,
        color: "blue",
        courses: [
            "Software Quality Models",
            "Analytic Hierarchy Process (AHP)",
            "Advanced Research Methodology",
            "Thesis: Priority-Based Quality Framework"
        ]
    },
    {
        id: "ai",
        title: "AI Software Development",
        school: "Algonquin College (Ottawa)",
        period: "2025 — Present",
        icon: Sparkles,
        color: "purple",
        courses: [
            "Machine Learning",
            "Knowledge Representation",
            "Applied AI Techniques",
            "AI Project 1 & 2",
            "Ethics for AI",
            "Advanced Machine Learning",
            "Natural Language Processing (NLP)",
            "Machine Vision",
            "Reinforcement Learning"
        ]
    },
    {
        id: "cyber",
        title: "Cybersecurity Analysis",
        school: "Algonquin College (Ottawa)",
        period: "2024 — 2025",
        distinction: "Graduated with Honors",
        icon: CheckCircle2,
        color: "emerald",
        courses: [
            "Threat Management",
            "Traffic Analytics",
            "Vulnerability Management",
            "Security Devices",
            "Applied Cryptography",
            "Digital Forensics",
            "Penetration Testing",
            "Incident Response",
            "Disaster Recovery",
            "Capstone Project"
        ]
    }
]

const publications = [
    {
        type: "Journal Publication",
        title: "A Priority-Based Software Quality Evaluation Framework for Diversity Metrics of Software Models Using AHP",
        journal: "Intl. Journal of Multidisciplinary Research & Growth Evaluation (Vol. 6, Issue 2)",
        date: "March 2025",
        link: "https://www.allmultidisciplinaryjournal.com/uploads/archives/20250307181943_MGE-2025-1-440.1.pdf",
        description: "Developed a novel framework utilizing the Analytic Hierarchy Process (AHP) to prioritize and evaluate diversity metrics in software quality models."
    }
]

const certs = [
    // Tier 1: Governance (Gold/Elite)
    { title: "TMMi Accredited Assessor", date: "Sep 2020", tier: "gold" },
    { title: "TMMi Test Process Improver", date: "Dec 2023", tier: "gold" },
    { title: "TMMi Foundation", date: "Sep 2020", tier: "gold" },
    { title: "ISO 9001:2015 General", date: "Jun 2014", tier: "gold" },

    // Tier 2: Engineering (Blue/Tech)
    { title: "ISTQB Adv. Test Manager", date: "Mar 2018", tier: "blue" },
    { title: "ISTQB Adv. Test Analyst", date: "Apr 2017", tier: "blue" },
    { title: "ISTQB Foundation", date: "Apr 2013", tier: "blue" },

    // Tier 3: Operations (Slate/Ops)
    { title: "PSM I (Scrum Master)", date: "Jul 2019", tier: "slate" },
    { title: "ITIL v4 Foundation", date: "Dec 2019", tier: "slate" },
    { title: "Confluence Fundamentals", date: "Dec 2023", tier: "slate" },
    { title: "DevOps Foundation", date: "N/A", tier: "slate" }
]

const foundation = {
    degree: "Bachelor of Engineering: Telecommunications",
    institution: "Yarmouk University (Jordan)",
    year: "2012",
    focus: "Engineering Principles, Network Architecture, Signal Processing."
}

export default function Education() {

    const getTierTitle = (tier: string) => {
        switch (tier) {
            case 'gold': return 'Global Quality Governance (Elite)'
            case 'blue': return 'Advanced Engineering (ISTQB)'
            case 'slate': return 'Agile & Operations'
            default: return 'Certifications'
        }
    }

    // Helper to map color names to tailwind classes
    const getColorClasses = (color: string) => {
        switch (color) {
            case 'purple':
                return {
                    text: 'text-purple-400',
                    hoverText: 'group-hover:text-purple-400',
                    border: 'border-purple-500/20',
                    chipText: 'text-purple-200/80',
                    icon: 'text-purple-400'
                }
            case 'blue':
                return {
                    text: 'text-blue-400',
                    hoverText: 'group-hover:text-blue-400',
                    border: 'border-blue-500/20',
                    chipText: 'text-blue-200/80',
                    icon: 'text-blue-400'
                }
            case 'emerald':
            default:
                return {
                    text: 'text-emerald-400',
                    hoverText: 'group-hover:text-emerald-400',
                    border: 'border-emerald-500/20',
                    chipText: 'text-emerald-200/80',
                    icon: 'text-emerald-400'
                }
        }
    }

    const certGroups = ['gold', 'blue', 'slate']

    return (
        <section id="credentials" className="py-32 bg-slate-950 text-slate-100">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 inline-block">
                        Academy & Credentials
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Verified elite-level certifications and advanced academic specialization.
                    </p>
                </motion.div>

                {/* TOP ROW: DEGREES */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {degrees.map((degree, i) => {
                        const colors = getColorClasses(degree.color)
                        return (
                            <motion.div
                                key={degree.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all shadow-xl p-8 flex flex-col"
                            >
                                <div className="flex justify-between items-start w-full mb-6">
                                    <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 ${colors.icon}`}>
                                        <degree.icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="text-slate-500 font-mono text-sm border border-slate-800 bg-slate-950/50 px-3 py-1 rounded-full">
                                            {degree.period}
                                        </span>
                                        {degree.distinction && (
                                            <span className="text-amber-400 text-xs font-bold border border-amber-500/20 bg-amber-500/5 px-2 py-1 rounded-full flex items-center gap-1">
                                                <Award className="w-3 h-3" /> {degree.distinction}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <h3 className={`text-2xl font-bold text-white mb-2 ${colors.hoverText} transition-colors`}>
                                    {degree.title}
                                </h3>
                                <div className="text-slate-400 text-sm mb-8 flex items-center gap-2">
                                    <School className="w-4 h-4" />
                                    {degree.school}
                                </div>

                                {/* Skill Chips */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {degree.courses.map((course, idx) => (
                                        <span
                                            key={idx}
                                            className={`text-xs font-medium px-3 py-1.5 rounded-full border bg-slate-950/50 ${colors.border} ${colors.chipText}`}
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* MIDDLE ROW: FOUNDATION & LANGUAGES */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Bachelors */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <GraduationCap className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 block">Undergraduate Foundation</span>
                            <h3 className="text-2xl font-bold text-white mb-2">{foundation.degree}</h3>
                            <div className="text-emerald-400 font-medium mb-4">{foundation.institution}</div>
                            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
                                {foundation.focus}
                            </p>
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center gap-6"
                    >
                        <h4 className="flex items-center gap-2 text-white font-bold">
                            <Globe className="w-5 h-5 text-blue-400" /> Global Communication
                        </h4>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-300">Arabic</span>
                                    <span className="text-emerald-400 text-xs">Native</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-300">English</span>
                                    <span className="text-blue-400 text-xs">Excellent</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[95%]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FEATURED RESEARCH / PUBLICATION CARD */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <ScrollText className="w-5 h-5 text-purple-400" />
                        Featured Research
                    </h3>
                    {publications.map((pub, idx) => (
                        <a
                            key={idx}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <ScrollText className="w-48 h-48" />
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-start relative z-10 gap-6">
                                <div>
                                    <span className="text-xs font-mono text-purple-400 mb-2 block uppercase tracking-wider border border-purple-500/30 bg-purple-500/10 px-2 py-1 rounded w-fit">{pub.type} • {pub.date}</span>
                                    <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                                        {pub.title}
                                    </h4>
                                    <p className="text-slate-400 text-lg max-w-2xl">{pub.description}</p>
                                    <p className="text-sm text-slate-500 mt-6 font-mono flex items-center gap-2">
                                        <School className="w-4 h-4" />
                                        Published in {pub.journal}
                                    </p>
                                </div>
                                <div className="p-4 rounded-full bg-slate-950 border border-slate-800 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
                                    <ArrowUpRight className="w-6 h-6 text-slate-500 group-hover:text-purple-400 transition-colors" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* BOTTOM ROW: CERTIFICATION VAULT */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Lock className="text-amber-400 w-6 h-6" />
                        <h3 className="text-xl font-bold text-white">The Certification Vault</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {certGroups.map((tier, i) => {
                            const groupCerts = certs.filter(c => c.tier === tier)
                            const title = getTierTitle(tier)

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 relative overflow-hidden"
                                >
                                    {/* Subtle background glow for elite groups */}
                                    {tier === 'gold' && <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16" />}
                                    {tier === 'blue' && <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16" />}

                                    <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 relative z-10
                                ${tier === 'gold' ? 'text-amber-400' : tier === 'blue' ? 'text-blue-400' : 'text-slate-400'}
                            `}>
                                        {title}
                                    </h4>
                                    <ul className="space-y-4 relative z-10">
                                        {groupCerts.map((cert, j) => (
                                            <li key={j} className="flex flex-col gap-0.5 group cursor-default">
                                                <div className="flex items-start gap-2 text-slate-200 text-sm font-medium">
                                                    <Award className={`w-4 h-4 mt-0.5 shrink-0 transition-colors 
                                                ${tier === 'gold' ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]' :
                                                            tier === 'blue' ? 'text-blue-400' : 'text-slate-500'}`}
                                                    />
                                                    <span className={tier === 'gold' ? 'text-white' : ''}>{cert.title}</span>
                                                </div>
                                                {cert.date && <span className="text-xs text-slate-500 font-mono ml-6">{cert.date}</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}
