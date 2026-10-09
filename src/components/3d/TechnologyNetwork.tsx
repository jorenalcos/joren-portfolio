import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

import {
  technologies,
} from '../../data/technologies'

import {
  technologyConnections,
} from '../../data/technologyConnections'

import { TechnologyNode } from './TechnologyNode'

interface TechnologyNetworkProps {
  activeTechnology: string
  onActivate: (id: string) => void
}

export function TechnologyNetwork({
  activeTechnology,
  onActivate,
}: TechnologyNetworkProps) {
  const group = useRef<THREE.Group>(null)

  const technologyMap = useMemo(() => {
    return new Map(
      technologies.map((technology) => [
        technology.id,
        technology,
      ]),
    )
  }, [])

  useFrame((state) => {
    if (!group.current) return

    const time = state.clock.elapsedTime

    group.current.rotation.y =
      Math.sin(time * 0.15) * 0.12

    group.current.rotation.x =
      Math.sin(time * 0.12) * 0.04
  })

  console.log(
    'React technology:',
    technologies.find((technology) => technology.id === 'react'),
  )

  return (
    <group
      ref={group}
      name="technology-network"
    >
      {/* Core */}
      <mesh position={[0, 0, -0.8]}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshBasicMaterial
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Connections */}
      {technologyConnections.map(
        ([fromId, toId], index) => {
          const from =
            technologyMap.get(fromId)

          const to =
            technologyMap.get(toId)

          if (!from || !to) return null

          const isActive =
            activeTechnology === fromId ||
            activeTechnology === toId

          return (
            <Line
              key={`tech-line-${index}`}
              points={[
                from.position,
                to.position,
              ]}
              transparent
              opacity={isActive ? 0.65 : 0.12}
              lineWidth={isActive ? 2 : 1}
            />
          )
        },
      )}

      {/* Technology nodes */}
      {technologies.map((technology) => (
        <TechnologyNode
          key={technology.id}
          technology={technology}
          active={activeTechnology === technology.id}
          onActivate={onActivate}
        />
      ))}
    </group>
  )
}