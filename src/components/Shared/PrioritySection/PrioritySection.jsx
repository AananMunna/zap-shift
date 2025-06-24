import React from 'react';
import location from '../../../assets/location-merchant.png'

const PrioritySection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 font-sans">
      <div className="relative overflow-hidden w-full max-w-6xl bg-gradient-to-b from-[#06202C] via-[#0B2E3E] to-[#06202C]  backdrop-blur-lg rounded-3xl px-6 py-12 sm:px-12 flex flex-col lg:flex-row items-center justify-between shadow-2xl border border-white/10">

        {/* Abstract Lights */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-lime-400/10 blur-2xl rounded-full"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cpath%20d%3D%22M0%2C50%20C20%2C20%2080%2C80%20100%2C50%20L100%2C100%20L0%2C100%20Z%22%20fill%3D%22none%22%20stroke%3D%22rgba%28255%2C255%2C255%2C0.04%29%22%20stroke-width%3D%220.5%22%2F%3E%3C/svg%3E')] bg-no-repeat bg-cover opacity-60"></div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex-1 lg:max-w-xl text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold leading-snug md:leading-tight mb-6">
  Merchant & Customer Satisfaction is <span className="text-[#B7E366]">Our First Priority</span>
</h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We offer the lowest delivery charge with the highest value. 100% product safety and countrywide delivery – fast, reliable, and on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
  <button className="px-5 py-2.5 rounded-full bg-[#B7E366] text-[#0B2E3E] font-medium text-sm sm:text-base hover:scale-[1.03] transition-all duration-300 shadow-md hover:bg-lime-400">
    Become a Merchant
  </button>
  <button className="px-5 py-2.5 rounded-full border border-[#B7E366] text-[#B7E366] hover:text-[#0B2E3E] hover:bg-[#B7E366] font-medium text-sm sm:text-base hover:scale-[1.03] transition-all duration-300 shadow-md">
    Earn with Profast Courier
  </button>
</div>

        </div>

        {/* Right SVG Illustration */}
        <div className="relative z-10 flex-1 flex justify-center items-center lg:pl-12">
          <img src={location} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PrioritySection;
