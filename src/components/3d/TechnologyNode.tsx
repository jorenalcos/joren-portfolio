
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

import type { Technology } from '../../data/technologies'

interface TechnologyNodeProps {
  technology: Technology
  active: boolean
  onActivate: (id: string) => void
}

export function TechnologyNode({
  technology,
  active,
  onActivate,
}: TechnologyNodeProps) {
  const nodeRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const glowMaterialRef = useRef<THREE.MeshBasicMaterial>(null)

  useFrame((_, delta) => {
    const node = nodeRef.current
    const glow = glowRef.current
    const glowMaterial = glowMaterialRef.current

    if (!node || !glow || !glowMaterial) return

    const targetScale = active ? 1.8 : 1
    const smoothing = 1 - Math.exp(-12 * delta)

    node.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      smoothing,
    )

    const time = performance.now() * 0.002
    const pulse = active ? 1 + Math.sin(time * 2) * 0.12 : 1

    glow.scale.lerp(
      new THREE.Vector3(pulse, pulse, pulse),
      smoothing,
    )

    glowMaterial.opacity = THREE.MathUtils.lerp(
      glowMaterial.opacity,
      active ? 0.24 : 0,
      smoothing,
    )
  })

  return (
    <group position={technology.position}>
      {/* Soft glow behind the active node */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshBasicMaterial
          ref={glowMaterialRef}
          color="#ffffff"
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* Interactive technology node */}
      <mesh
        ref={nodeRef}
        onPointerEnter={(event) => {
          event.stopPropagation()
          onActivate(technology.id)
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          onActivate('')
          document.body.style.cursor = ''
        }}
      >
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial
          color={active ? '#ffffff' : '#999999'}
        />
      </mesh>
    </group>
  )
}
