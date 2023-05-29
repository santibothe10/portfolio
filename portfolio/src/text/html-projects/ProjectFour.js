export default function ProjectFour() {

  return (
    <>
     <div className="animate-appear">
        <div
          style={{backgroundImage: 'url(./images/Whimzee/wh2.png)' }}
          className="relative h-52 md:h-56 max-w-full rounded-lg bg-cover
          bg-center">
        </div>
        <div className="flex justify-between mt-4 mb-1 text-xl md:text2xl font-semibold text-gray-500">
            Special Thanks
            <div
            className="bottom-0 flex -space-x-1 overflow-hidden">
            <img src="./svgs/React.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/FastAPI.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/Docker.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/Tailwind CSS.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/PostgresSQL.svg" className="inline-block h-6 w-6 rounded "/>
            <img src="./svgs/gitlab.svg" className="inline-block h-6 w-6 rounded "/>
          </div>
          </div>
          <p className="my-1 md:my-2 text-lg md:text-xl text-gray-500">
            An e-commerce site featuring user authentication and a secure payment portal.
            Employed Json Web Tokens, deployed cookies, and integrated the Stripe API.
          </p>
          <p className="my-1 text-lg md:text-xl text-blue-500">
            <a
              href="#"
              // target="_blank"
              className="mb-2">
              Coming soon...
            </a>
          </p>
      </div>
    </>
  )
}
