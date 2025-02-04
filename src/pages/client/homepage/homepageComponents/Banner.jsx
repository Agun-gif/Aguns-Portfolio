import React from "react";

function Banner() {
  return (
    <div>
      <div className="flex justify-center px-4">
        <img
          className="w-[200px] md:w-[500px] "
          src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593333/img/pmtvvacx1de6zbdr1qpy.avif"
          alt="Logo"
        />
      </div>
      <div className="text-center my-8 px-4">
        <h1 className="text-4xl md:text-7xl  font-font-raleway text-[#EDD6B6] sm:leading-[1.2]">
          Web Designer <br className="hidden sm:block" /> & Developer
        </h1>
        <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#EDD6B6] mt-4">
          Premium Web Design, Development, and SEO services{" "}
          <br className="hidden sm:block" />
          to help your business stand out.
        </h3>
      </div>
    </div>
  );
}

export default Banner;
