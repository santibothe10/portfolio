export default function Hud() {
  return (
    <>
        <p
          className="text-3xl text-slate-100 absolute z-10 left-[1rem] top-[1rem]">
          SB
        </p>
          <span className="absolute flex flex-col gap-2 space-x-2 items-end z-10 bottom-[1rem] right-[1rem]">
            <a href="#" className="hover:scale-125">
              <img src="./svgs/LinkedIn.svg" className="inline-block h-8 w-8 md:h-10 md:w-10 rounded "/>
            </a>
            <a href="#" className="hover:scale-125">
              <img src="./svgs/GitLab.svg" className="inline-block h-8 w-8 md:h-10 md:w-10 rounded "/>
            </a>
            <a href="#" className="hover:scale-125 rounded-full border-2 border-black">
              <img src="./svgs/GitHub.svg" className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full bg-slate-100"/>
            </a>
          </span>
        <p
          className="text-slate-100 absolute z-10 bottom-0">
        </p>
        {/* <p
          className="text-slate-100 absolute z-10 bottom-[1rem] left-[1rem] ">
          santiagobothe@outlook.com
        </p> */}
    </>
  )
}
