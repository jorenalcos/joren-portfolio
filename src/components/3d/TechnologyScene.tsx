
import { Canvas } from '@react-three/fiber'
import { Suspense, useCallback, useState } from 'react'

import { TechnologyNetwork } from './TechnologyNetwork'
import { TechnologyLabelBridge } from './TechnologyLabelBridge'
import { TechnologyLabels } from './TechnologyLabels'

interface LabelPosition {
  id: string
  x: number
  y: number
  visible: boolean
}

interface TechnologySceneProps {
  activeTechnology: string
  onActivate: (id: string) => void
}

export function TechnologyScene({
  activeTechnology,
  onActivate,
}: TechnologySceneProps) {
  const [positions, setPositions] = useState<LabelPosition[]>([])

  const updatePositions = useCallback(
    (next: LabelPosition[]) => {
      setPositions((previous) => {
        const changed = next.some((item, index) => {
          const old = previous[index]

          return (
            !old ||
            old.id !== item.id ||
            old.visible !== item.visible ||
            Math.abs(old.x - item.x) > 0.5 ||
            Math.abs(old.y - item.y) > 0.5
          )
        })

        return changed ? next : previous
      })
    },
    [],
  )

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <TechnologyNetwork
            activeTechnology={activeTechnology}
            onActivate={onActivate}
          />

          <TechnologyLabelBridge
            onPositionsChange={updatePositions}
          />
        </Suspense>
      </Canvas>

      <TechnologyLabels
        positions={positions}
        activeTechnology={activeTechnology}
        onActivate={onActivate}
      />
    </div>
  )
}
