import { useGLTF, Html } from "@react-three/drei";
import { useControls } from "leva";
import InfoMark from "../text/infoMark";

import HoloCard from "../text/HoloCard";
import StartBoard from "../text/html-projects/StartBoard";

export default function Hologram({
  setCardIsVisible,
  setContent,
  setInfoIsVisible,
  infoIsVisible,
  setOrbitIsOn,
  setCamPosition,
  setStartView,
  setLookAtPos
}) {
  const hologram = useGLTF("./3d-models/sign.glb");

  const holoCam = {x: -33.46, y: 26.54, z: -34.16};

  const { hologramPos, hologramRot } = useControls({
    hologramPos: {
      value: [-.75, -2.85, -20.5],
      step: 0.25,
    },
    hologramRot: {
      value: [0, 2.95, 0],
      step: 0.05,
    },
  });

  return (
    <>
      <mesh position={hologramPos} rotation={hologramRot}>
        <primitive object={hologram.scene} scale={1} />
        <InfoMark
          infoPosition={[0, 3, 0]}
          setCardIsVisible={setCardIsVisible}
          content={<HoloCard />}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          setOrbitIsOn={setOrbitIsOn}
          setCamPosition={setCamPosition}
          cam={holoCam}
        />
        <Html
        distanceFactor={ 4 }
        transform
        occlude
        position={[0, -.25, .25]}
        rotation={[0, 0, 0]}
      >
        <StartBoard
          setStartView={setStartView}
          setOrbitIsOn={setOrbitIsOn}
          setLookAtPos={setLookAtPos}
          setInfoIsVisible={setInfoIsVisible}
        />
      </Html>

      </mesh>
    </>
  );
}
