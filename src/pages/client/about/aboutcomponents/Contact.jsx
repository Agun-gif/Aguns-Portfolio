import React from "react";

function Contact() {
  return (
    <div>
      <div>
        <section>
          <div className ="container max-w-7xl mx-auto mt-20">
            <div className >
              <h1 className ="text-xl text-[#edd6b6] font-extralight text-center mb-6">
                Project in mind?
              </h1>
              <div className ="flex flex-col text-center">
                <span className ="text-7xl text-[#edd6b6] font-extralight italic">
                  Let’s make your
                </span>
                <br />
                <span className ="text-7xl text-[#edd6b6] font-extralight italic mb-6">
                  Website shine
                </span>
                <span className ="text-xl text-[#edd6b6]">
                  Premium web design, development, and SEO
                </span>
                <span className ="text-xl text-[#edd6b6]">
                  services to help your business stand out.
                </span>
              </div>
              <div className ="flex justify-center">
                <a className ="border bg-[#edd6b6] rounded-lg px-4 py-2 mt-6 text-black">
                  <a href="Contact">
                    <button>GET IN TOUCH</button>
                  </a>
                  <i className ="fa-solid fa-arrow-right-long m-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
