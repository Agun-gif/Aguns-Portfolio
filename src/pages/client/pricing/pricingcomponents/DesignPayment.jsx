import React from "react";

function DesignPayment() {
  return (
    <div className="px-4 md:px-62 py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-80 items-center md:items-start">
        {/* Left Section - Title */}
        <div className="text-center md:text-left">
          <p className="text-[#DAC5A7] text-lg sm:text-2xl">Faq</p>
          <p className="text-[#DAC5A7] text-5xl sm:text-8xl font-extralight leading-tight">Common</p>
          <p className="text-[#DAC5A7] text-5xl sm:text-8xl font-extralight leading-tight">Questions</p>
        </div>

        {/* Right Section - FAQ Cards */}
        <div className="w-full max-w-full md:max-w-[700px] space-y-6">
          {[
            {
              question: "What is the typical turnaround time for a website project?",
              answer:
                "The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.",
            },
            {
              question: "Can you help with website maintenance and updates after the project is completed?",
              answer:
                "Yes, we offer ongoing website maintenance and support services for our clients. Whether you need to update content, fix issues, or add new features, we're here to help.",
            },
            {
              question: "How do you ensure that my website will be optimized for search engines?",
              answer:
                "We conduct extensive research to identify the best keywords and strategies for improving search engine rankings. We also utilize best practices for on-page optimization, including title tags, meta descriptions, and content optimization.",
            },
            {
              question: "What is your process for website design and development?",
              answer:
                "Our process typically involves a discovery call to discuss the client's needs and goals, followed by research and strategy development. From there, we move into the design and development phase, where we create wireframes, prototypes, and design concepts before finalizing the website. We then perform quality assurance and testing before launching the website.",
            },
          ].map((item, index) => (
            <div key={index} className="border border-gray-500 rounded-md p-4 sm:p-6 text-white shadow-md bg-opacity-50 backdrop-blur-3xl">
              <h3 className="text-base sm:text-lg font-semibold text-[#DAC5A7] mb-2">{item.question}</h3>
              <p className="text-sm sm:text-base text-[#DAC5A7]">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignPayment;
