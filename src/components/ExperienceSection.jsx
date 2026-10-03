import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="Non-Academic Scholar (Working Student)"
          place="Quality Assurance Office – Admin, CIT-U"
          description="Prepared documentation, liquidations, and evaluation reports for university programs. Also designed and built internal systems to reduce manual work in the office."
        />
        <TimelineItem
          period="2025 – Present"
          title="Remote Virtual Assistant"
          place="Nina Jocom (Freelance)"
          description="Managed social media content, email campaigns, and website maintenance for international clients in Australia and the United States."
        />
        <TimelineItem
          period="2021 – 2023"
          title="Senior High School, STEM Strand"
          place="Minglanilla Science High School"
          description="Graduated with high honors. Built my first web page and decided this was what I wanted to do."
        />
      </ol>
    </section>
  )
}
