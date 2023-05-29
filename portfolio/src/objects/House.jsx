import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import InfoMark from '../text/infoMark';

import HouseCard from '../text/HouseCard';

export default function House({
  setCardIsVisible,
  setContent,
  setInfoIsVisible,
  infoIsVisible
}) {

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
      <InfoMark
      infoPosition={[ -1.25, 1, 2 ]}
      setCardIsVisible={setCardIsVisible}
      content={<HouseCard />}
      setContent={setContent}
      setInfoIsVisible={setInfoIsVisible}
      infoIsVisible={infoIsVisible}
      />
      </mesh>
    </>
  )
}
