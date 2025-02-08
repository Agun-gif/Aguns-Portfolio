import React from "react";
import { Link } from "react-router-dom";

function CardStart() {
  return (
    <div>
      {/* <!--Cards Start --> */}
      <section className="container mx-auto py-4 font-[2] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* <!-- Card 1 Start --> */}
          <div className=" p-6 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl z-50">
            <a href="blog-details-1.html">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593339/img/qcsp5l73iake6dq9xfbv.png"
                alt
              />
            </a>
            <p className="text-[#EDD6B6]">Jul 29,2024</p>
            <h3 className="text-[#EDD6B6] text-xl font-semibold mb-4">
              How To Build a Stunning Website With Framer.
            </h3>
            <p className="text-[#EDD6B6] mb-4">
              Learn How To Create An Impressive Website Using Framer With Our
              Step By Step Guide.
            </p>
            <p className="border w-20 border-[#34312C] text-white pl-2 pt-0 py-1 px-4 backdrop-blur-xl">
              Branding
            </p>
          </div>
          {/* <!-- Card 1 End --> */}
          {/* <!-- Card 2 Start --> */}
          <div className=" p-6 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl">
            <a href="blog-details-2.html">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593335/img/qrxumaedagwjuusjasjn.png"
                alt
              />
            </a>
            <p className="text-[#EDD6B6]">Jul 25,2024</p>
            <h3 className="text-[#EDD6B6] text-xl font-semibold mb-4">
              10 Website Elements For Maximum User Eangagment.
            </h3>
            <p className="text-[#EDD6B6] mb-4">
              10 Website Elements To Eangage Users, From Institute Navigation To
              Compelling Visuals.
            </p>
            <p className="border w-20 border-[#34312C] text-white pl-2 pt-0 py-1 px-4 backdrop-blur-xl">
              Branding
            </p>
          </div>
          {/* <!-- Card 2 End --> */}
          {/* <!-- Card 3 Start --> */}
          <div className=" p-6 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl z-50">
            <a href="blog-details-3.html">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593337/img/sntig2catlks8naxiv1k.png"
                alt
              />
            </a>
            <p className="text-[#EDD6B6]">Jul 13,2024</p>
            <h3 className="text-[#EDD6B6] text-xl font-semibold mb-4">
              The Importance Of Contant In Driving Website Traffic.
            </h3>
            <p className="text-[#EDD6B6] mb-4">
              Quality Contant Is King. Learn How To Create Valuable, SEO
              Optimized Contant.
            </p>
            <p className="border w-20 border-[#34312C] text-white pl-2 pt-0 py-1 px-4 backdrop-blur-xl">
              Branding
            </p>
          </div>
          {/* <!-- Card 3 End --> */}
        </div>
      </section>
      <br />
      <section className="container mx-auto py-4 font-[2] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* <!-- Card 4 Start --> */}
          <div className=" p-6 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl z-50">
            <a href="blog-details-4.html">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593335/img/a8sqryvcm09xvh22ecfj.png"
                alt
              />
            </a>
            <p className="text-[#EDD6B6]">Jul 01,2024</p>
            <h3 className="text-[#EDD6B6] text-xl font-semibold mb-4">
              10 Common Web Development Mistakes To Aboid.
            </h3>
            <p className="text-[#EDD6B6] mb-4">
              10 Common Web Development Mistakes And Improve Your Sites
              Functionality And User Experience.
            </p>
            <p className="border w-20 border-[#34312C] text-white pl-2 pt-0 py-1 px-4 backdrop-blur-xl">
              Branding
            </p>
          </div>
          {/* <!-- Card 4 End --> */}
          {/* <!-- Card 5 Start --> */}
          <div className=" p-6 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl z-50">
            <a href="blog-details-5.html">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593338/img/qr9xugrraozgmildxhxp.png"
                alt
              />
            </a>
            <p className="text-[#EDD6B6]">Jun 11,2024</p>
            <Link>
            <h3 className="text-[#EDD6B6] text-xl font-semibold mb-4">
              Why Responsive Web Design Is Critical For Your Buisness.
            </h3>
            </Link>
            
            <p className="text-[#EDD6B6] mb-4">
              Responsive Web Design Ensures Your Site Looks Great And Performs
              Well on All Devices.
            </p>
            <Link>
              <p className="border w-20 border-[#34312C] text-white pl-2 pt-0 py-1 px-4 backdrop-blur-xl">
                Branding
              </p>
            </Link>
          </div>
          {/* <!-- Card 5 End --> */}
          {/* <!-- Card 6 Start --> */}
          <div className=" p-6 border border-[#34312C] bg-stone-800/50 backdrop-blur-xl z-50">
            <Link tof="Blog-Details/blog-details-6.html">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738593339/img/htb6oqz9wa2yaumscfme.png"
                alt
              />
            </Link>
            <p className="text-[#EDD6B6]">Jun 20,2024</p>
            <Link>
              <h3 className="text-[#EDD6B6] text-xl font-semibold mb-4">
                How To Write Contant That Ranks On Google.
              </h3>
            </Link>
            <p className="text-[#EDD6B6] mb-4">
              Optimized Your Website With Expart Tips On Writting Contant That
              Ranks High On Google.
            </p>

            <Link>
              <p className="border w-20 border-[#34312C] text-white pl-2 pt-0 py-1 px-4 backdrop-blur-xl">
                Branding
              </p>
            </Link>
          </div>
          {/* <!-- Card 6 End --> */}
        </div>
      </section>
      {/* <!-- Cards End --> */}
    </div>
  );
}

export default CardStart;
