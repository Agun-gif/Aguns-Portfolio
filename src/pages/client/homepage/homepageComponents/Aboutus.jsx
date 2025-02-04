import React from "react";

function Aboutus() {
  return (
    <div className="w-11/12 mx-auto">
      {/* About Section */}
      <section className="pb-32">
        <div className="flex flex-wrap justify-center italic font-thin opacity-60 overflow-hidden text-center">
          <span className="text-3xl md:text-6xl lg:text-7xl my-[10%]">Md Agun Sharker</span>
          <img
            src="https://framerusercontent.com/images/sitQqXXWe18lNYFUMPSXSHcM3A.png?scale-down-to=1024"
            alt="Hero"
            className="w-[80%] md:w-[50%] lg:w-[30%] mx-auto"
          />
          <span className="text-3xl md:text-6xl lg:text-7xl my-[10%]">Md Agun Sharker</span>
        </div>

        {/* Text and Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-center text-center lg:text-left font-extralight overflow-hidden">
          <p className="text-3xl md:text-5xl px-6 py-4">
            A website that leaves,
            <br />
            <span className="italic"> a lasting impression!</span>
          </p>
          <div>
            <p className="text-lg md:text-xl px-6">
              Hi, I'm Md Agun Sharker - a web developer specializing in premium web design,
              development, and SEO services. I'm passionate about creating unique and effective solutions
              for my clients, and I bring a personal touch to every project. Let's work together to bring
              your vision to life!
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 lg:mt-10">
              {/** Social Media Icons */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EDD6B6] bg-opacity-50 p-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Twitter_Logo_2023.png" alt="Twitter" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EDD6B6] bg-opacity-50 p-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EDD6B6] bg-opacity-50 p-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
