import React from 'react'
import { blog, messi } from '../../assets/assets'
import AnimatedCards from './AnimatedCards'

const Card = () => {
  return (
    <>
<div className="flex flex-col lg:flex-row justify-center items-start gap-5 p-4">
  {/* Left: Highlight Image and Title */}
  <div className="flex flex-col items-center shadow-lg w-full lg:w-[65%]">
    <img className="w-full max-w-full h-auto object-cover rounded" src={blog} alt="Blog Thumbnail" />
    <h2 className="text-xl font-semibold mb-4 mt-2 text-center w-full">
      Latest Football Highlights
    </h2>
  </div>

  {/* Right: List of Highlights */}
 <div className="w-full lg:w-[25%] p-4 bg-white shadow-md rounded-lg space-y-6">
  {[1, 2, 3].map((_, index) => (
    <div key={index}>
      <div className="grid grid-cols-[1fr_auto] gap-4 items-start">
        {/* Left Text Content */}
        <div>
          <h2 className="font-bold mb-1 text-sm sm:text-lg">Bests of Lionel Messi</h2>
            <p className="mb-1 text-xs sm:text-sm">Cristiano Ronaldo of Juventus FC</p>

          <p className="mb-1 text-xs sm:text-sm">looks dejected during a match</p>
          <p className="text-gray-500 text-xs sm:text-sm">16 October 2021</p>
        </div>

        {/* Right Image */}
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src={messi}
            alt="Football player"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Divider */}
      {index < 2 && (
        <hr className="w-[70%] border-t border-zinc-600 mx-auto my-4" />
      )}
    </div>
  ))}
</div>

</div>



      <AnimatedCards/>
    </>
  )
}

export default Card