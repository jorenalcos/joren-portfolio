
import type { PortfolioProject } from '../../data/projects'

interface ProjectVisualProps {
  project: PortfolioProject
}

export function ProjectVisual({
  project,
}: ProjectVisualProps) {
  return (
    <div className="group/visual relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-[#0c0c0c]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Decorative light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.08),transparent_65%)]" />

      {/* Browser frame */}
      <div className="absolute inset-[8%] overflow-hidden rounded-md border border-white/15 bg-[#101010] shadow-2xl transition-transform duration-700 ease-out group-hover/visual:scale-[1.025]">
        <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-3">
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="size-1.5 rounded-full bg-white/25" />

          <span className="ml-3 text-[8px] tracking-widest text-white/30">
            {project.id.toUpperCase()}
          </span>
        </div>

        <div className="p-5 sm:p-8">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
            PROJECT {project.number}
          </p>

          <h3 className="mt-4 max-w-sm text-2xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
            {project.title}
          </h3>

          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-14 border border-white/10 bg-white/[0.035] sm:h-20" />
            <div className="h-14 border border-white/10 bg-white/[0.06] sm:h-20" />
            <div className="h-14 border border-white/10 bg-white/[0.035] sm:h-20" />
          </div>

          <div className="mt-3 h-1.5 w-2/3 bg-white/10" />
          <div className="mt-2 h-1.5 w-1/2 bg-white/[0.06]" />
        </div>
      </div>

      <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.25em] text-white/40">
        {project.category}
      </div>
    </div>
  )
}
