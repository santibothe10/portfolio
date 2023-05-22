import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

import Island from './objects/Island'
import House from './objects/House'
import RedSail from './objects/RedSail'
import SeaPlane from './objects/SeaPlane'
import Clouds from './objects/Clouds'
import Zeplin from './objects/Zeplin'
import Hologram from './objects/Hologram'
import Orca from './objects/Orca'
import TugBoat from './objects/TugBoat'

import BaseCard from './text/baseCard'

export default function World() {


  return (
    <>
      <OrbitControls
        makeDefault
        minPolarAngle={0} maxPolarAngle={Math.PI / 1.85}
        minDistance={10} maxDistance={52}
        enablePan={false}
        rotateSpeed={.5}
      />
      <directionalLight color="#F2F0EB" position={[1, 1, 1]} />
      <ambientLight intensity={.8} />


      <group position={[0, -5, 0]}>
        <Island />
        <House />
        <RedSail />
        <SeaPlane />
        <Clouds />
        <Hologram />

      </group>

      <BaseCard />
  </>
  )
}
