import React from 'react';
import animatedDoctor from '../assets/maledoctor.webp';
import dentalclinic from '../assets/dentalclinic.jpg';

const About = () => {
  return (
    <div className="container mx-auto px-5 py-10">

      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-teal-500 mb-10">About Us</h1>

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-5">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-5 bg-teal-50 rounded-lg shadow-md">
          <h1 className='text-[40px] text-teal-600 mb-4 font-bold'>Kids Dental World</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to Kids Dental World! We are dedicated to providing the best healthcare for your children, ensuring they grow up happy and healthy. Our team of experienced pediatricians and medical professionals is here to support your child's health every step of the way.
          </p>

          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Values</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>Compassionate care</li>
            <li>Commitment to excellence</li>
            <li>Support for families</li>
            <li>Professionalism and respect</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-5 rounded-lg overflow-hidden">
          <img src={dentalclinic} alt="Doctor" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row items-center gap-5">

        {/* Left Section */}
        <div className="w-full left lg:w-1/2 p-5 rounded-lg overflow-hidden">
          <img src={animatedDoctor} alt="Doctor" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-5 bg-teal-50 rounded-lg shadow-md">
          <h1 className='text-[40px] text-teal-600 mb-4 font-bold'>Meet Dr. ____</h1>
          <p className="text-lg text-gray-700 mb-4">
          Dr. Pranil Survashe is a highly regarded pediatric dentist in Pune, with more than 10 years of experience. He holds an MDS in children dentistry and a PG Diploma in emergency medical services. Dr. Survashe's mission is to ensure the dental health of children in Pune, and he is committed to making dental care a positive and comfortable experience for kids.
          </p>

          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>Chief Pediatric Dentist at Happy Kid Dental Clinic</li>
            <li>PG Diploma in Emergency Medical Services - Symbiosis</li>
            <li>Certification in Advanced Cardiovascular Life Support - Symbiosis</li>
            <li>Certification in Basic Life Support</li>
            <li>Certification Courses in Conscious Sedation, Myofunctional Orthodontics, Transitional Implants in Pediatric Dentistry</li>
          </ul>
        </div>


      </div>

    </div>
  );
};

export default About;
