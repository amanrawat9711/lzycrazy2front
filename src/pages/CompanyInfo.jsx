import React, { useState, useEffect } from "react";
import {
  aboutteam,
  aboutus,
  aboutusbg,
  amazon,
  google,
  mission,
  redhat,
  values,
  vision,
} from "../assets/assets";

const CompanyInfo = () => {
  const cards = [
    {
      title: "Vision",
      description:
        "The vision is to emerge as the largest networking site in the global world by administering people with the convenient access and greatest platform to connect them extensively.",
      hoverBg: "bg-blue-500",
      icon: vision,
    },
    {
      title: "Mission",
      description:
        "The mission is to “let people create lifelong relationships” by allocating them a dynamic market where people can connect with each other.",
      hoverBg: "bg-green-500",
      icon: mission,
    },
    {
      title: "Values",
      description:
        "Builds connectivity, supports creative and innovative ideas, optimizes human potential, maximizes engagement, and strengthens relationships.",
      hoverBg: "bg-purple-500",
      icon: values,
    },
  ];

  const membersData = [
    {
      name: "Ram Kumar",
      description:
        "Sed perspicatis unde omnis iste natus error sit voluptatem accusantium dolorlaudantium wos totam rem aperiam eaque ab illo tempore.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Anjali Singh",
      description:
        "Sed perspicatis unde omnis iste natus error sit voluptatem accusantium dolorlaudantium wos totam rem aperiam eaque ab illo tempore.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vikram Patel",
      description:
        "Sed perspicatis unde omnis iste natus error sit voluptatem accusantium dolorlaudantium wos totam rem aperiam eaque ab illo tempore.",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Sneha Reddy",
      description:
        "Sed perspicatis unde omnis iste natus error sit voluptatem accusantium dolorlaudantium wos totam rem aperiam eaque ab illo tempore.",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState("enter"); // 'enter' | 'exit'

  useEffect(() => {
    const slideInDuration = 1000; // ms
    const holdDuration = 2000; // ms
    const slideOutDuration = 1000; // ms

    const cycle = () => {
      // Start slide in
      setAnimationState("enter");

      // After slide-in + hold, start slide out
      setTimeout(() => {
        setAnimationState("exit");
      }, slideInDuration + holdDuration);

      // After slide out, move to next member and slide in again
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % membersData.length);
        setAnimationState("enter");
      }, slideInDuration + holdDuration + slideOutDuration);
    };

    cycle(); // start immediately
    const intervalId = setInterval(
      cycle,
      slideInDuration + holdDuration + slideOutDuration
    );
    return () => clearInterval(intervalId);
  }, []);

  const currentMember = membersData[currentIndex];

  // Determine classes based on animation state
  const getAnimationClass = () => {
    if (animationState === "enter") {
      return "slide-in-from-right";
    } else if (animationState === "exit") {
      return "slide-out-to-left";
    } else {
      return "";
    }
  };

  //   const images = [
  //     amazon,
  //     redhat,
  //     google, amazon,
  //     redhat,
  //     google, amazon,
  //     redhat,
  //     google, amazon,
  //     redhat,
  //     google, amazon,
  //     redhat,
  //     google,
  //   ];

  //   const imagesToShow = [...images, ...images];

  return (
    <>
     <div
  className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
  style={{ backgroundImage: `url('${aboutusbg}')` }}
>
  <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center px-4 md:px-8">
    <div className="text-white max-w-2xl text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Mission</h2>
      <p className="text-sm md:text-md font-semibold">
        Helps people strengthen the relationships, ideas, and strong connectivity with each other.
      </p>
    </div>
  </div>
</div>

{/* About Company Section */}
<div className="flex flex-col md:flex-row items-center p-4 md:p-8 max-w-7xl mx-auto">
  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">About the company</h2>
    <p className="text-gray-700 text-sm md:text-base">
      LzyCrazy is an Indian Multi-National Technology based in Noida, India. It is Incorporated on
      18th June, 2021. With our features, users can share photos, videos, etc. We aim to provide
      luxury brands under a single platform and develop our brand as a leading platform. We focus on
      consumer satisfaction by providing outstanding services, connecting people worldwide, and
      helping businesses grow.
    </p>
  </div>
  <div className="md:w-1/2">
    <div className="rounded-lg shadow-lg overflow-hidden">
      <img
        src={aboutus}
        alt="Company"
        className="w-full h-64 md:h-full object-cover"
      />
    </div>
  </div>
</div>

{/* About the Team Section */}
<div className="max-w-7xl mx-auto px-4 py-8">
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="w-full md:w-1/2">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <img
          src={aboutteam}
          alt="Team"
          className="w-full h-64 md:h-[400px] object-cover"
        />
      </div>
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">About The Team</h2>
      <p className="text-gray-700 text-sm md:text-base mb-4">
        LzyCrazy is a team of experienced professionals ensuring the best and most efficient services to make lives effortless and joyful.
      </p>
      <p className="text-gray-700 text-sm md:text-base mb-4">
        We provide a platform for connectivity, selling, sharing ideas, promoting businesses, and more. Our goal is to become a leading global brand using the latest technology.
      </p>
      <p className="text-gray-700 text-sm md:text-base">
        Our motive is to be among the top brands globally with creativity and innovation at heart.
      </p>
    </div>
  </div>
</div>

{/* Vision, Mission, Values Section */}
<div className="max-w-7xl mx-auto px-4 py-8">
  <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Vision, Mission And Values</h2>
  <div className="flex flex-col md:flex-row gap-6">
    {cards.map((card, index) => (
      <div
        key={index}
        className={`flex-1 p-6 rounded-lg shadow-lg transition-all duration-300 bg-white hover:text-white text-center ${
          card.title === "Vision"
            ? "hover:bg-blue-500"
            : card.title === "Mission"
            ? "hover:bg-green-500"
            : "hover:bg-purple-500"
        }`}
      >
        <div className="flex justify-center mb-4">
          <img
            src={card.icon}
            alt={`${card.title} icon`}
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
          />
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h3>
        <p className="text-sm md:text-base">{card.description}</p>
      </div>
    ))}
  </div>
</div>

{/* Our Members Section */}
<div className="max-w-5xl mx-auto px-4 py-8">
  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Our Members</h2>
  <p className="text-center text-sm md:text-base mb-6">
    LzyCrazy has acquired 29 members from each state of India to provide efficient services to people.
  </p>
  <div className="flex justify-center items-center h-[300px] relative overflow-hidden">
    <div
      key={currentMember.name}
      className={`absolute inset-0 ${getAnimationClass()}`}
      style={{ backfaceVisibility: "hidden" }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto flex flex-col items-center text-center">
        <img
          src={currentMember.image}
          alt={currentMember.name}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <h3 className="text-lg md:text-xl font-semibold mb-2">{currentMember.name}</h3>
        <p className="text-sm md:text-base text-gray-700">{currentMember.description}</p>
      </div>
    </div>
  </div>
</div>

      {/* <div className="overflow-hidden w-full py-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Clients</h2>
        <div className="flex animate-marquee whitespace-nowrap">
          {imagesToShow.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Client ${index + 1}`}
              className="mx-4 h-24 object-contain"
            />
          ))}
        </div>
      </div>
 
      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutToLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        .slide-in-from-right {
          animation: slideInFromRight 1s forwards;
        }
        .slide-out-to-left {
          animation: slideOutToLeft 1s forwards;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style> */}
    </>
  );
};

export default CompanyInfo;
