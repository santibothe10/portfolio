import { Html, useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export default function House() {

  const house = useGLTF("./3d-models/house/scene.gltf")
  const { housePos, houseRot } = useControls({
    housePos: {
      value:[-7.5, -2.10, 0.75],
      step: .25
    },
    houseRot: {
      value: [0, 4.75, 0],
      step: .05
    }
  })

  return (
    <>
      <mesh position={housePos} rotation={houseRot}>
        <primitive
          object={house.scene}
          scale={2}
        />
        <Html
          position={ [ -1.25, 1, 2 ] }
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
