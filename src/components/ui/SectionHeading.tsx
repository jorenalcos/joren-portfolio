interface SectionHeadingProps {
  eyebrow: string
  title: string
}

export function SectionHeading({
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
        {eyebrow}
      </p>

      <h2 className="max-w-4xl text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl">
        {title}
      </h2>
    </div>
  )
}