import React from 'react';

function ContactUs() {
  return (
    <div>
      {/* Contact us section start */}
      <section>
        <div className="container max-w-7xl mx-auto mt-20 px-4">
          <div>
            <h1 className="text-xl text-[#edd6b6] font-extralight text-center mb-6">
              Project in mind?
            </h1>
            <div className="flex flex-col text-center">
              <span className="text-5xl md:text-7xl text-[#edd6b6] font-extralight italic">
                Let’s make your
              </span>
              <br />
              <span className="text-5xl md:text-7xl text-[#edd6b6] font-extralight italic mb-6">
                Website shine
              </span>
              <span className="text-lg md:text-xl text-[#edd6b6]">
                Premium web design, development, and SEO
              </span>
              <span className="text-lg md:text-xl text-[#edd6b6]">
                services to help your business stand out.
              </span>
            </div>
            <div className="flex justify-center">
              <a
                href="Contact"
                className="border bg-[#edd6b6] rounded-lg px-6 py-3 mt-6 text-black flex items-center hover:bg-[#d4b38e] transition-all"
              >
                GET IN TOUCH
                <i className="fa-solid fa-arrow-right-long ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact us section ends */}
    </div>
  );
}

export default ContactUs;
