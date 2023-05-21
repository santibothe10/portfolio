import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export default function Zeplin() {

  const zeplin = useGLTF("./3d-models/zeplin/scene.gltf")
  const { zeplinPos, zeplinRot } = useControls({
    zeplinPos: {
      value:[-7.5, 26.90, -15.2],
      step: .25
    },
    zeplinRot: {
      value: [0, 8.10, 0],
      step: .05
    }
  })

  return (
    <>
      <mesh position={zeplinPos} rotation={zeplinRot}>
        <primitive
          object={zeplin.scene}
          scale={1.5}
        />
      </mesh>
    </>
  )
}
