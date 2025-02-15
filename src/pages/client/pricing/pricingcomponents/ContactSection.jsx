import React from "react";

function ContactSection() {
  return (
    <div className="w-full px-6 md:px-0 py-12 md:py-20">
      <section>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-lg sm:text-xl text-[#edd6b6] font-extralight mb-2 sm:mb-4">
            Project in mind?
          </h1>
          <div className="flex flex-col">
            <span className="text-5xl md:text-7xl text-[#edd6b6] font-extralight italic leading-tight">
              Let’s make your
            </span>
            <span className="text-5xl md:text-7xl text-[#edd6b6] font-extralight italic mb-2 sm:mb-4 leading-tight">
              Website shine
            </span>
            <span className="text-sm sm:text-xl text-[#edd6b6]">
              Premium web design, development, and SEO
            </span>
            <span className="text-sm sm:text-xl text-[#edd6b6]">
              services to help your business stand out.
            </span>
          </div>
          <div className="flex justify-center">
            <a
              href="Contact"
              className="w-full sm:w-auto border bg-[#edd6b6] rounded-lg px-6 py-3 mt-6 text-black flex items-center gap-2 hover:bg-[#dac5a7] hover:scale-105 transition-transform duration-200"
            >
              <span>GET IN TOUCH</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
