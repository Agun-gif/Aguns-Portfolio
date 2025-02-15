import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center max-w-[90%] mx-auto mt-16 md:mt-32">
      <p className="text-4xl md:text-6xl text-[#DAC5A7] font-semibold">
        Experience the Power of
      </p>
      <p className="text-3xl  md:text-5xl text-[#DAC5A7] mt-2">
        Premium Web Design
      </p>
      <p className="text-sm  md:text-lg text-[#DAC5A7] mt-2">
        Choose a package that suits your needs and budget.
      </p>
      <p className="text-xs sm:text-sm md:text-base text-[#DAC5A7]">
        Transparent pricing with no hidden fees.
      </p>
    </div>
  );
}

export default HeroSection;
