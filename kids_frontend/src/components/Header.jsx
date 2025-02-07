import React from "react";
import headerImage from "../assets/header_img.jpeg";
//import animationData from "../assets/dental-animation.json"; // Replace with your animation file

const Header = () => {
  return (
    <header className=" flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:py-20 lg:px-20 bg-primary text-white">
      {/* Left Section - Text & Button */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-3xl mt-4 lg:text-5xl font-bold mb-6">
          Where Smiles Shine Bright!✨
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Providing the best dental care for kids with fun and comfort.
        </p>
        <a href="/contact"><button className="cursor_toothbrush bg-white hover:bg-gradient-to-l hover:from-[#609fe7] hover:` text-blue-600 px-6 py-3 hover:text-gray-700 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-100 transition duration-300">
          Get in touch to book an Appointment
        </button></a>
      </div>

      {/* Right Section - Animated Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
       <img className="rounded-xl" src={headerImage} alt="Child Image"/>
      </div>
    </header>
  );
};

export default Header;
