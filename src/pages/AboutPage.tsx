import { PageIntro } from '../components/common/PageIntro'
import { EducationSection } from '../components/common/EducationSection'
import { ProfileStrengthsSection } from '../components/common/ProfileStrengthsSection'
import { Seo } from '../components/common/Seo'

export function AboutPage() {
  return <>
  <Seo title="About Murad Galandarli | Software Developer" description="Learn about Murad Galandarli — a Software Developer specializing in C#, ASP.NET Core, React and TypeScript, focused on RESTful APIs and maintainable application architecture." canonicalPath="/about" />
  <section className="mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-24"><PageIntro eyebrow="About" title="Developer profile" description="Backend and frontend software development focused on RESTful APIs, maintainable application architecture, and responsive React interfaces." /><EducationSection /><ProfileStrengthsSection /></section>
  </>
}
