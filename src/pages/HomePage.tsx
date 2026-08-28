import { ArrowRight, Braces, Github, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AboutSection } from '../components/common/AboutSection'
import { SkillsSection } from '../components/common/SkillsSection'
import { ProjectsSection } from '../components/common/ProjectsSection'
import { ExperienceSection } from '../components/common/ExperienceSection'
import { socialLinks } from '../data/socialLinks'

const githubLink = socialLinks.find((link) => link.kind === 'github')

export function HomePage() {
  return (
    <>
    <section className="mx-auto grid w-[min(100%-2rem,72rem)] items-center gap-12 py-16 md:py-24 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
      <div className="max-w-2xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Software Developer</p>
        <h1 className="m-0 text-5xl leading-[0.95] font-semibold tracking-[-0.065em] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">Murad<br />Galandarli</h1>
        <p className="mt-6 text-xl font-medium text-[var(--color-ink)]">Backend &amp; Frontend Developer</p>
        <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">Building maintainable web applications with C#, ASP.NET Core, React, and TypeScript—guided by clean architecture and thoughtful interface design.</p>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
          {['C#', 'ASP.NET Core', 'React', 'TypeScript'].map((technology) => <span key={technology} className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-ink)]">{technology}</span>)}
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-[#071116] no-underline transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]" to="/projects">View Projects <ArrowRight aria-hidden="true" size={17} /></Link>
          <Link className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" to="/contact">Contact Me</Link>
          {githubLink ? <a className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" href={githubLink.url} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={17} /> GitHub</a> : null}
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-lg" aria-label="Technology code illustration">
        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(97,216,223,0.16),transparent_65%)]" />
        <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-3">
            <div className="flex gap-1.5" aria-hidden="true"><span className="size-2 rounded-full bg-[#ef7373]" /><span className="size-2 rounded-full bg-[#d9b860]" /><span className="size-2 rounded-full bg-[#61c78b]" /></div>
            <span className="font-mono text-xs text-[var(--color-muted)]">developer.profile</span>
            <Terminal aria-hidden="true" size={15} className="text-[var(--color-accent)]" />
          </div>
          <div className="space-y-4 p-6 font-mono text-sm leading-6 sm:p-8">
            <p className="m-0 text-[var(--color-muted)]">// building for the web</p>
            <p className="m-0"><span className="text-[#b38bff]">const</span> <span className="text-[var(--color-accent)]">stack</span> <span className="text-[var(--color-muted)]">=</span> <span className="text-[#d9b860]">{'{'}</span></p>
            <div className="space-y-1 pl-5 text-[var(--color-ink)]"><p className="m-0">backend: <span className="text-[#61d8df]">'ASP.NET Core'</span>,</p><p className="m-0">frontend: <span className="text-[#61d8df]">'React'</span>,</p><p className="m-0">language: <span className="text-[#61d8df]">'TypeScript'</span></p></div>
            <p className="m-0 text-[#d9b860]">{'}'};</p>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-raised)] p-4 font-sans"><span className="grid size-9 place-items-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><Braces aria-hidden="true" size={20} /></span><div><p className="m-0 text-sm font-semibold text-[var(--color-ink)]">Architecture-minded development</p><p className="m-0.5 text-xs text-[var(--color-muted)]">Clean, scalable and maintainable systems.</p></div></div>
          </div>
        </div>
      </div>
    </section>
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    </>
  )
}
