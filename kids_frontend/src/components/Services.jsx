import React from 'react'
import service1 from "../assets/Services_images/service1.jpeg"
import service2 from "../assets/Services_images/service2.jpeg"
import service3 from "../assets/Services_images/service3.jpeg"
import service4 from "../assets/Services_images/service3.jpeg"
import service5 from "../assets/Services_images/service5.jpeg"
import service6 from "../assets/Services_images/service6.jpeg"


const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Emergency Dentistry",
      image: service1,
      description:
        " A pediatric dental issue is typically classified as a dental emergency when it requires immediate treatment in order to prevent further damage to the mouth or to alleviate extreme pain and discomfort.",
    },
    {
      id: 2,
      title: "Preventive Dentistry",
      image: service2,
      description:
        "Regular checkups and cleanings help maintain oral health, preventing cavities and gum diseases before they start.",
    },
    {
      id: 3,
      title: "Cosmetic Dentistry",
      image: service3,
      description:
        "Enhancing your smile with teeth whitening, veneers, and more to improve confidence and appearance.",
    },
    {
      id: 4,
      title: "Orthodontics",
      image: service4,
      description:
        "Braces and aligners help straighten teeth, improving dental function and aesthetics for a perfect smile.",
    },
    {
      id: 5,
      title: "Restorative Dentistry",
      image: service5,
      description:
        "Repair damaged or missing teeth with fillings, crowns, bridges, and implants to restore functionality.",
    },
    {
      id: 6,
      title: "Pediatric Dentistry",
      image: service6,
      description:
        "Specialized dental care for children, ensuring healthy teeth development and a comfortable experience.",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-10 bg-primary">
      <h2 className="heading-text text-3xl font-bold text-center mb-16">
        Our Services
      </h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="min-w-xs mx-auto group relative cursor-pointer">
            {/* Main Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-96 
        transform origin-bottom-right perspective-[500px] group-hover:rotate-3">
              {/* Visible Content */}
              <div className="relative h-full">
                {/* Text Container - Hidden on hover */}
                <div className="text-center z-10 relative transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-2xl font-bold heading-text mb-4">
                    {service.title}
                  </h3>
                </div>

                {/* Image Container */}
                <div className="absolute inset-0 top-12">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Hidden Content on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t bg-primary p-6 rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 text-black">
                <h1 className="font-extrabold py-2 heading-text">
                  {service.title}
                </h1>
                <p className="text-black text-lg mb-4">{service.description}</p>
                <button className="heading-text hover:text-blue-700 text-sm font-semibold transition-colors py-2 px-4 border border-black rounded-lg bg-white">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
