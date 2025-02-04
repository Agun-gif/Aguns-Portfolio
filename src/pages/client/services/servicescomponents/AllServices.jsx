import React from "react";

function AllServices() {
  return (
    <div className="text-[#DAC5A7]">
      {/* Services Header */}
      <div className="flex justify-center py-6 gap-2">
        <svg
          className="w-6 h-6 text-[#EDD6B6] border border-white rounded-full hover:bg-[#EDD6B6] hover:bg-opacity-30 transition-colors"
          aria-hidden="true"
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
        <p className="text-lg font-light">My Services</p>
      </div>

      {/* Services Image */}
      <div className="px-4 sm:px-10 md:px-20 lg:px-40">
        <img
          className="w-full"
          decoding="async"
          loading="lazy"
          src="https://framerusercontent.com/images/FZwDXEWoUflJOZC3kxgyKvwJw.png?scale-down-to=1024"
          alt="Services"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center py-12">
        {[
          { label: "Clients", value: "150+" },
          { label: "Projects", value: "300+" },
          { label: "Happy Clients", value: "100%" },
          { label: "Followers", value: "200+" },
        ].map((stat, index) => (
          <div key={index}>
            <span className="text-lg">{stat.label}</span>
            <br />
            <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Service Sections */}
      {[
        {
          title: "Web Design",
          subtitle: "Transforming Your Ideas into Reality",
          img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1738593333/img/t0rje0zpvzdu9cxb9k7g.jpg",
          details: [
            { heading: "Concept", description: "Understanding business needs to develop a unique website concept." },
            { heading: "UX / UI Design", description: "Creating user-friendly, visually appealing designs that engage your audience." },
            { heading: "Prototype", description: "Interactive prototypes to test website functionality before launch." },
          ],
        },
        {
          title: "Development",
          subtitle: "Developing High-Performance Websites & Web Apps",
          img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1738593340/img/gliuveoqonu2cfi2bl1q.jpg",
          details: [
            { heading: "Framer", description: "Bringing web apps to life with smooth animations & interactions." },
            { heading: "CMS Integration", description: "Seamless content management system integration for efficiency." },
            { heading: "Web Design System", description: "Ensuring design consistency with a structured web design system." },
          ],
        },
        {
          title: "SEO & Content",
          subtitle: "Boosting Your Website's Organic Search Traffic",
          img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1738593341/img/pyniqwd5kgyeq3tivstu.jpg",
          details: [
            { heading: "Research", description: "Thorough keyword & SEO research for optimal website ranking." },
            { heading: "SEO Ranking", description: "Optimized strategies to increase traffic & boost online presence." },
            { heading: "SEO Support", description: "Ongoing updates to stay ahead with the latest SEO trends." },
          ],
        },
      ].map((service, index) => (
        <div
          key={index}
          className="p-6 w-[95%] md:w-[80%] lg:w-[70%] mx-auto border border-[#34312C] bg-stone-800/50 backdrop-blur-xl mt-8"
        >
          <p className="text-md pl-4 md:pl-6">{service.title}</p>
          <p className="text-2xl md:text-4xl pl-4 md:pl-6">{service.subtitle}</p>
          <img src={service.img} alt={service.title} className="w-[95%] mx-auto mt-4" />

          {service.details.map((detail, i) => (
            <div key={i} className="py-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-10 px-4 md:px-6">
                <div className="text-lg font-semibold">{detail.heading}</div>
                <div className="text-sm">{detail.description}</div>
              </div>
              {i < service.details.length - 1 && <div className="border border-gray-700 my-4" />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AllServices;
