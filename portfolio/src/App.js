import './App.css';
import { Canvas } from "@react-three/fiber";
import World from './World';
import { Suspense } from 'react';
import {ResizeObserver} from "@juggle/resize-observer"

import Hud from './hud/Hud';

function App() {
  return (
    <>
    <Hud />
      <Canvas
          resize={{polyfill: ResizeObserver}}
          camera={{
          fov: 50,
          near: 0.1,
          far: 500,
          position: [ -200, 50, -200],
        }}>
        <Suspense>
          <World />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
