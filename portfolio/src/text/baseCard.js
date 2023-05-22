import { Html } from "@react-three/drei";
import HoloCard from "./holoCard";

export default function BaseCard() {


  return (
    <>
    <Html
        zIndexRange={[10, 0]}
        center
      >
        <div className="w-[20rem] sm:w-[22rem] md:w-[30rem]
                h-[30rem] rounded-lg p-5 overflow-y-scroll
                bg-slate-100 bg-opacity-80">
            <div className="flex flex-wrap items-center justify-end mx-auto">
                <div className="relative flex items-center justify-center w-10 h-10
                            bg-gradient-to-r to-teal-500 from-cyan-500 bg-opacity-80 rounded-full"
                >
                    <span className="text-slate-100">X</span>
                </div>
            </div>
            <HoloCard />
        </div>
    </Html>
    </>
  )
}
