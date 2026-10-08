import { useMemo } from 'react'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

interface NodeNetworkProps {
  count?: number
}

export function NodeNetwork({
  count = 28,
}: NodeNetworkProps) {
  const nodes = useMemo(() => {
    return Array.from({ length: count }, () => {
      const radius = 2.2 + Math.random() * 1.8

      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(
        2 * Math.random() - 1,
      )

      return new THREE.Vector3(
        radius *
        Math.sin(phi) *
        Math.cos(theta),

        radius * Math.cos(phi),

        radius *
        Math.sin(phi) *
        Math.sin(theta),
      )
    })
  }, [count])

  const connections = useMemo(() => {
    const result: Array<[number, number]> = []

    nodes.forEach((node, index) => {
      let closest = -1
      let closestDistance = Infinity

      nodes.forEach((other, otherIndex) => {
        if (index === otherIndex) return

        const distance = node.distanceTo(other)

        if (distance < closestDistance) {
          closestDistance = distance
          closest = otherIndex
        }
      })

      if (
        closest !== -1 &&
        !result.some(
          ([a, b]) =>
            (a === index && b === closest) ||
            (a === closest && b === index),
        )
      ) {
        result.push([index, closest])
      }
    })

    return result
  }, [nodes])

  return (
    <group>
      {nodes.map((position, index) => (
        <mesh
          key={`node-${index}`}
          position={position}
        >
          <sphereGeometry args={[0.035, 8, 8]} />

          <meshBasicMaterial />
        </mesh>
      ))}

      {connections.map(([from, to], index) => (
        <Line
          key={`connection-${index}`}
          points={[nodes[from], nodes[to]]}
          transparent
          opacity={0.2}
          lineWidth={1}
        />
      ))}
    </group>
  )
}