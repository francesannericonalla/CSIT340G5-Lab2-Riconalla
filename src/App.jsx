import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
