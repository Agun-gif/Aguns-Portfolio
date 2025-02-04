import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* <!-- contact us section start --> */}
      <section>
        <div className="container max-w-7xl mx-auto mt-20 px-4">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl text-[#edd6b6] font-extralight mb-6">
              Project in mind?
            </h1>
            <div className="flex flex-col text-center">
              <span className="text-4xl  md:text-9xl text-[#edd6b6] font-extralight italic">
                Let’s make your
              </span>
              <br />
              <span className="text-4xl  md:text-9xl text-[#edd6b6] font-extralight italic mb-6">
                Website shine
              </span>
              <span className="text-sm  md:text-xl text-[#edd6b6]">
                Premium web design, development, and SEO
              </span>
              <span className="text-sm  md:text-xl text-[#edd6b6]">
                services to help your business stand out.
              </span>
            </div>
            <div className="flex justify-center">
              <a
                className="border bg-[#edd6b6] rounded-lg px-4 py-2 mt-6 text-black flex items-center"
                href="contact.html"
              >
                <button className="text-sm sm:text-base">
                  GET IN TOUCH
                </button>
                <i className="fa-solid fa-arrow-right-long m-2 text-sm sm:text-base"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact us section ends --> */}
    </div>
  );
}

export default Contact;
