import React from "react";
import { useForm, Controller } from "react-hook-form";

const Contact = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <div className="bg-primary text-gray-600 py-12 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-semibold heading-text mb-8 text-center">Contact Us</h2> */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Side: Contact Information */}
          <div className="flex-1 mb-8 lg:mb-0 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold heading-text mb-4">Get in Touch</h3>
            <p className="text-lg mb-6">
              Have questions or need assistance? Reach out to us, and we'll be happy to help!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-lg"><span className="font-semibold heading-text">Phone:</span> 80877 20097</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg"><span className="font-semibold heading-text">Mail:</span> info@kidsdentalworld.com</span>
              </div>
              <div className="gap-4 ">
                <span className="text-lg"><span className="font-semibold heading-text">Address:</span> Kamdhenu Estate, Malwadi, Hadapsar, Pune, Maharashtra 411028</span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.600733357992!2d73.93498!3d18.501735999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f81c0eaaab%3A0xba6b1306eb2abef3!2sKids%20Dental%20World!5e0!3m2!1sen!2sin!4v1738220619192!5m2!1sen!2sin" className="w-full h-[300px] shadow-2xl rounded mt-4" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 max-w-2xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold heading-text mb-8 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold heading-text mb-2">
                  Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg font-semibold heading-text mb-2">
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-lg font-semibold heading-text mb-2">
                  Phone
                </label>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-lg font-semibold heading-text mb-2">
                  Message
                </label>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="message"
                      placeholder="Enter your message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  )}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0147df] transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;