import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

export function FloatingCore() {
  const mesh = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (!mesh.current) return

    mesh.current.rotation.x += delta * 0.2
    mesh.current.rotation.y += delta * 0.35

    const time = state.clock.elapsedTime

    mesh.current.position.y = Math.sin(time * 1.2) * 0.12
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.15, 2]} />

      <meshBasicMaterial
        wireframe
        transparent
        opacity={0.75}
      />
    </mesh>
  )
}