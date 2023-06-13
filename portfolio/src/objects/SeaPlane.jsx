import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import InfoMark from '../text/infoMark';

import PlaneCard from '../text/PlaneCard';

export default function SeaPlane({
  setCardIsVisible,
  setContent,
  setInfoIsVisible,
  infoIsVisible,
  setOrbitIsOn,
  setCamPosition
}) {

  const seaPlane = useGLTF("./3d-models/plane.glb")

  const planeCam = {x: -1.25, y: 24.37, z: 24.34}

  const { seaPlanePos, seaPlaneRot } = useControls({
    seaPlanePos: {
      value:[1.5, 20, 12],
      step: .25
    },
    seaPlaneRot: {
      value: [-.6, -1, -.2],
      step: .05
    }
  })

  return (
    <>
      <mesh position={seaPlanePos} rotation={seaPlaneRot}>
        <primitive
          object={seaPlane.scene}
          scale={1}
        />
        <InfoMark
          infoPosition={[ 2, 0, 0 ]}
          setCardIsVisible={setCardIsVisible}
          content={<PlaneCard />}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          setOrbitIsOn={setOrbitIsOn}
          setCamPosition={setCamPosition}
          cam={planeCam}
          />
      </mesh>
    </>
  )
}
