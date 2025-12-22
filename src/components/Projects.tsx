'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ExternalLink, Github, FolderOpen, Globe } from 'lucide-react'
import { MouseEvent } from 'react'
import clsx from 'clsx'

function ProjectCard({ project, index }: { project: any, index: number }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Map badge colors to CSS classes
    const colorMap: Record<string, { glow: string, border: string, text: string, bg: string, title: string }> = {
        green: {
            glow: 'rgba(164, 198, 57, 0.15)',
            border: 'hover:border-[#A4C639]/50',
            text: 'text-[#A4C639]',
            bg: 'bg-[#A4C639]/10',
            title: 'group-hover:to-[#A4C639]'
        },
        gold: {
            glow: 'rgba(250, 204, 21, 0.15)',
            border: 'hover:border-yellow-400/50',
            text: 'text-yellow-400',
            bg: 'bg-yellow-400/10',
            title: 'group-hover:to-yellow-400'
        },
        purple: {
            glow: 'rgba(192, 132, 252, 0.15)',
            border: 'hover:border-purple-400/50',
            text: 'text-purple-400',
            bg: 'bg-purple-400/10',
            title: 'group-hover:to-purple-400'
        },
        pink: {
            glow: 'rgba(236, 72, 153, 0.15)',
            border: 'hover:border-pink-500/50',
            text: 'text-pink-500',
            bg: 'bg-pink-500/10',
            title: 'group-hover:to-pink-500'
        },
        emerald: {
            glow: 'rgba(16, 185, 129, 0.1)',
            border: 'hover:border-emerald-500/30',
            text: 'text-emerald-400',
            bg: 'bg-emerald-500/5',
            title: 'group-hover:to-emerald-400'
        }
    }

    const theme = colorMap[project.badgeColor || 'emerald']

    function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={onMouseMove}
            className={`group relative rounded-2xl bg-slate-900/40 border border-slate-800 ${theme.border} overflow-hidden transition-all duration-300 flex flex-col h-full`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${theme.glow},
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative p-8 h-full flex flex-col z-10">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                    <FolderOpen className={`w-24 h-24 ${project.badgeColor === 'green' ? 'text-[#A4C639]/10' : 'text-slate-800/20'} -rotate-12`} />
                </div>

                <div className="mb-6 flex justify-between items-start z-10 w-full">
                    <span className={clsx(
                        "text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded border",
                        theme.text, theme.bg, `border-${theme.text.split('-')[1]}/30`
                    )}>
                        {project.badge}
                    </span>
                </div>

                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent ${theme.title} transition-all`}>
                    {project.title}
                </h3>

                <p className="text-sm font-semibold text-slate-300 mb-4 font-mono">{project.role}</p>

                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed z-10">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto z-10">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] font-bold text-slate-500 bg-slate-950/50 px-3 py-1 rounded border border-slate-800 group-hover:border-slate-700 transition-colors uppercase tracking-tight">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    const projects = [
        {
            title: 'LG Electronics x Google – The Nexus Partnership',
            role: 'Regional QA Partnership Manager (EMEA)',
            description: 'Managed the strategic engineering bridge between Google and LG R&D for the Nexus 5 rollout. Led critical localization and carrier compliance testing across the EMEA region.',
            tags: ['Android OS', 'Strategic Partnership'],
            badge: 'Global Partnership',
            badgeColor: 'green'
        },
        {
            title: 'Logrus IT (South Korea) – Global Game Lab',
            role: 'Compatibility & Localization Specialist',
            description: 'Executed specialized performance and linguistic testing for global gaming titles. Validated rendering compatibility and localization accuracy for the South Korean and Global markets.',
            tags: ['Game Performance', 'Localization Testing', 'Compatibility'],
            badge: 'Gaming & Performance',
            badgeColor: 'pink'
        },
        {
            title: 'Saudi Post (SPL) – TMMi Transformation',
            role: 'TMMi Consultant',
            description: 'Spearheaded the quality maturity roadmap for the Kingdom’s logistics backbone. Diagnosed process gaps and implemented TMMi Level 3 frameworks to standardize delivery.',
            tags: ['TMMi Strategy', 'Process Architecture'],
            badge: 'TMMi Certified',
            badgeColor: 'gold'
        },
        {
            title: 'Ministry of Foreign Affairs (MOFA) – Global Infrastructure',
            role: 'Quality Manager',
            description: 'Managed the quality assurance strategy for mission-critical diplomatic systems. Ensured zero-failure reliability for global visa issuance services affecting millions of users.',
            tags: ['Quality Governance', 'High-Availability Systems'],
            badge: 'Government',
            badgeColor: 'emerald'
        },
        {
            title: 'Council of Health Insurance (CHI) – TMMi Transformation',
            role: 'TMMi Consultant & QA Lead',
            description: 'Leading the enterprise quality maturity roadmap utilizing TMMi framework. Establishing the Quality Management Office (QMO) to govern national health insurance integrations.',
            tags: ['TMMi Strategy', 'Healthcare', 'QMO Governance'],
            badge: 'TMMi Certified',
            badgeColor: 'gold'
        },
        {
            title: 'ZATCA (VAT) – National Project Management',
            role: 'Quality Project Manager',
            description: 'Directed the Quality Management Office (QMO) for the national Value Added Tax implementation. Managed resources and timelines to certify financial precision for the Kingdom\'s fiscal reform.',
            tags: ['Project Management (PMP)', 'Financial QA'],
            badge: 'Fintech',
            badgeColor: 'emerald'
        },
        {
            title: 'SASO – The "Saber" Standard',
            role: 'TMMi Consultant & Automation Lead',
            description: 'Established the national quality benchmark for the "Saber" import platform. Built a dual-layer strategy: TMMi process governance for the team and automated gates for the software.',
            tags: ['TMMi', 'Saber Platform', 'Process Improvement'],
            badge: 'TMMi Certified',
            badgeColor: 'gold'
        },
        {
            title: 'Baladi (MOMRA) – Smart City Governance',
            role: 'Project Manager & TMMi Consultant',
            description: 'Led the strategic overhaul of the municipal platform\'s quality processes. Managed the transition to a TMMi-compliant environment for hundreds of city services.',
            tags: ['Project Management', 'TMMi Process Improvement'],
            badge: 'Smart City',
            badgeColor: 'emerald'
        },
        {
            title: 'Citizen Account – The Welfare Shield',
            role: 'UAT Lead',
            description: 'Led the User Acceptance Testing (UAT) phase for the national subsidy platform. Validated business rules and eligibility logic to ensure accurate financial support for beneficiaries.',
            tags: ['UAT Management', 'Business Logic Validation'],
            badge: 'Resilience',
            badgeColor: 'emerald'
        },
        {
            title: 'Ministry of Finance – Core Systems',
            role: 'Senior QA Engineer',
            description: 'Conducted rigorous acceptance testing and code reviews for government relief and financial committee systems, ensuring strict adherence to fiscal regulations.',
            tags: ['UAT', 'Audit & Compliance'],
            badge: 'Government',
            badgeColor: 'emerald'
        }
    ]

    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                            The "Perfect 10" Portfolio
                        </h2>
                        <p className="text-slate-400 mt-4 max-w-lg">
                            High-stakes engineering missions delivering national impact.
                        </p>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-emerald-400 font-mono text-sm border-b border-emerald-400/30 hover:border-emerald-400 pb-1"
                    >
                        VIEW FULL ARCHIVE
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
