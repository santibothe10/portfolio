import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export default function Clouds() {

  const clouds = useGLTF("./3d-models/clouds/scene.gltf")
  const { cloudsPos, cloudsRot } = useControls({
    cloudsPos: {
      value: [0.5, 16.40, 2],
      step: .25
    },
    cloudsRot: {
      value: [0, 6.3, 0],
      step: .05
    }
  })

  return (
    <>
      <mesh position={cloudsPos} rotation={cloudsRot}>
        <primitive
          object={clouds.scene}
          scale={.025}
        />
      </mesh>
    </>
  )
}
