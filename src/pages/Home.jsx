import React from 'react'; 
import Card from '../components/shared/Card';   
import  {bgvideo, logo}  from '../assets/assets'; // Assuming named export
import Crazyidea from '../components/shared/Crazyidea';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
       
      <div className="relative w-full h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> 
      </div>

      <Crazyidea/>

      <h2 className="text-2xl font-semibold md:text-4xl text-center text-gray-900 px-4">
        "Your Dream, Our Desire"
      </h2>

      <Card/>
    </div>
  );
}
