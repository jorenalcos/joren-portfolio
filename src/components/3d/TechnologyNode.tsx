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
  return (
    <group position={technology.position}>
      <mesh
        onPointerEnter={(event) => {
          event.stopPropagation()
          onActivate(technology.id)
        }}
        onPointerLeave={() => onActivate('')}
      >
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial
          color={active ? '#ffffff' : '#999999'}
        />
      </mesh>
    </group>
  )
}