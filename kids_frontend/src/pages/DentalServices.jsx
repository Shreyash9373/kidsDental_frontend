import React from "react";
import serviceImage1 from "../assets/Services_images/service1.jpeg"; // Replace with your image path
import serviceImage2 from "../assets/Services_images/service2.jpeg"; // Replace with your image path

const DentalServices = () => {
  const services = [
    {
      title: "Pediatric Dental Care",
      description:
        "Specialized dental care for children, ensuring their teeth and gums stay healthy from an early age. We provide gentle and compassionate care to make dental visits a positive experience.",
      image: serviceImage1,
    },
    {
      title: "Orthodontic Treatments",
      description:
        "Comprehensive orthodontic solutions, including braces and aligners, to correct teeth alignment and improve your child's smile. Our treatments are tailored to meet the unique needs of each child.",
      image: serviceImage2,
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center heading-text mb-10">
        Our Dental Services
      </h1>

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-5 mb-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-5 bg-primary rounded-lg shadow-md">
          <h1 className="text-[40px] heading-text mb-4 font-bold">
            {services[0].title}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            {services[0].description}
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>Regular dental check-ups and cleanings</li>
            <li>Fluoride treatments and sealants</li>
            <li>Early cavity detection and prevention</li>
            <li>Child-friendly dental environment</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-5 rounded-lg overflow-hidden">
          <img
            src={services[0].image}
            alt="Pediatric Dental Care"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row items-center gap-5">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-5 rounded-lg overflow-hidden">
          <img
            src={services[1].image}
            alt="Orthodontic Treatments"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-5 bg-primary rounded-lg shadow-md">
          <h1 className="text-[40px] heading-text mb-4 font-bold">
            {services[1].title}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            {services[1].description}
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>Traditional braces and clear aligners</li>
            <li>Customized treatment plans</li>
            <li>Early orthodontic evaluations</li>
            <li>Comfortable and effective solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DentalServices;