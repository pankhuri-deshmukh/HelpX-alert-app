import React from "react";
import image from './assets/about-img.png'

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-5xl sm:leading-10 sm:truncate">
              About Us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Our website is dedicated to empowering women and protecting children by providing real-time emergency alerts and resources to stay safe.
            </p>
            <div className="mt-8 flex">
              <div className="ml-2">
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#EE6F57]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:ml-4">
            <img
              className="h-56 w-full object-cover md:h-96 rounded-lg shadow-lg"
              src={image}
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
