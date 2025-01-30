// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa"; // For social icons
// import { AiOutlineMail } from "react-icons/ai"; // Email icon
// import { IoLocationSharp, IoMail } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-200 text-gray-600 py-6 px-4 sm:px-8 lg:px-20">
//       <div className="container mx-auto">
//         {/* Top Section: Clinic Info & Links */}
//         <div className="flex flex-col lg:flex-row justify-between gap-8">
//           {/* 1 Side: Clinic Info */}
//           <div className="flex-1 mb-8 lg:mb-0">
//             <h3 className="text-3xl font-semibold text-teal-600 mb-4">Kids Dental World</h3>
//             <p className="text-lg mb-4">
//               Your child’s dental health is our top priority. We offer gentle, compassionate care to ensure a positive experience every time!
//             </p>
//           </div>

//           {/* 2 Side: Office Info */}
//           <div className="flex-1 mb-8 lg:mb-0 bg-green-400">
//             <h4 className="text-3xl font-semibold text-teal-600 mb-4">Office</h4>
//             <p className="text-lg mb-2">Address: Kamdhenu Estate, Malwadi, Hadapsar, Pune, Maharashtra 411028</p>
//             <div className="flex items-center gap-4 mb-2">
//               <FaPhoneAlt className="text-xl" />
//               <span className="text-lg">+1 234 567 890</span>
//             </div>
//             <div className="flex items-center gap-4 mb-2">
//               <IoLocationSharp className="text-xl" />
//               <span className="text-lg">Kamdhenu Estate, Malwadi, Hadapsar, Pune, Maharashtra 411028</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <IoMail className="text-xl" />
//               <span className="text-lg">info@kidsdentalworld.com</span>
//             </div>
//           </div>

//           {/* 3 Side: Quick Links */}
//           <div className="flex-1 text-lg">
//             <h4 className="text-3xl font-semibold text-teal-600 mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="/" className="hover:text-teal-600 transition-colors duration-200">Home</a></li>
//               <li><a href="/about" className="hover:text-teal-600 transition-colors duration-200">About Us</a></li>
//               <li><a href="/services" className="hover:text-teal-600 transition-colors duration-200">Services</a></li>
//               <li><a href="/contact" className="hover:text-teal-600 transition-colors duration-200">Contact</a></li>
//             </ul>
//           </div>

//           {/* 4 Section: Social Media Links */}
//           <div className="flex-1 text-center lg:text-left mb-8 bg-red-400">
//             <h1 className="text-3xl font-semibold text-teal-600 mb-4">Follow Us</h1>
//             <div className="flex justify-center lg:justify-start space-x-6">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl hover:text-teal-600 transition-colors duration-200"
//               >
//                 <FaFacebook />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl hover:text-teal-600 transition-colors duration-200"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl hover:text-teal-600 transition-colors duration-200"
//               >
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Copyright */}
//         <div className="text-center text-sm mt-10 ">
//           <p className="text-xl">&copy; {new Date().getFullYear()} Kids Dental World. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa"; // For social icons
import { IoLocationSharp, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-600 py-12 px-4 sm:px-8 lg:px-20 ">
      <div className="container mx-auto ">
        {/* Top Section: Clinic Info & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Side: Clinic Info */}
          <div className="flex-1 max-w-xs mb-8 lg:mb-0">
            <h3 className="text-3xl font-semibold heading-text mb-4">Kids Dental World</h3>
            <p className="text-lg mb-4">
              Your child’s dental health is our top priority. We offer gentle, compassionate care to ensure a positive experience every time!
            </p>
          </div>

          {/* Middle Side: Office Info */}
          <div className="flex-1 max-w-xs mb-8 lg:mb-0">
            <h4 className="text-3xl font-semibold heading-text mb-4">Office</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                {/* <IoLocationSharp className="text-xl" /> */}
                <span className="text-lg"><span className="font-semibold heading-text">Address:</span> Kamdhenu Estate, Malwadi, Hadapsar, Pune, Maharashtra 411028</span>
              </div>
              <div className="flex items-center gap-4">
                {/* <FaPhoneAlt className="text-xl" /> */}
                <span className="text-lg"><span className="font-semibold heading-text">Phone:</span> 80877 20097</span>
              </div>
              <div className="flex items-center gap-4">
                {/* <IoMail className="text-xl" /> */}
                <span className="text-lg"><span className="font-semibold heading-text">Mail:</span> info@kidsdentalworld.com</span>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Links */}
          <div className="flex-1 max-w-xs mb-8 lg:mb-0">
            <h4 className="text-3xl font-semibold heading-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#2563EB] transition-colors duration-200 text-lg">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#2563EB] transition-colors duration-200 text-lg">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#2563EB] transition-colors duration-200 text-lg">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#2563EB] transition-colors duration-200 text-lg">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex-1 max-w-xs mb-8 lg:mb-0">
            <h4 className="text-3xl font-semibold text-teal-600 mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:text-[#2563EB] transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:text-[#2563EB] transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:text-[#2563EB] transition-colors duration-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-sm mt-10 border-t border-gray-500 pt-6">
          <p className="text-xl">Copyright &copy; 2025. <span className="text-[#2563EB] font-semibold">Kids Dental World</span>. All rights reserved. Developed by Peakprosys Solutions Pvt. Ltd. .</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;