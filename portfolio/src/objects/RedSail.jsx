import { Html, useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export default function RedSail() {

  const redSail = useGLTF("./3d-models/red-sail/scene.gltf")
  const { redSailPos, redSailRot } = useControls({
    redSailPos: {
      value:[18.25, -3.75, -19],
      step: .25
    },
    redSailRot: {
      value: [0, -2.35, -0.05],
      step: .05
    }
  })

  return (
    <>
      <mesh position={redSailPos} rotation={redSailRot}>
        <primitive
          object={redSail.scene}
          scale={0.015}
          dispose={null}
        />
        <Html
          position={ [ 0, 2, 2 ] }
          wrapperClass="label"
          center
          distanceFactor={ 50 }
          occlude
        >
          !
        </Html>
      </mesh>
    </>
  )
}
