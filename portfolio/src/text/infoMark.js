import { Html } from "@react-three/drei";

export default function InfoMark({
  infoPosition,
  setCardIsVisible,
  setContent,
  content,
  setInfoIsVisible,
  infoIsVisible
}) {

  const clickInfoMark = () => {
    setCardIsVisible(true)
    setInfoIsVisible(false)
    setContent(content)
  }


  return (
    <>
      {infoIsVisible && <Html
          position={ infoPosition }
          center
          distanceFactor={ 10 }
          occlude
          zIndexRange={[0, 0]}
        >
            <span onClick={clickInfoMark}
            className="flex w-20 h-20 md:w-24 md:h-24
            rounded-3xl ring-4 ring-slate-100 ring-inset
            justify-center content-center hover:scale-110
            cursor-pointer opacity-60 hover:opacity-100
            bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400
            flex-col items-center animate-marka"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 text-slate-100">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </span>

        </Html>}
    </>
  )
}
