import React from 'react';

function SliedSection() {
  return (
    <div>
      {/* <!-- slide scroll start --> */}
      <section>
        <div className="overflow-hidden w-full border-y-2 border-[#34312C] mt-36 backdrop-blur-9xl">
          <div className="flex whitespace-nowrap">
            <marquee className="responsive-marquee">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#edd6b6] font-extralight mx-4 px-6 py-3 text-left-blur">
                +++.....LET'S TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK
                +++.....LET'S TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK
                +++.....LET'S TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK
                +++.....LET'S TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK
                +++.....LET'S TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK
                +++.....LET'S TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK
                +++.....LET'S TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK
                +++.....LET'S TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK
              </span>
            </marquee>
          </div>
        </div>
      </section>
      {/* <!-- slide scroll end --> */}
    </div>
  );
}

export default SliedSection;
