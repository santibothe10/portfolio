import { Html } from "@react-three/drei";

export default function InfoMark({infoPosition}) {

  const clickInfoMark = () => {
    console.log("i was clicked")
  }

  return (
      <Html
          position={ infoPosition }
          center
          distanceFactor={ 75 }
          occlude
          zIndexRange={[0, 0]}

        >
            <span onClick={clickInfoMark} className="block text-[#f59e0b90]
            p-0 bg-[#0f172a88] border-2 rounded-full
            border-[#f59e0b90] w-4 h-4 text-center
            align-middle leading-3 text-sm
            hover:text-[#f59e0b] hover:border-[#f59e0b]
            "
            >
              !
            </span>
        </Html>
  )
}
