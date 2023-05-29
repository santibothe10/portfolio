import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import InfoMark from '../text/infoMark';

import HoloCard from '../text/HoloCard';

export default function Hologram({
  setCardIsVisible,
  setContent,
  setInfoIsVisible,
  infoIsVisible
}) {

  const hologram = useGLTF("./3d-models/hologram/scene.gltf")
  const { hologramPos, hologramRot } = useControls({
    hologramPos: {
      value:[4, -1.85, 14.3],
      step: .25
    },
    hologramRot: {
      value: [0, 0.2, 0],
      step: .05
    }
  })

  return (
    <>
      <mesh position={hologramPos} rotation={hologramRot}>
        <primitive
          object={hologram.scene}
          scale={.05}
        />
      <InfoMark
      infoPosition={[ 0, 3.5, 0 ]}
      setCardIsVisible={setCardIsVisible}
      content={<HoloCard />}
      setContent={setContent}
      setInfoIsVisible={setInfoIsVisible}
      infoIsVisible={infoIsVisible}
      />
      </mesh>
    </>
  )
}
