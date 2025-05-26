import React, { useState } from 'react';
import { aboutusbg } from '../assets/assets';

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = {
    Phone: ["Mobile", "Tablet", "Accessories"],
    Fashion: ["Men", "Women", "Kids"],
    "Home Ess": ["Furniture", "Kitchen", "Decor"],
    "Direct By Farm": ["Fruits", "Vegetables", "Dairy"],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-gray-800">
      <div className="flex flex-col md:flex-row gap-12">
        {/* LEFT: Hiring & Main Categories */}
        <div className="w-full md:w-1/6 space-y-6">
          <h1 className="text-3xl font-semibold">We Are Hiring</h1>
          <div className="space-y-4">
            {Object.keys(categories).map((label, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(label)}
                className={`bg-white shadow p-4 rounded-lg  flex items-center space-x-3 cursor-pointer transition hover:bg-gray-100`}
              >
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  {label === "Phone" && "📱"}
                  {label === "Fashion" && "👗"}
                  {label === "Home Ess" && "🏡"}
                  {label === "Direct By Farm" && "🚜"}
                </div>
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
 
<div className="w-full md:w-1/6 flex items-start mt-[3.75rem]">
  {selectedCategory && (
    <div className="bg-white p-4 space-y-3 w-full">
      {categories[selectedCategory].map((sub, idx) => (
        <div
          key={idx}
          className="text-sm cursor-pointer text-gray-800 hover:text-blue-600 transition border pb-2 px-2 py-2 flex justify-center items-center font-medium rounded"
        >
          {sub}
        </div>
      ))}
    </div>
  )}
</div>


        {/* RIGHT: Image Section */}
        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2">Benefits Of LZYCrazy</h2>

          <div className="overflow-hidden rounded-lg shadow transform transition-transform duration-300 hover:scale-105 ">
            <img
              src={aboutusbg}
              alt="Main"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {[1, 2].map((_, idx) => (
              <div
                key={idx}
                className="flex-1 overflow-hidden rounded-lg shadow transform transition-transform duration-300 hover:scale-105 "
              >
                <img
                  src={aboutusbg}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
