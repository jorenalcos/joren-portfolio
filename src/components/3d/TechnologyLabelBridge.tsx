
import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { technologies } from '../../data/technologies'

type ProjectedPoint = {
  id: string
  position: THREE.Vector3
  screenX: number
  screenY: number
  visible: boolean
}

interface TechnologyLabelBridgeProps {
  onPositionsChange: (
    positions: Array<{
      id: string
      x: number
      y: number
      visible: boolean
    }>,
  ) => void
}

export function TechnologyLabelBridge({
  onPositionsChange,
}: TechnologyLabelBridgeProps) {
  const { camera, size } = useThree()
  const elapsedRef = useRef(0)

  const points = useMemo<ProjectedPoint[]>(
    () =>
      technologies.map((technology) => ({
        id: technology.id,
        position: new THREE.Vector3(...technology.position),
        screenX: 0,
        screenY: 0,
        visible: false,
      })),
    [],
  )

  const projected = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ scene }, delta) => {
    elapsedRef.current += delta
    const network = scene.getObjectByName('technology-network')

    // Update HTML label positions at most 30 times per second.
    if (elapsedRef.current < 1 / 30) return

    points.forEach((point) => {
      projected.copy(point.position)

      if (network) {
        network.localToWorld(projected)
      }

      projected.project(camera)

      const visible =
        projected.z >= -1 &&
        projected.z <= 1 &&
        projected.x >= -1 &&
        projected.x <= 1 &&
        projected.y >= -1 &&
        projected.y <= 1

      point.screenX = (projected.x * 0.5 + 0.5) * size.width
      point.screenY = (-projected.y * 0.5 + 0.5) * size.height
      point.visible = visible
    })

    onPositionsChange(
      points.map((point) => ({
        id: point.id,
        x: point.screenX,
        y: point.screenY,
        visible: point.visible,
      })),
    )
  })

  return null
}
