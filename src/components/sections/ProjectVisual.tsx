
import type { PortfolioProject } from '../../data/projects'

interface ProjectVisualProps {
  project: PortfolioProject
}

export function ProjectVisual({
  project,
}: ProjectVisualProps) {
  return (
    <div className="group/visual relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-950">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project showcase`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/visual:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="text-xs uppercase tracking-[0.3em] text-white/30">
            {project.title}
          </span>
        </div>
      )}

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.title} live website`}
          className="absolute inset-0 z-10"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover/visual:opacity-100" />

      {project.featured && (
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          Featured project
        </span>
      )}
    </div>
  )
}
