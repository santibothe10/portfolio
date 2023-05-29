export default function HoloCard() {

  return (
    <>
      <div className="flex flex-wrap content-between h-[27rem]">
        <div className="w-full flex flex-col items-center">
          <div
            style={{backgroundImage: 'url(./images/me/me.png)' }}
            className="mt-1 relative w-52 md:w-56 h-52 md:h-56
            rounded-full bg-cover bg-center bg-no-repeat
            border-4 border-slate-100">
          </div>
          <h1 className="flex justify-between mt-4 mb-1 text-2xl md:text3xl font-semibold text-cyan-500">
            I'm Santi
          </h1>
          <p className="flex justify-between mb-1 text-xl md:text2xl text-gray-500">
            a Software Developer
          </p>
          <p className="my-1 w-3/4 text-center md:my-2 text-lg md:text-xl text-gray-500">
            Welcome to my world. Take a look around and enjoy your stay!
          </p>
          <div className="mt-2">
            <div className="flex mt-4 space-x-6 justify-center">
              <a href="#" className="hover:scale-125">
                <img src="./svgs/LinkedIn.svg" className="inline-block h-6 w-6 rounded "/>
              </a>
              <a href="#" className="hover:scale-125">
                <img src="./svgs/GitLab.svg" className="inline-block h-6 w-6 rounded "/>
              </a>
              <a href="#" className="hover:scale-125">
                <img src="./svgs/GitHub.svg" className="inline-block h-6 w-6 rounded "/>
              </a>
            </div>
            <p className="select-text text-center my-2 text-md text-gray-500">
              santiagobothe@outlook.com
            </p>
        </div>
        </div>
      </div>
    </>
  )
}
