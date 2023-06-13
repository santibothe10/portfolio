import * as THREE from "three"
import { useState } from "react"

export default function StartBoard({setStartView, setOrbitIsOn, setLookAtPos, setInfoIsVisible}) {

  const [greetBoard, setGreetBoard] = useState(true)

  const handleEnter = () => {
    setLookAtPos(new THREE.Vector3(0, 0, 0))
    setStartView(false)
    setTimeout(() => {
      setInfoIsVisible(true)
      setOrbitIsOn(true)
      setGreetBoard(false)
    }, 2000)
  }


  return (
    <div className="flex flex-wrap content-between h-[22rem]">
            {greetBoard ? <div className="w-full flex flex-col justify-center">
              <h1 className="text-center mt-1 mb-1 text-4xl font-semibold text-cyan-500">
                I'm Santi
              </h1>
              <p className="text-center text-xl text-slate-100">
                a Software Developer
              </p>
              <p className="text-center my-1 text-lg mb-3 text-slate-100">
                Welcome to my world
              </p>
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-10 h-10 text-slate-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor"
            className="w-10 h-10 text-slate-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
              </div>

              <p className="text-center my-1 text-lg text-slate-100">
                Click and drag to navigate
              </p>
              <button
              onClick={handleEnter}
              className="mt-5 bg-gradient-to-r to-cyan-400 from-teal-400 opacity-80
              hover:scale-110 hover:opacity-100 text-gray-800 font-bold py-2 px-4
              text-lg rounded inline-flex items-center">
              <span className="text-xl">Enter My World </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
                </div> :
                <div>
                <h1 className="text-center mt-1 mb-1 text-4xl font-semibold text-cyan-500">
                Skills
              </h1>
              <p className="text-center text-xl text-slate-100">
                languages and toolkit
              </p>
              <div
                className="w-[30rem] flex flex-wrap overflow-hidden pointer-events-none">

                <img src="./svgs/Python.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/React.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Tailwind CSS.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Docker.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Vite.js.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Flask.svg" className="inline-block w-16 h-16 rounded-full bg-cyan-300 "/>
                <img src="./svgs/MongoDB.svg" className="inline-block w-16 h-16 rounded "/>

                <img src="./svgs/JavaScript.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Redux.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Bootstrap.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Github.svg" className="inline-block w-16 h-16 rounded-full border-2 bg-slate-100 "/>
                <img src="./svgs/Django REST.svg" className="inline-block w-16 h-16 rounded-full bg-slate-100"/>
                <img src="./svgs/FastAPI.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/SQLite.svg" className="inline-block w-16 h-16 rounded "/>

                <img src="./svgs/Three.js.svg" className="inline-block w-16 h-16 rounded-full bg-slate-100"/>
                <img src="./svgs/Json.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/CSS3.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Gitlab.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Insomnia.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/Django.svg" className="inline-block w-16 h-16 rounded "/>
                <img src="./svgs/PostgresSQL.svg" className="inline-block w-16 h-16 rounded "/>

              </div>
                </div>
                }
          </div>
  )
}
