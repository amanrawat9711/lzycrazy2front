import React from 'react'
import { logo } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-[#394A74]  text-white">
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="mt-12  flex flex-col md:flex-row justify-between items-center mb-6">

          <div className=" flex items-center mb-4 md:mb-0">
            <h2 className="text-4xl font-semibold text-white">Lzycrazy Market</h2>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-sm mb-4 md:mb-0">
            <img src={logo} alt="logo" className="w-40" />
            <div className="flex gap-4">
              <span className='text-lg'>Bangladesh</span>
              <span className='text-lg'>India</span>
              <span className='text-lg'>Nepal</span>
            </div>
          </div>
 
          <select className="bg-white text-black px-4 py-2 rounded shadow mt-4 md:mt-0">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <hr className="border-gray-300 my-6" />
 
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-base text-white">
          <div className="space-y-2 flex flex-col">
            <a href="#" className="underline">About Us</a>
            <a href="#" className="underline">Features</a>
            <a href="#" className="underline">Blogs</a>
            <a href="#" className="underline">Careers</a>
          </div>
          <div className="space-y-2 flex flex-col">
            <a href="#" className="underline">Service</a>
            <a href="#" className="underline">Sell On Lzycrazy</a>
            <a href="#" className="underline">Advertising With Us</a>
            <a href="#" className="underline">Social Media</a>
            <a href="#" className="underline">Business</a>
            <a href="#" className="underline">Shopping</a>
            <a href="#" className="underline">Entertainment</a>
          </div>
          <div className="space-y-2 flex flex-col">
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">Data Policy</a>
            <a href="#" className="underline">Cookie Policy</a>
          </div>
          <div className="space-y-2 flex flex-col">
            <a href="#" className="underline">Help Center</a>
            <a href="#" className="underline">Contact Us</a>
            <a href="#" className="underline">Return Policy</a>
            <a href="#" className="underline">Feedback</a>
          </div>
        </div>
      </div>

      <div className="bg-[#2D3A5E] mt-10 h-20 text-center py-7 text-base text-white">
        Lzycrazy Copyright © 2022, All Right Reserved
      </div>
    </footer>
  )
}

export default Footer;
