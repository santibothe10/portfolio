export default function ProjectThree() {

  return (
    <>
     <div className="animate-appear">
        <div
          style={{backgroundImage: 'url(./images/progress-pro/pp2.png)' }}
          className="relative h-52 md:h-56 max-w-full rounded-lg bg-cover
          bg-center">
        </div>
        <div className="flex justify-between mt-4 mb-1 text-xl md:text2xl font-semibold text-gray-500">
            Progress Pro
            <div
            className="bottom-0 flex -space-x-1 overflow-hidden">
            <img src="./svgs/CSS3.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/HTML5.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/Python.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/SQLite.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/Django.svg" className="inline-block h-6 w-6 roundedd "/>
          </div>
          </div>
          <p className="my-1 md:my-2 text-lg md:text-xl text-gray-500">
            Calendar application with authentication and asynchronous daily
            notifications. Django templates, a SQLite database, Python, and pure CSS.
          </p>
          <p className="my-1 text-lg md:text-xl text-blue-500">
            <a
              href="http://santibo10.pythonanywhere.com/"
              target="_blank"
              className="mb-2">
              see more...
            </a>
          </p>
      </div>
    </>
  )
}
