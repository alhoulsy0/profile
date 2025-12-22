'use client'
import { motion } from 'framer-motion'
import {
    Code2,
    Cpu,
    Brain,
    Play,
    TestTube2,
    Globe,
    ShieldAlert,
    Container,
    GitBranch
} from 'lucide-react'

export default function TechStack() {
    const techs = [
        { name: 'Python', icon: Code2, color: 'text-blue-400' },
        { name: 'OpenAI', icon: Cpu, color: 'text-emerald-400' },
        { name: 'Llama 3', icon: Brain, color: 'text-purple-400' },
        { name: 'Playwright', icon: Play, color: 'text-orange-400' },
        { name: 'Cypress', icon: TestTube2, color: 'text-teal-400' },
        { name: 'Selenium', icon: Globe, color: 'text-green-400' },
        { name: 'Burp Suite', icon: ShieldAlert, color: 'text-orange-500' },
        { name: 'Docker', icon: Container, color: 'text-blue-500' },
        { name: 'Azure', icon: GitBranch, color: 'text-blue-600' },
    ]

    // Double the array to create seamless loop
    const marqueeTechs = [...techs, ...techs, ...techs]

    return (
        <section className="py-20 border-y border-slate-900 bg-slate-950/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-12 items-center whitespace-nowrap px-4"
                >
                    {marqueeTechs.map((tech, i) => (
                        <div key={`${tech.name}-${i}`} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all cursor-crosshair hover:scale-110 grayscale hover:grayscale-0">
                            <div className={`p-2 rounded-lg bg-slate-900/50 border border-slate-800 ${tech.color}`}>
                                <tech.icon className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-mono font-bold text-slate-400">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
