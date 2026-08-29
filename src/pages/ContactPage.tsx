import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { profile } from '../data/profile'
import { socialLinks } from '../data/socialLinks'
import type { ContactMessage } from '../types/portfolio'
import { Seo } from '../components/common/Seo'
import { FormField } from '../components/ui/FormField'
import { SuccessState } from '../components/ui/SuccessState'

const initialMessage: ContactMessage = { name: '', email: '', subject: '', message: '' }
const linkedIn = socialLinks.find((link) => link.kind === 'linkedin')
const github = socialLinks.find((link) => link.kind === 'github')

export function ContactPage() {
  const [message, setMessage] = useState<ContactMessage>(initialMessage)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactMessage, string>>>({})
  const [isSent, setIsSent] = useState(false)

  const updateField = (field: keyof ContactMessage, value: string) => {
    setMessage((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Partial<Record<keyof ContactMessage, string>> = {}
    if (!message.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!message.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(message.email)) nextErrors.email = 'Please enter a valid email.'
    if (!message.subject.trim()) nextErrors.subject = 'Please enter a subject.'
    if (!message.message.trim()) nextErrors.message = 'Please enter a message.'
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return }
    setIsSent(true)
    setMessage(initialMessage)
  }
    
  const resetForm = () => {
    setIsSent(false)
    setErrors({})
  }

 const contactDetails = (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Contact details">
    <a 
      className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)]" 
      href={`mailto:${profile.email}`}
    >
      <Mail aria-hidden="true" size={18} className="text-[var(--color-accent)] shrink-0" />
      <span className="truncate">{profile.email}</span>
    </a>
    <a 
      className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)]" 
      href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
    >
      <Phone aria-hidden="true" size={18} className="text-[var(--color-accent)] shrink-0" />
      <span>{profile.phone}</span>
    </a>
    <div className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-ink)]">
      <MapPin aria-hidden="true" size={18} className="text-[var(--color-accent)] shrink-0" />
      <span>{profile.location}</span>
    </div>
    {linkedIn && (
      <a 
        className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)]" 
        href={linkedIn.url} 
        target="_blank" 
        rel="noreferrer"
      >
        <span>LinkedIn</span>
      </a>
    )}
    {github && (
      <a 
        className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)]" 
        href={github.url} 
        target="_blank" 
        rel="noreferrer"
      >
        <span>GitHub</span>
      </a>
    )}
  </div>
);

return (
  <>
    <Seo 
      title="Contact Murad Galandarli | Software Developer" 
      description="Get in touch with Murad Galandarli — a Software Developer specializing in C#, ASP.NET Core, React and TypeScript." 
      canonicalPath="/contact" 
    />
    <section className="mx-auto w-[min(100%-2rem,64rem)] py-16 sm:py-24">
      <header className="max-w-2xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Contact</p>
        <h1 className="m-0 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-6xl">Get in touch.</h1>
        <p className="mt-5 mb-0 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          Have a question or want to discuss a project? Reach out directly via email, phone, or social links below.
        </p>
      </header>
      <div className="mt-12">
        {contactDetails}
      </div>
    </section>
  </>
);}
