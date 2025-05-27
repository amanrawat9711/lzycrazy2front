import React, { useState } from 'react';
import { aboutusbg } from '../assets/assets';
import { FaTimes } from 'react-icons/fa';

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    qualification: "",
    experience: "",
    email: "",
    mobileNumber: "",
    skill: "",
    state: "",
    city: "",
    videoUrl: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      videoUrl: e.target.files[0]
    }));
  };

 const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted Form Data:", formData);
  alert("Form submitted! (This is frontend only)");
  setShowForm(false);
 };

 const categories = {
    Phone: ["Mobile", "Tablet", "Accessories"],
    Fashion: ["Men", "Women", "Kids"],
    "Home Ess": ["Furniture", "Kitchen", "Decor"],
    "Direct By Farm": ["Fruits", "Vegetables", "Dairy"],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-gray-800">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        {/* LEFT SIDE: Categories + Subcategories */}
        <div className="flex flex-row w-full lg:w-1/2 gap-4 overflow-hidden">
          {/* Categories */}
          <div className="flex-shrink-0 w-[50%] min-w-[150px] max-w-[300px] p-4 space-y-4">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">We Are Hiring</h1>
            <div className="space-y-3">
              {Object.keys(categories).map((label, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(label)}
                  className="bg-white shadow p-3 rounded-lg flex items-center space-x-3 cursor-pointer transition hover:bg-gray-100"
                >
                  <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">
                    {label === "Phone" && "📱"}
                    {label === "Fashion" && "👗"}
                    {label === "Home Ess" && "🏡"}
                    {label === "Direct By Farm" && "🚜"}
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subcategories */}
          <div className="flex-shrink-0 w-[50%] min-w-[150px] max-w-[300px] p-4 mt-5 space-y-3 overflow-hidden">
            {selectedCategory && (
              <div className="bg-white p-4 space-y-3 rounded-lg ">
                {categories[selectedCategory].map((sub, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedSub(sub);
                      setShowForm(true);
                    }}
                    className="text-sm cursor-pointer text-gray-800 hover:text-blue-600 transition border pb-2 py-2 flex justify-center items-center font-medium rounded"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE: Images and Benefits */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2">Benefits Of LZYCrazy</h2>
          <div className="overflow-hidden rounded-lg shadow transform transition-transform duration-300 hover:scale-105">
            <img src={aboutusbg} alt="Main" className="w-full h-72 object-cover" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {[1, 2].map((_, idx) => (
              <div
                key={idx}
                className="flex-1 overflow-hidden rounded-lg shadow transform transition-transform duration-300 hover:scale-105"
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

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes />
            </button>
            <form onSubmit={handleFormSubmit}>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Apply for {selectedSub}
              </h2>

              {[
                { name: "fullName", placeholder: "Enter Full Name" },
                { name: "qualification", placeholder: "Enter Qualification" },
                { name: "experience", placeholder: "Enter Experience" },
                { name: "email", placeholder: "Enter Email", type: "email" },
                { name: "mobileNumber", placeholder: "Enter Mobile Number" },
                { name: "skill", placeholder: "Enter Skill" },
                { name: "state", placeholder: "Enter State" },
                { name: "city", placeholder: "Enter City" }
              ].map((input, i) => (
                <input
                  key={i}
                  name={input.name}
                  type={input.type || "text"}
                  value={formData[input.name]}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
                />
              ))}

              <input
                type="file"
                name="videoUrl"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full rounded mb-4 border"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}