type FormFieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: 'text' | 'email'
  textarea?: boolean
  placeholder?: string
  autoComplete?: string
}

export function FormField({ id, label, value, onChange, error, type = 'text', textarea = false, placeholder, autoComplete }: FormFieldProps) {
  const errorId = `${id}-error`
  const fieldClasses = `mt-2 w-full rounded-lg border bg-[var(--color-canvas)] px-3 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] ${error ? 'border-[var(--color-danger)]' : 'border-[var(--color-line)]'}`
  const common = {
    id,
    className: textarea ? `${fieldClasses} min-h-36 resize-y` : fieldClasses,
    value,
    onChange: (event: { target: { value: string } }) => onChange(event.target.value),
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
  }

  return (
    <div>
      <label className="block text-sm font-medium text-[var(--color-ink)]" htmlFor={id}>{label}</label>
      {textarea
        ? <textarea {...common} placeholder={placeholder} />
        : <input {...common} type={type} placeholder={placeholder} autoComplete={autoComplete} />}
      {error ? <p id={errorId} className="mt-1.5 text-xs text-[var(--color-danger)]" role="alert">{error}</p> : null}
    </div>
  )
}
