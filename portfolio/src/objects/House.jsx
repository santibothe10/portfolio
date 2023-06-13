import { Html, useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import InfoMark from '../text/infoMark';

import HouseCard from '../text/HouseCard';
import { useRef } from 'react';

export default function House({
  setCardIsVisible,
  setContent,
  setInfoIsVisible,
  infoIsVisible,
  setOrbitIsOn,
  setCamPosition
}) {

  const house = useGLTF("./3d-models/workspace.glb")

  const houseCam = {x:-16, y:1.65, z:-11.2}
  const currentPos = useRef()

  const { housePos, houseRot } = useControls({
    housePos: {
      value:[-2, 1.15, 0],
      step: .25
    },
    houseRot: {
      value: [0, -2.75, 0],
      step: .05
    }
  })

  const { screenPos, screenRot } = useControls({
    screenPos: {
      value:[-0.06, .45, -.70],
      step: .25
    },
    screenRot: {
      value: [-.40, .08, .03],
      step: .05
    }
  })


  return (
    <>
      <mesh position={housePos} rotation={houseRot} currentPos={currentPos}>
        <primitive
          object={house.scene}
          scale={1}
        />
        <InfoMark
          infoPosition={[ 1, 1, -3 ]}
          setCardIsVisible={setCardIsVisible}
          content={<HouseCard />}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          setOrbitIsOn={setOrbitIsOn}
          setCamPosition={setCamPosition}
          cam={houseCam}
        />
        {/* <Html
          occlude
          position={screenPos}
          rotation={screenRot}
          transform
          prepend
          scale={.07}
        >
          <iframe title="sessions" width="1000px" height="600px" src="https://santibothe10.github.io/study-sessions/#/clock"/>
        </Html> */}
      </mesh>
    </>
  )
}
