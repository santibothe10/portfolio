import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export default function TugBoat() {

  const tugBoat = useGLTF("./3d-models/tug-boat/scene.gltf")
  const { tugBoatPos, tugBoatRot } = useControls({
    tugBoatPos: {
      value:[0, -5, 0],
      step: .25
    },
    tugBoatRot: {
      value: [0, 0, 0],
      step: .05
    }
  })

  return (
    <>
      <mesh position={tugBoatPos} rotation={tugBoatRot}>
        <primitive
          object={tugBoat.scene}
          scale={.025}
        />
      </mesh>
    </>
  )
}
