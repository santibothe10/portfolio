import './App.css';
import { Canvas } from "@react-three/fiber";
import World from './World';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas camera={{
          fov: 50,
          near: 0.1,
          far: 500,
          position: [ 0, 20, 50 ],
        }}>
        <Suspense>
          <World />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
