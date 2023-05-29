
export default function ProjectTwo() {

  return (
    <>
     <div className="animate-appear">
        <div
          style={{backgroundImage: 'url(./images/Sessions/ss3.png)' }}
          className="relative h-52 md:h-56 max-w-full rounded-lg bg-cover
          bg-center">
        </div>
        <div className="flex justify-between mt-4 mb-1 text-xl md:text2xl font-semibold text-gray-500">
            Sessions
            <div
            className="bottom-0 flex -space-x-1 overflow-hidden">
            <img src="./svgs/React.svg" className="inline-block h-6 w-6 roundedd "/>
            <img src="./svgs/Bootstrap.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/Github.svg" className="inline-block h-6 w-6 rounded bg-white"/>
            <img src="./svgs/Javascript.svg" className="inline-block h-6 w-6 rounded "/>
          </div>
          </div>
          <p className="my-1 md:my-2 text-lg md:text-xl text-gray-500">
            Developed and continue to use this study tool to streamline my own personal
            web development journey.
            This site leverages React-Router and Github Static pages.
          </p>
          <p className="my-1 text-lg md:text-xl text-blue-500">
            <a
              href="https://santibothe10.github.io/study-sessions/"
              target="_blank"
              className="mb-2">
              see more...
            </a>
          </p>
      </div>
    </>
  )
}
