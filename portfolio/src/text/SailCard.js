export default function SailCard() {

  return (
    <>
      <div className="flex flex-wrap content-between h-[27rem]">
        <div className="w-full">
          <div className="animate-appear">
            <div
              style={{backgroundImage: 'url(./images/diving/dv1.png)' }}
              className="relative h-52 md:h-56 max-w-full rounded-lg bg-cover
              bg-top">
            </div>
            <p className="flex justify-between mt-4 mb-1 text-xl md:text2xl font-semibold text-gray-500">
              Diving Instructor
            </p>
            <div className="">
              <p className="my-1 md:my-2 text-lg md:text-xl text-gray-500">
                Prior to my career in software development, I was immersed in the underwater world.
                During this chapter of my life, I had the privilege of swimming alongside whale sharks, manta rays, dolphins, and sharks.
                Now I dive for myself, seeking solace and inspiration beneath the waves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
