import React from "react";

function Contact() {
  return (
    <div>
      {/* <!-- Contact Form Start --> */}
      <div className="flex flex-wrap items-start justify-center p-4 pt-40 gap-x-12">
        <div className="ml-10 mt-10 md:ml-5 md:mt-5">
          <img
            className="w-[400px]"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1739638166/qkt6j0abfvexduymfqit.png"
            alt="Profile Image"
          />
        </div>
        <div className="p-6 w-full md:w-[70%] lg:w-[50%] h-auto mt-10 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl rounded">
          {/* <!-- Contact Section Heading --> */}
          <p className="text-md text-[#DAC5A7] pl-2">Contact</p>
          <p className="text-3xl md:text-5xl text-[#DAC5A7] pl-2">
            Let's get in touch
          </p>

          {/* <!-- Form --> */}
          <form className="pt-6 space-y-6">
            {/* <!-- Name Input --> */}
            <div>
              <label for="name" className="text-sm text-[#DAC5A7]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 mt-1 bg-transparent text-[#DAC5A7] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#DAC5A7] transition duration-200"
                placeholder="Your Name"
                required
              />
            </div>

            {/* <!-- Email Input --> */}
            <div>
              <label for="email" className="text-sm text-[#DAC5A7]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mt-1 bg-transparent text-[#DAC5A7] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#DAC5A7] transition duration-200"
                placeholder="Your Email"
                required
              />
            </div>

            {/* <!-- Message Input --> */}
            <div>
              <label for="message" className="text-sm text-[#DAC5A7]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 mt-1 bg-transparent text-[#DAC5A7] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#DAC5A7] transition duration-200"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* <!-- Submit Button --> */}
            <div>
              <button
                type="submit"
                className="w-full p-2 mt-1 text-[#23211E] bg-[#DAC5A7] hover:bg-[#50493F] hover:text-[#F4EBEB] rounded focus:outline-none transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Contact Form End --> */}
      <br />
      {/* <!-- Social Link Start --> */}
      <div className="-mt-28">
        <div className="flex ml-[40%] gap-4 ">
          <div className=" h-16 ">
            <div className="w-80 p-4 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl flex items-center gap-2">
              <a href="https://www.instagram.com/md_agun_sharker_shuvo?igsh=NGI0b2lzZm1tajFn">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#f4ebeb"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/md_agun_sharker_shuvo?igsh=NGI0b2lzZm1tajFn"
                className="text-[#EDD6B6] "
              >
                Instagram
              </a>
            </div>
          </div>
          <div className=" h-16 ">
            <div className="w-80 p-5 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl flex items-center gap-2 ">
              <a href="">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#f4ebeb"
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                  />
                </svg>
              </a>
              <a href className="text-[#EDD6B6]">
                Twitter
              </a>
            </div>
          </div>
          <div className=" h-16 ">
            <div className="w-80 p-4 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl flex items-center gap-2 ">
              <a href="https://www.facebook.com/mhmd.aghwn.sharkr.shwfw?mibextid=ZbWKwL">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="#f4ebeb"
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/mhmd.aghwn.sharkr.shwfw?mibextid=ZbWKwL"
                className="text-[#EDD6B6]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="flex ml-[40%] gap-4">
          <div className=" h-16 ">
            <div className="w-80 p-4 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl flex items-center gap-2">
              <a href="https://www.linkedin.com/in/md-agun-sharker-shuvo-b89462301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#f4ebeb"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/md-agun-sharker-shuvo-b89462301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-[#EDD6B6] "
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className=" h-16 ">
            <div className="w-80 p-4 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl flex items-center gap-2 ">
              <a href="https://django-reactworkspace.slack.com/team/U084UPGDXN0">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#f4ebeb"
                    d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z"
                  />
                </svg>
              </a>
              <a
                href="https://django-reactworkspace.slack.com/team/U084UPGDXN0"
                className="text-[#EDD6B6]"
              >
                Slack
              </a>
            </div>
          </div>
          <div className=" h-16 ">
            <div className="w-80 p-[18px] border border-[#34312C] bg-stone-800/50 backdrop-blur-xl flex items-center gap-2 ">
              <a href="https://github.com/shuvoagun">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="#f4ebeb"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
              <a href className="text-[#EDD6B6]">
                Git Hub
              </a>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
