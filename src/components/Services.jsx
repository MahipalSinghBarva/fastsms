import React from "react";
import image from "../assets/banner.png";

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="flex flex-col md:flex-col items-center md:space-x-8 w-full">
        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Powerful SMS Features
          </h1>
          <p className="text-sm md:text-base text-gray-700 text-center">
            Developed in-house for over 15 years, new features are always being
            added based on real customer feedback.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10">
          <img
            src={image}
            alt="SMS Features"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="text-xl font-bold mb-4">Bulk SMS</h4>
            <p className="text-gray-700">
              Send messages to large audiences quickly and easily.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="text-xl font-bold mb-4">SMS API</h4>
            <p className="text-gray-700">
              Integrate SMS messaging into your applications.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="text-xl font-bold mb-4">SMS Campaigns</h4>
            <p className="text-gray-700">
              Manage SMS campaigns to engage your customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
