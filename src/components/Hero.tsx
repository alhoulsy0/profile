'use client';

import { ArrowRight, Terminal, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
// Dynamic import for ResumeDownloadButton to completely isolate @react-pdf/renderer
const ResumeDownloadButton = dynamic(
    () => import("@/components/ResumeDownloadButton"),
    {
        ssr: false,
        loading: () => <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-slate-500 border border-slate-700 rounded-full font-semibold transition-all">Loading PDF...</button>,
    }
);
import Link from 'next/link';

export default function Hero() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])

    const roles = [
        "AI Expert",
        "Cybersecurity Analyst",
        "Automation Test Engineer",
        "TMMi Consultant"
    ]
    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [roles.length])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <motion.div style={{ y: y1 }} className="absolute top-20 right-[10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Floating Abstract Icons */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-[15%] text-slate-800/50 hidden lg:block"
            >
                <Terminal size={120} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-[15%] text-slate-800/50 hidden lg:block"
            >
                <Shield size={120} />
            </motion.div>


            <div className="container mx-auto px-4 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500">
                            Hello, I&apos;m
                        </span> <br />
                        <span className="relative inline-block text-emerald-400">
                            Salah Yakoup
                            <div className="absolute -inset-1 bg-emerald-500/20 blur-xl opacity-50 -z-10" />
                        </span>
                    </h1>

                    {/* New Animated Text Rotating for Roles */}
                    <div className="h-12 mb-10 overflow-hidden relative">
                        <motion.div
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-mono text-purple-400 font-light"
                        >
                            &lt; {roles[currentRole]} /&gt;
                        </motion.div>
                    </div>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                        I architect <span className="text-purple-400 font-normal">Intelligent Systems</span> that fuse Generative AI, <span className="text-emerald-400 font-normal">Cybersecurity</span>, and <span className="text-blue-400 font-normal">Advanced Automation</span>.
                        <br className="hidden md:block" />
                        Specializing in TMMi consultation to elevate software maturity.
                    </p>

                    {/* BUTTONS ROW */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">

                        <Link href="#projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-full overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-2">
                                    View Projects
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </Link>

                        {/* Download CV Button Logic */}
                        <ResumeDownloadButton />

                    </div>
                </motion.div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-20" />
        </section>
    );
}
