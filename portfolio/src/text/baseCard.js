import { Html } from "@react-three/drei";

export default function BaseCard({setCardIsVisible, content, setInfoIsVisible}) {

  const handleExit = () => {
    setCardIsVisible(false)
    setInfoIsVisible(true)
  }

  return (
    <>
    <Html
        zIndexRange={[10, 0]}
        center
      >
        <div
            className="relative animate-appear w-[20rem] sm:w-[22rem] md:w-[30rem]
            h-[32.5rem] md:h-[33rem] rounded-lg p-2 md:p-3
            bg-slate-50 bg-opacity-80"
        >
            <div className="">
                <div onClick={handleExit}
                    className="bg-gradient-to-r to-cyan-400
                  from-teal-400 right-1 top-1 rounded-lg rounded-bl-2xl
                    z-10 absolute hover:scale-125 border-4 border-slate-200 flex
                    w-8 h-8 md:w-10 md:h-10 justify-center items-center"
                >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-slate-100">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>
            {content}
        </div>
    </Html>
    </>
  )
}
// "relative flex items-center justify-center w-10 h-10
//                     hover:bg-gradient-to-r to-teal-500 from-cyan-500 bg-opacity-80 rounded-full
//                     bg-gradient-to-r hover:to-cyan-400 hover:from-teal-400"
