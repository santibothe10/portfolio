import { useEffect } from 'react';

import { useAnimations, useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export default function Orca() {

  const orca = useGLTF("./3d-models/orca/scene.gltf")
  const animations = useAnimations(orca.animations, orca.scene)
  const { orcaPos, orcaRot } = useControls({
    orcaPos: {
      value:[-7.5, -2.10, 0.75],
      step: .25
    },
    orcaRot: {
      value: [0, 4.75, 0],
      step: .05
    },
  })

  useEffect(() => {
    console.log(animations.actions.Scene)
    const action = animations.actions.Scene
    action.reset().fadeIn(0.5).play()

    return () => {
      action.fadeOut(0.5)
    }
  }, [])

  return (
    <>
      <mesh position={orcaPos} rotation={orcaRot}>
        <primitive
          wireframe
          object={orca.scene}
          scale={2}
        />
      </mesh>
    </>
  )
}
