import React from "react";

function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-16">
      {/* Image */}
      <div className="w-full bg-black flex justify-center md:-ml-[800px]">
        <img
          className="w-60 sm:w-80 md:w-[500px] object-contain"
          decoding="async"
          src="https://res.cloudinary.com/da43e0ikj/image/upload/v1739638166/qkt6j0abfvexduymfqit.png"
          alt="Md Agun Sharker"
        />
      </div>

      {/* Name */}
      <div className="mt-[30px] md:mt-[-500px]  ml-4 md:ml-80">
        <p className="text-[#DAC5A7] text-3xl sm:text-5xl md:text-9xl font-bold">
          Md Agun
          <br />
          Sharker
        </p>
      </div>

      {/* Description */}
      <div className="mt-4 px-4 sm:px-8 md:px-16 ml-4 md:ml-80">
        <p className="text-[#DAC5A7] text-base sm:text-lg md:text-xl lg:text-2xl font-light">
          Delivering Premium Web Design and Development
          <br />
          Services to Boost Your Online Presence.
        </p>
      </div>

      {/* About Me Link */}
      <div className="flex items-center  gap-4 mt-6 ml-4 md:-ml-20">
        <svg
          className="w-5 sm:w-6 h-5 sm:h-6 text-[#EDD6B6] border border-white rounded-full hover:bg-[#EDD6B6] hover:bg-opacity-30 transition-colors"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19V5m0 14-4-4m4 4 4-4"
          />
        </svg>
        <p className="text-[#EDD6B6] text-base sm:text-lg font-light">About Me</p>
      </div>
    </div>
  );
}

export default HeroSection;
