import { PageIntro } from '../components/common/PageIntro'
import { EducationSection } from '../components/common/EducationSection'

export function AboutPage() {
  return <section className="mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-24"><PageIntro eyebrow="About" title="Developer profile" description="Backend and frontend software development focused on RESTful APIs, maintainable application architecture, and responsive React interfaces." /><EducationSection /></section>
}
