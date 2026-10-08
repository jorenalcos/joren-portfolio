import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { FloatingCore } from './FloatingCore'
import { NodeNetwork } from './NodeNetwork'
import { ParticleField } from './ParticleField'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <group>
        <ParticleField />
        <NodeNetwork />
        <FloatingCore />
      </group>
    </>
  )
}

export function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 45,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}