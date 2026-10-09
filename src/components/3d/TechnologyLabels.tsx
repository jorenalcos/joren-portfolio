
import { technologies } from '../../data/technologies'

interface LabelPosition {
  id: string
  x: number
  y: number
  visible: boolean
}

interface TechnologyLabelsProps {
  positions: LabelPosition[]
  activeTechnology: string
  onActivate: (id: string) => void
}

export function TechnologyLabels({
  positions,
  activeTechnology,
  onActivate,
}: TechnologyLabelsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {positions.map((position) => {
        const technology = technologies.find(
          (item) => item.id === position.id,
        )

        if (!technology || !position.visible) return null

        const active = activeTechnology === technology.id

        return (
          <button
            key={technology.id}
            type="button"
            onPointerEnter={() => onActivate(technology.id)}
            onPointerLeave={() => onActivate('')}
            onFocus={() => onActivate(technology.id)}
            onBlur={() => onActivate('')}
            className="pointer-events-auto absolute -translate-x-1/2 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.12em] transition-colors"
            style={{
              left: position.x,
              top: position.y + 14,
              color: active ? '#ffffff' : '#a0a0a0',
              textShadow: '0 1px 5px #000000',
            }}
          >
            {technology.name}
          </button>
        )
      })}
    </div>
  )
}
