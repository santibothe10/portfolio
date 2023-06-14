import { useGLTF } from '@react-three/drei'


export default function Island() {

  const island = useGLTF("./3d-models/islands.glb")

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
