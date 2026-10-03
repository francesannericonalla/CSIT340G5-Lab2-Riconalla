import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="POLARIS"
          description="A QAO portal system to streamline documentation, evaluations, and reporting workflows for CIT-U's Quality Assurance Office."
          tech="React · Next.js · PostgreSQL"
          link="https://github.com/francesannericonalla/POLARIS"
        />
        <ProjectCard
          year="2026"
          title="Git IT"
          description="A platform that makes Git and version control concepts accessible and interactive for students learning it for the first time."
          tech="React · Tailwind CSS"
          link="https://github.com/joanaxyz/2526-sem2-it332-34_GITit"
        />
        <ProjectCard
          year="2025"
          title="ShareHub"
          description="A resource-sharing web app for students to upload, discover, and access academic materials across courses."
          tech="React · Node.js · Supabase"
          link="https://github.com/jazpirr/CSIT327-G2-ShareHub"
        />
        <ProjectCard
          year="2025"
          title="DentaLink"
          description="A dental clinic management system with appointment scheduling and patient records, built for a systems development class."
          tech="Java · MySQL"
          link="https://github.com/francesannericonalla/IT342-Riconalla-DentaLink"
        />
      </div>
    </section>
  )
}
