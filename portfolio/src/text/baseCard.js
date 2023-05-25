import { Html } from "@react-three/drei";
import HoloCard from "./holoCard";

export default function BaseCard({setCardIsVisible}) {

  const handleExit = () => {
    setCardIsVisible(false)
  }

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
                <div onClick={handleExit} className="relative flex items-center justify-center w-10 h-10
                            hover:bg-gradient-to-r to-teal-500 from-cyan-500 bg-opacity-80 rounded-full
                            bg-gradient-to-r hover:to-cyan-400 hover:from-teal-400"

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
