import React from 'react'
import { logo } from '../../assets/assets'

const Crazyidea = () => {
  return (
    <div className="w-[80%] justify-between mx-auto p-4 bg-[#394A74] bg-opacity-80 h-30 shadow-lg mt-4 mb-8 flex items-center">
      <h1
        className="
          text-sm md:text-4xl font-bold text-gray-800 px-4 text-center
          sm:text-xl
          md:text-2xl
        "
      >
        <span className="text-yellow-500 font-semibold">A Crazy idea Can</span>{' '}
        <span className="text-white"> Change Your Life</span>
      </h1>
      <img
        src={logo}
        alt="Logo"
        className="
          w-20
          sm:w-16
          md:w-40
          h-auto
        "
      />
    </div>
  )
}

export default Crazyidea
