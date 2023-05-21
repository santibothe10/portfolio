import { useGLTF } from '@react-three/drei'


export default function TropIsland() {

  const island = useGLTF("./3d-models/island.gltf")

  return (
    <>
    <mesh>
      <primitive
        object={island.scene}
        scale={1}
        position={[0,-5,0]}/>
    </mesh>
    </>
  )
}
