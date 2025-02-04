import React from "react";

function WorkDetails3() {
  return (
    <div>
      {/* Hero Section Start */}
      <div className="mt-20 text-center">
        <p className="text-[#DAC5A7] text-4xl sm:text-5xl md:text-9xl">Solar</p>
        <p className="text-[#DAC5A7] text-base sm:text-lg md:text-2xl mt-4">
          Modern and visually appealing website that
        </p>
        <p className="text-[#DAC5A7] text-base sm:text-lg md:text-2xl mt-4">
          reflected the client's brand.
        </p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-5 py-4">
        {/* Client, Timeline, Services, Website */}
        {[
          { label: "Client", value: "Atik Islam" },
          { label: "Timeline", value: "2 Weeks" },
          { label: "Services", value: "Web Design" },
          { label: "Website", value: "Agun.Io" },
        ].map((item, index) => (
          <div
            className="h-16 w-60 sm:w-80 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl flex justify-center items-center"
            key={index}
          >
            <div>
              <span className="text-[#DAC5A7] text-sm sm:text-lg">
                {item.label}
              </span>
              <br />
              <span className="text-[#DAC5A7] text-base sm:text-xl">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* More Details */}
      <div className="flex justify-center items-center py-6 gap-2">
        <svg
          className="w-6 h-6 text-[#EDD6B6] border border-white rounded-full hover:bg-[#EDD6B6] hover:bg-opacity-30 transition-colors"
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
        <p className="text-[#EDD6B6] text-base sm:text-lg font-light">
          More Details
        </p>
      </div>
      {/* Hero Section End */}
      {/* Client Work start */}
      <div className="flex justify-center py-4">
        <img
          src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593340/img/gliuveoqonu2cfi2bl1q.jpg"
          alt="Work Image"
          className="w-full h-auto rounded-lg px-12"
        />
      </div>
      <div className="container mx-auto max-w-full md:max-w-[1400px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xl md:text-3xl text-[#EDD6B6]">CLIENT</p>
            <p className="text-2xl md:text-6xl text-[#EDD6B6]">
              Concept, Design, and <br /> Development. All-in-one.
            </p>
          </div>
          <div className="w-full md:w-11/12 py-4">
            <div className="py-10 px-8 border-[#34312C] bg-stone-800/50 backdrop-blur-xl mb-6">
              <h3 className="text-lg sm:text-xl text-[#EDD6B6] font-semibold mb-4">
                Challenge
              </h3>
              <p className="text-[#EDD6B6] mb-4">
                Our client was struggling to attract and retain customers due to
                an outdated and non-responsive website that didn't align with
                their brand identity.
              </p>
            </div>
            <div className="py-10 px-8 border-[#34312C] bg-stone-800/50 backdrop-blur-xl mb-6">
              <h3 className="text-lg sm:text-xl text-[#EDD6B6] font-semibold mb-4">
                Goal
              </h3>
              <p className="text-[#EDD6B6] mb-4">
                Our goal was to create a modern and visually appealing website
                that reflected the client's brand and delivered a seamless user
                experience. The website needed to be responsive, easy to
                navigate, and optimized for search engines.
              </p>
            </div>
            <div className="py-10 px-8 border-[#34312C] bg-stone-800/50 backdrop-blur-xl mb-6">
              <h3 className="text-lg sm:text-xl text-[#EDD6B6] font-semibold mb-4">
                Result
              </h3>
              <p className="text-[#EDD6B6] mb-4">
                Our team developed a custom website design that was not only
                visually stunning but also user-friendly and optimized for
                search engines. The client has seen a significant increase in
                organic traffic and customer engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Client Work End */}

      {/* Carousel start */}
      <div className="bg-white/10 border border-gray-700 py-2">
        <section>
          <div className="overflow-hidden w-full">
            <div className="flex whitespace-nowrap">
              <marquee>
                <span className="text-xl text-[#edd6b6] font-extralight mx-4 px-6 py-3">
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                  +++.....LET'S TALK......+++.....LET'S TALK.....
                </span>
              </marquee>
            </div>
          </div>
        </section>
      </div>
      {/* Carousel end */}

      {/* Contact us section start */}
      <section>
        <div className="container max-w-7xl mx-auto mt-20">
          <h1 className="text-xl text-[#edd6b6] font-extralight text-center mb-6">
            Project in mind?
          </h1>
          <div className="flex flex-col text-center">
            <span className="text-5xl md:text-9xl text-[#edd6b6] font-extralight italic">
              Let’s make your
            </span>
            <br />
            <span className="text-5xl md:text-9xl text-[#edd6b6] font-extralight italic mb-6">
              Website shine
            </span>
            <span className="text-xl text-[#edd6b6]">
              Premium web design, development, and SEO
            </span>
            <span className="text-xl text-[#edd6b6]">
              services to help your business stand out.
            </span>
          </div>
          <div className="flex justify-center mt-6">
            <a
              className="border bg-[#edd6b6] rounded-lg px-4 py-2 text-black"
              href="contact.html"
            >
              <button>GET IN TOUCH</button>
              <i className="fa-solid fa-arrow-right-long m-2"></i>
            </a>
          </div>
        </div>
      </section>
      {/* Contact us section ends */}
    </div>
  );
}

export default WorkDetails3;
