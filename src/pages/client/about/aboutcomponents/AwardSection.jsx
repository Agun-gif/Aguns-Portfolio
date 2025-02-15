import React from "react";

function AwardSection() {
  const awards = [
    { title: "Awards SOTD", year: "2023" },
    { title: "CSSDA SOTD", year: "2022" },
    { title: "Awards Website of the Month", year: "2021" },
    { title: "CSSDA SOTD", year: "2023" },
    { title: "Awards SOTD", year: "2022" },
    { title: "Awards Website of the Month", year: "2021" },
  ];

  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="p-6 w-full md:w-[50%] md:ml-[500px] border border-[#34312C] bg-stone-800/50 backdrop-blur-xl">
        <p className="text-md text-[#DAC5A7] pl-6 py-6">Awards</p>
        {awards.map((award, index) => (
          <div key={index}>
            <div className="flex flex-wrap justify-between items-center px-6 py-2">
              <p className="text-xl text-[#DAC5A7]">{award.title}</p>
              <p className="text-xl text-[#DAC5A7]">{award.year}</p>
            </div>
            {index !== awards.length - 1 && <div className="border border-gray-700 mx-6"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardSection;
