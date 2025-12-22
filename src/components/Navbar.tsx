'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { name: 'Home', href: '#hero' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4`}
            >
                <div className={`
          flex items-center gap-8 px-6 py-3 rounded-full border transition-all duration-300
          ${scrolled
                        ? 'glass-card border-slate-800/50 bg-slate-900/80 shadow-2xl'
                        : 'border-transparent bg-transparent'}
        `}>
                    <Link href="#hero" className="text-xl font-bold tracking-tighter hover:scale-105 transition-transform">
                        S<span className="text-emerald-400">.</span>Y
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {links.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link href="#contact">
                        <button className="hidden md:block bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-all shadow-[0_0_10px_rgba(52,211,153,0.2)] hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                            Let's Talk
                        </button>
                    </Link>
                </div>
            </motion.nav>

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
                style={{ scaleX }}
            />
        </>
    )
}
