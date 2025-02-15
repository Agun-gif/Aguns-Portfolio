import React from "react";

function CardSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 px-10 md:px-32 py-10">
      {/* Card Component */}
      {[
        { title: "Lite", price: "$3900" },
        { title: "Premium", price: "$6900" },
        { title: "Gold", price: "$9900" },
      ].map((card, index) => (
        <div
          key={index}
          className="p-6 w-full md:w-[700px] h-auto border border-[#34312C] bg-stone-800/50 backdrop-blur-xl rounded-lg shadow-lg"
        >
          <p className="text-[#EDD6B6] text-lg font-semibold">{card.title}</p>
          <h3 className="text-[#EDD6B6] text-xl font-bold mb-4">{card.price}</h3>
          <p className="text-[#EDD6B6] mb-4 text-sm md:text-base">
            Affordable web design package with a custom design, CMS integration,
            and responsive design for small businesses and startups.
          </p>
          <div className="space-y-2">
            {["Concept", "Strategy", "Webdesign", "Prototype"].map((feature, idx) => (
              <div key={idx}>
                <p className="text-[#DAC5A7]">{feature}</p>
                <div className="border border-[#34312C]"></div>
              </div>
            ))}
          </div>
          <div className="pt-6">
            <a href="contact.html">
              <button
                type="submit"
                className="w-full p-2 text-[#23211E] bg-[#DAC5A7] hover:bg-[#50493F] hover:text-[#F4EBEB] rounded focus:outline-none transition duration-200"
              >
                Get Started
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardSection;
