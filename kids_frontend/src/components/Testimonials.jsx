import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Parent of a Happy Patient",
      message:
        "Kids Dental World is amazing! The staff is so friendly, and my child actually looks forward to visiting the dentist. Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Parent of a Happy Patient",
      message:
        "The care and attention my child received were exceptional. The dentists are patient and explain everything in a way kids can understand.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Parent of a Happy Patient",
      message:
        "We've been coming here for years, and it's always a great experience. The team is professional, and the facility is clean and kid-friendly.",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Parent of a Happy Patient",
      message:
        "I was so nervous about my child's first dental visit, but the team made it so easy. They are truly the best in town!",
    },
    {
      id: 5,
      name: "Aniket Tambe",
      role: "Parent of a Happy Patient",
      message:
        "I was so nervous about my child's first dental visit, but the team made it so easy. They are truly the best in town!",
    },
  ];

  // Function to truncate text to 256 characters
  const truncateText = (text, maxLength = 256) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="bg-primary py-12 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold heading-text mb-8 text-center">What Our Patients Say</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-lg duration-200 h-80 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold heading-text">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 flex-grow">
                  {truncateText(testimonial.message)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;