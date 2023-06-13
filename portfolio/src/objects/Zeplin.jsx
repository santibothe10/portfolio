import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export default function Zeplin() {

  const zeplin = useGLTF("./3d-models/island-scene.glb")
  const { zeplinPos, zeplinRot } = useControls({
    zeplinPos: {
      value:[0, 0, 0],
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
          scale={1}
        />
      </mesh>
    </>
  )
}
