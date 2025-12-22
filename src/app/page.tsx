import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Expertise from '@/components/Expertise'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <TechStack />
      <Expertise />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <Contact />
    </main>
  )
}
