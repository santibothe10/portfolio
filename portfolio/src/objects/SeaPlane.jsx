import { Html, useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import InfoMark from '../text/infoMark';

export default function SeaPlane() {

  const seaPlane = useGLTF("./3d-models/sea-plane/scene.gltf")
  const { seaPlanePos, seaPlaneRot } = useControls({
    seaPlanePos: {
      value:[5, 14.15, 5.5],
      step: .25
    },
    seaPlaneRot: {
      value: [.55, 5.2, 1],
      step: .05
    }
  })

  return (
    <>
      <mesh position={seaPlanePos} rotation={seaPlaneRot}>
        <primitive
          object={seaPlane.scene}
          scale={0.02}
        />
        <InfoMark infoPosition={[ -1.5, 2.5, -.75 ]} />
      </mesh>
    </>
  )
}
