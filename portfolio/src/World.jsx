import { OrbitControls, Stars, Sparkles, Html } from '@react-three/drei'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import Island from './objects/Island'
import House from './objects/House'
import RedSail from './objects/RedSail'
import SeaPlane from './objects/SeaPlane'
import Clouds from './objects/Clouds'
import Hologram from './objects/Hologram'


import BaseCard from './text/baseCard'

export default function World() {

  const billboardCamPos = new THREE.Vector3(1, -7, -30.69)
  const mapCenter = new THREE.Vector3(0, 0, 0)
  const ghostRef = useRef()
  // const camSpeed = 1

  const [cardIsVisible, setCardIsVisible] = useState(false)
  const [infoIsVisible, setInfoIsVisible] = useState(false)
  const [content, setContent] = useState(null)

  const [startView, setStartView] = useState(true)
  const [orbitIsOn, setOrbitIsOn] = useState(false)
  const [camPosition, setCamPosition] = useState(new THREE.Vector3(-60, 8.5, -24))
  const [lookAtPos, setLookAtPos] = useState(new THREE.Vector3(-6.95, -4.35, 12.80))

  useFrame((state, delta) => {
    // console.log(state.camera.position)
    state.camera.lookAt(ghostRef.current.position)
    if(startView) {
      state.camera.position.lerp(billboardCamPos, delta / 1.25)
    }
    if(!orbitIsOn && !startView) {
      state.camera.position.lerp(camPosition, delta)
    }
    if(ghostRef.current.position.distanceTo(mapCenter) !== 0 && lookAtPos.distanceTo(mapCenter) === 0) {
      ghostRef.current.position.lerp(lookAtPos, delta * 3)
      if(lookAtPos.distanceTo(ghostRef.current.position) < .005) {
        ghostRef.current.position.set(0 ,0 ,0)
      }
    }

  })

  return (
    <>
      <OrbitControls
        enabled={orbitIsOn}
        minPolarAngle={Math.PI * .25} maxPolarAngle={Math.PI * .75}
        minDistance={10} maxDistance={75}
        enablePan={false}
        rotateSpeed={.5}
      />
      <directionalLight color="white" position={[1, 1, 1]} intensity={2} />
      <directionalLight color="#d6e8fe" position={[0, -1, 0]} intensity={5}/>
      <ambientLight intensity={.5} />
      <group position={[0, -5, 0]}>
        <Island />
        <Clouds />
        <House
          setCardIsVisible={setCardIsVisible}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          setOrbitIsOn={setOrbitIsOn}
          setCamPosition={setCamPosition}
        />
        <RedSail
          setCardIsVisible={setCardIsVisible}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          setOrbitIsOn={setOrbitIsOn}
          setCamPosition={setCamPosition}
        />
        <SeaPlane
          setCardIsVisible={setCardIsVisible}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          setOrbitIsOn={setOrbitIsOn}
          setCamPosition={setCamPosition}
        />
        <Hologram
          setCardIsVisible={setCardIsVisible}
          setContent={setContent}
          setInfoIsVisible={setInfoIsVisible}
          infoIsVisible={infoIsVisible}
          setOrbitIsOn={setOrbitIsOn}
          setCamPosition={setCamPosition}
          setStartView={setStartView}
          setLookAtPos={setLookAtPos}
        />

        <group ref={ghostRef} position={[-.75, -6, -20.5]}>
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={ [ 1, 1, 1 ] } />
          <meshStandardMaterial transparent opacity={0}/>
          {/* <meshStandardMaterial color="red"/> */}
        </mesh>
        </group>
      </group>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade speed={1} />
      <Sparkles
        size={ 20 }
        scale={ [ 100, 100, 100 ] }
        position-y={ 1 }
        speed={ 1 }
        count={ 75 }
        fade
      />
      {cardIsVisible && <BaseCard
        setCardIsVisible={setCardIsVisible}
        content={content}
        setInfoIsVisible={setInfoIsVisible}
        orbitIsOn={orbitIsOn}
        setOrbitIsOn={setOrbitIsOn}
      />}
  </>
  )
}
