import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'

import Island from './objects/Island'
import House from './objects/House'
import RedSail from './objects/RedSail'
import SeaPlane from './objects/SeaPlane'
import Clouds from './objects/Clouds'
import Hologram from './objects/Hologram'
import Zeplin from './objects/Zeplin'
import Orca from './objects/Orca'
import TugBoat from './objects/TugBoat'


import BaseCard from './text/baseCard'

export default function World() {

  const [cardIsVisible, setCardIsVisible] = useState(false)
  const [infoIsVisible, setInfoIsVisible] = useState(true)
  const [content, setContent] = useState(null)

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
        <Clouds />
        {/* <Zeplin />
        <Orca />
        <TugBoat /> */}
        <House
          setCardIsVisible={setCardIsVisible}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
        />
        <RedSail
          setCardIsVisible={setCardIsVisible}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
        />
        <SeaPlane
          setCardIsVisible={setCardIsVisible}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
        />
        <Hologram
          setCardIsVisible={setCardIsVisible}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
        />

      </group>

      {cardIsVisible && <BaseCard
        setCardIsVisible={setCardIsVisible}
        content={content}
        setInfoIsVisible={setInfoIsVisible}
        />}
  </>
  )
}
