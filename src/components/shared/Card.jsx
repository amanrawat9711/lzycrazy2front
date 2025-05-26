import React from 'react'
import { blog } from '../../assets/assets'
import AnimatedCards from './AnimatedCards'

const Card = () => {
  return (
    <>
    <div className="flex justify-center items-start gap-5 p-4">
      <div className="flex flex-col items-center shadow-lg"> 
        <img className='w-220' src={blog} />  
        <h2 className="text-xl font-semibold mb-4 mt-2 text-center w-full">
          Latest Football Highlights
        </h2>
      </div>
 
      <div className="max-w-2xl p-4 bg-white shadow-md rounded-lg space-y-4"> 
        <div className="flex items-start space-x-4"> 
          <div className="flex-1">
            <h2 className="font-bold mb-2 text-lg">Bests of Lionel Messi</h2>
            <p className="mb-2 text-sm">Cristiano Ronaldo of Juventus FC</p>
            <p className="mb-2 text-sm">looks dejected during a match</p>
            <p className="text-gray-500 text-sm">16 October 2021</p>
          </div> 
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
              alt="Football players"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div> 
        <hr className="w-[70%] border-t border-zinc-600 mx-auto my-4" />
 
        <div className="flex items-start space-x-4"> 
          <div className="flex-1">
            <h2 className="font-bold mb-2 text-lg">Bests of Lionel Messi</h2>
            <p className="mb-2  text-sm">Cristiano Ronaldo of Juventus FC</p>
            <p className="mb-2  text-sm">looks dejected during a match</p>
            <p className="text-gray-500  text-sm">16 October 2021</p>
          </div> 
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
              alt="Football players"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
 
        <hr className="w-[70%] border-t border-zinc-600 mx-auto my-4" />  
        <div className="flex items-start space-x-4"> 
          <div className="flex-1">
            <h2 className="font-bold mb-2 text-lg">Bests of Lionel Messi</h2>
            <p className="mb-2  text-sm">Cristiano Ronaldo of Juventus FC</p>
            <p className="mb-2  text-sm">looks dejected during a match</p>
            <p className="text-gray-500  text-sm">16 October 2021</p>
          </div> 
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
              alt="Football players"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
      <AnimatedCards/>
    </>
  )
}

export default Card