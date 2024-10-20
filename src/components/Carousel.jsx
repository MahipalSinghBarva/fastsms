import React, { useState, useEffect, useRef } from "react";
import userimage from "../assets/user.png";

const Carousel = () => {
  const data = [
    {
      id: 1,
      text: "Great way of composing and sending a text from any computer and at a cost less than most mobile providers charge on a non-contract tariff",
      image: userimage,
    },
    {
      id: 2,
      text: "A very useful tool and we've been using it for many years. Gives customers another way to contact us.",
      image: userimage,
    },
    {
      id: 3,
      text: "We now use this tool to communicate with our clients ... Since we started using Fastsms, we dramatically cut the time wasted trying to get through to them using the phone.",
      image: userimage,
    },
    {
      id: 4,
      text: "Great way of composing and sending a text from any computer and at a cost less than most mobile providers charge on a non-contract tariff",
      image: userimage,
    },
    {
      id: 5,
      text: "Great way of composing and sending a text from any computer and at a cost less than most mobile providers charge on a non-contract tariff",
      image: userimage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [data.length]);

 
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto py-10">
      <div
        className="carousel flex overflow-hidden space-x-4 snap-x snap-mandatory"
        ref={carouselRef}
        style={{ scrollbarWidth: "none" }} 
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            className="carousel-item snap-center flex-shrink-0 w-full bg-white p-4 rounded-lg shadow-md"
            style={{ minWidth: "100%" }} 
          >
            <p className="text-gray-800 mb-4 text-center">{item.text}</p>
            <img
              src={item.image}
              alt="User testimonial"
              className="w-16 h-16 rounded-full mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
