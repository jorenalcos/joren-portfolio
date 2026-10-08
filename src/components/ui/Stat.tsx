interface StatProps {
  value: string
  label: string
}

export function Stat({
  value,
  label,
}: StatProps) {
  return (
    <div className="border-t border-white/10 pt-5">
      <div className="text-5xl font-medium tracking-tight md:text-7xl">
        {value}
      </div>

      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
        {label}
      </p>
    </div>
  )
}