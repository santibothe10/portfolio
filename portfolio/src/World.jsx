import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import Island from './objects/Island'
import House from './objects/House'
import RedSail from './objects/RedSail'
import SeaPlane from './objects/SeaPlane'
import Clouds from './objects/Clouds'
import Zeplin from './objects/Zeplin'
import Hologram from './objects/Hologram'
import Orca from './objects/Orca'
import TugBoat from './objects/TugBoat'

export default function World() {



  return (
    <>
      <OrbitControls
        makeDefault
        minPolarAngle={0} maxPolarAngle={Math.PI / 2}
        minDistance={10} maxDistance={50}
        enablePan={false}
      />
      <directionalLight color="#FCDDB0" position={[-10, 1, 10]} />
      <ambientLight intensity={0.5} />

      <group position={[0, 0, 0]}>
        <Island />
        <House />
        <RedSail />
        <SeaPlane />
        <Clouds />
        <Hologram />
        {/* <TugBoat /> */}
      </group>

  </>
  )
}
