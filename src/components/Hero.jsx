import React from "react";
import image from "../assets/banner.png";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">
          FastSMS: The Future of Messaging
        </h2>
        <p className="mb-8 text-lg">
          Reliable SMS services to help your business grow.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold  hover:text-black shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
