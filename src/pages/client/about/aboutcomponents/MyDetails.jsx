import React from "react";

function MyDetails() {
  return (
    <div className="flex justify-center px-4 md:px-0 md:ml-[500px]">
      <div className="w-full max-w-5xl border border-[#34312C] bg-stone-800/50 backdrop-blur-xl p-6 sm:p-10">
        {/* Name */}
        <p className="text-md text-[#DAC5A7] pl-2 md:pl-6 pt-4">Md Agun Sharker</p>

        {/* Headline */}
        <p className="text-3xl  md:text-5xl text-[#DAC5A7] pl-2 md:pl-6 mt-2">
          Your Partner in Bringing Your Web Design Vision to Life
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-[#DAC5A7] pl-2 md:pl-6 pr-2 sm:pr-10 pt-4">
          As a freelance web designer and developer, I bring a unique combination 
          of creativity and technical expertise to every project. With a keen eye 
          for design and a passion for delivering user-friendly web experiences, 
          I work closely with clients to understand their needs and bring their 
          vision to life.
        </p>

        <p className="text-sm md:text-base text-[#DAC5A7] pl-2 md:pl-6 pr-2 sm:pr-10 pt-4">
          My approach is rooted in collaboration and communication, and I take 
          pride in my ability to explain technical concepts in simple terms. 
          Whether I'm developing a new website from scratch or optimizing an 
          existing site for search engines, I always strive for excellence in 
          both form and function. With a dedication to quality and a commitment 
          to staying on top of the latest trends and technologies, I am confident 
          in my ability to deliver exceptional results that exceed my clients' 
          expectations.
        </p>

        {/* Image */}
        <div className="mt-6 flex justify-center">
          <img
            className="w-full md:w-[95%]"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593336/img/wpvcserdd91hg9idaelx.png"
            alt="Md Agun Sharker Work"
          />
        </div>
      </div>
    </div>
  );
}

export default MyDetails;
