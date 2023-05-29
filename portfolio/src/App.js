import './App.css';
import { Canvas } from "@react-three/fiber";
import World from './World';
import { Suspense } from 'react';
import {ResizeObserver} from "@juggle/resize-observer"
import HouseCard from './text/HouseCard';

function App() {
  return (
    <>
    {/* <div className='flex justify-center'>
      <HouseCard />
    </div> */}
      <Canvas
          resize={{polyfill: ResizeObserver}}
          camera={{
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
