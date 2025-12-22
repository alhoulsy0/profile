'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 border-slate-800"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Unbreakable</h2>
                        <p className="text-slate-400">
                            Whether you need an AI Security Audit or a full-stack automation architecture, I&apos;m ready to help.
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 mb-16 pt-12">
                        <a href="https://github.com/alhoulsy0" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/salah-abualhoul/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:alhoulsy@gmail.com" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="text-center text-slate-600 text-sm border-t border-slate-800 pt-8">
                        <p>Designed by Salah Yakoup | © 2025</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
