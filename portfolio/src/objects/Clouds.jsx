import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export default function Clouds() {

  const clouds = useGLTF("./3d-models/clouds.glb")
  const { cloudsPos, cloudsRot } = useControls({
    cloudsPos: {
      value: [0, -3.6, 0],
      step: .25
    },
    cloudsRot: {
      value: [0, 0, 0],
      step: .05
    }
  })

  return (
    <>
      <mesh position={cloudsPos} rotation={cloudsRot}>
        <primitive
          object={clouds.scene}
          scale={1}
        />
      </mesh>
    </>
  )
}
