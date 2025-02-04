import React from 'react';

function SelectedWork() {
  const images = [
    { src: "https://res.cloudinary.com/da43e0ikj/image/upload/v1738593333/img/t0rje0zpvzdu9cxb9k7g.jpg", alt: "An illustrative graphic 1" },
    { src: "https://res.cloudinary.com/da43e0ikj/image/upload/v1738593341/img/tyv6cinqsginfupccakq.jpg", alt: "An illustrative graphic 2" },
    { src: "https://res.cloudinary.com/da43e0ikj/image/upload/v1738593341/img/pyniqwd5kgyeq3tivstu.jpg", alt: "An illustrative graphic 3" },
    { src: "https://res.cloudinary.com/da43e0ikj/image/upload/v1738593333/img/wh7hvlpoouscshqpicvy.jpg", alt: "An illustrative graphic 4" },
  ];

  return (
    <div className="bg-black py-10">
      {/* Selected Work Header */}
      <div className="text-center">
        <div className="w-24 h-1 bg-[#EDD6B6] mx-auto"></div>
        <span className="text-[#DAC5A7] text-3xl font-thin mt-4 inline-block">Selected Work</span>
      </div>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-8 py-8 px-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-[320px] sm:w-[450px] md:w-[600px] lg:w-[650px] h-auto rounded-lg border border-gray-800 shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default SelectedWork;
