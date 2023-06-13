import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import InfoMark from '../text/infoMark';

import SailCard from '../text/SailCard';

export default function RedSail({
  setCardIsVisible,
  setContent,
  setInfoIsVisible,
  infoIsVisible,
  setOrbitIsOn,
  setCamPosition
}) {

  const redSail = useGLTF("./3d-models/boat.glb")

  const sailCam = {x: 26.01, y: -1.96, z: -25.23}

  const { redSailPos, redSailRot } = useControls({
    redSailPos: {
      value:[16.25, 1, -8.25],
      step: .25
    },
    redSailRot: {
      value: [0, -3.05, 0],
      step: .05
    }
  })

  return (
    <>
      <mesh position={redSailPos} rotation={redSailRot}>
        <primitive
          object={redSail.scene}
          scale={1}
          color="red"
        />
        <InfoMark
          infoPosition={[ 4, -.5, 8.25 ]}
          setCardIsVisible={setCardIsVisible}
          content={<SailCard />}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          setOrbitIsOn={setOrbitIsOn}
          setCamPosition={setCamPosition}
          cam={sailCam}
          />
      </mesh>
    </>
  )
}
