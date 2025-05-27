import  { useState, useEffect } from 'react';
import { aboutus } from '../../assets/assets';

const cardsData = Array.from({ length: 10 }, (_, i) => ({
  title: 'Responding To COVID-19',
  description: 'A healthy population is one of any nation’s most important assets….',
  date: '17 October 2021',
  image: aboutus,
}));

const AnimatedCards = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 4000);  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center">
  <div className="overflow-hidden w-[80%] bg-gray-100 py-8 sm:w-full sm:px-4 md:w-[90%]">
    <div
      className={`flex space-x-4 transition-transform duration-[3000ms] ease-linear ${
        animate ? 'animate-slide' : ''
      }`}
    >
      {cardsData.concat(cardsData).map((card, index) => (
        <div
          key={index}
          className="w-72 sm:w-56 md:w-64 bg-white rounded-lg shadow-md flex-shrink-0"
        >
          <img
            src={card.image}
            alt="Sample"
            className="w-full object-cover rounded mb-2"
          />
          <div className="m-2">
            <h2 className="font-bold mb-2 text-lg">{card.title}</h2>
            <p className="text-sm mb-2">{card.description}</p>
            <p className="text-gray-500 text-xs">{card.date}</p>
          </div>
        </div>
      ))}
    </div>

    <style jsx>{`
      @keyframes slideLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-slide {
        animation: slideLeft 10s linear forwards;
      }
    `}</style>
  </div>
</div>

  );
};

export default AnimatedCards;