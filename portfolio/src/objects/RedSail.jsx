import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import InfoMark from '../text/infoMark';

import SailCard from '../text/SailCard';

export default function RedSail({
  setCardIsVisible,
  setContent,
  setInfoIsVisible,
  infoIsVisible
}) {

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
        <InfoMark
          infoPosition={[ -1.5, 2.5, -.75 ]}
          setCardIsVisible={setCardIsVisible}
          content={<SailCard />}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          />
      </mesh>
    </>
  )
}
