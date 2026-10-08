import { useMemo } from 'react'

interface ParticleFieldProps {
  count?: number
}

export function ParticleField({
  count = 700,
}: ParticleFieldProps) {
  const positions = useMemo(() => {
    const data = new Float32Array(
      count * 3,
    )

    for (let i = 0; i < count; i++) {
      const index = i * 3

      data[index] =
        (Math.random() - 0.5) * 16

      data[index + 1] =
        (Math.random() - 0.5) * 16

      data[index + 2] =
        (Math.random() - 0.5) * 16
    }

    return data
  }, [count])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.015}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}