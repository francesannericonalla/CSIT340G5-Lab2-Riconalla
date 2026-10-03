import Fact from './Fact'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Minglanilla and moved to Cebu City for college. I picked IT because I wanted to build
        things that actually fix real problems, not just as class requirements, but things people genuinely
        use. My favorite part is still the moment something finally works the way it should.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Fourth year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Minglanilla, Cebu" />
      </dl>
    </section>
  )
}
