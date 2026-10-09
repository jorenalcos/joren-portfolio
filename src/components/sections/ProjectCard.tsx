
import { ArrowUpRight } from 'lucide-react'
import type { PortfolioProject } from '../../data/projects'
import { ProjectVisual } from './ProjectVisual'

interface ProjectCardProps {
  project: PortfolioProject
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group">
      <ProjectVisual project={project} />

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            {project.number} / {project.category}
          </p>

          <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>
        </div>

        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/60"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  )
}
