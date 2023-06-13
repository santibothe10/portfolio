import { useGLTF } from '@react-three/drei'
import { Scene } from 'three'


export default function IslandScene() {

  const island = useGLTF("./3d-models/island-scene.glb")

  return (
    <>
    <mesh>
      <primitive
        object={island.scene}
        scale={1}
        position={[0,0,0]}/>
    </mesh>
    </>
  )
}
