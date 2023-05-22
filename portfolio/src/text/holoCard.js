export default function HoloCard() {

  return (
    <>
      <div className="flex flex-wrap content-between h-5/6">
        <div className="w-full">
          <h2 className="text-4xl font-extrabold dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-cyan-500">Better Data</span></h2>
          <p className="my-4 text-lg text-gray-500">Information about past projects.</p>
          <p className="my-4 text-lg text-gray-500">Short introduction to my work.</p>
        </div>

        <div className="w-full h-16 bg-slate-100 rounded-lg">
          <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
            <button className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 group">

            </button>
            <button className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 group">

            </button>
            <button className=" inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 group">

            </button>
          </div>
        </div>
      </div>
    </>
  )

}
