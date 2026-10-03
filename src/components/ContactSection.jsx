import ContactLink from './ContactLink'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:francesanne.riconalla@cit.edu"
          text="francesanne.riconalla@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/francesannericonalla"
          text="github.com/francesannericonalla"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/frances-anne-riconalla/"
          text="linkedin.com/in/frances-anne-riconalla"
        />
      </ul>
    </section>
  )
}
