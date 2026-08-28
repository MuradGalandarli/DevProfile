import { GraduationCap } from 'lucide-react'
import { education } from '../../data/education'

export function EducationSection() {
  return (
    <section className="mt-14 border-t border-[var(--color-line)] pt-14 sm:mt-20 sm:pt-20" aria-labelledby="education-heading">
      <div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Education &amp; Certifications</p><h2 id="education-heading" className="m-0 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl">Education and professional training.</h2><p className="mt-4 mb-0 text-base leading-7 text-[var(--color-muted)]">Provided academic and development training background.</p></div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {education.map((entry) => <article key={`${entry.institution ?? entry.qualification}-${entry.startDate}`} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 sm:p-6"><span className="grid size-10 place-items-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><GraduationCap aria-hidden="true" size={20} /></span><p className="mt-5 mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">{entry.startDate} – {entry.endDate}</p><h3 className="m-0 text-lg font-semibold text-[var(--color-ink)]">{entry.qualification}</h3>{entry.institution ? <p className="mt-2 mb-0 text-sm text-[var(--color-accent)]">{entry.institution}</p> : null}{entry.fieldOfStudy ? <p className="mt-3 mb-0 text-sm leading-6 text-[var(--color-muted)]">{entry.fieldOfStudy}</p> : null}{entry.summary ? <p className="mt-3 mb-0 text-sm leading-6 text-[var(--color-muted)]">{entry.summary}</p> : null}</article>)}
      </div>
    </section>
  )
}
