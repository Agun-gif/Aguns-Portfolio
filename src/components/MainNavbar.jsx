import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center">
        <div className="fixed top-4 flex gap-4 px-2 py-2 bg-opacity-50 border border-gray-700 items-center backdrop-blur-3xl">
          <NavLink to="index.html" className="text-[#EDD6B6] text-sm">
            Agun.
          </NavLink>
          <NavLink to="Service" className="text-[#EDD6B6] text-sm">
            SERVICES
          </NavLink>
          <NavLink to="Work" className="text-[#EDD6B6] text-sm">
            WORK
          </NavLink>
          <NavLink to="blog.html" className="text-[#EDD6B6] text-sm">
            BLOG
          </NavLink>
          <NavLink to="pricing.html" className="text-[#EDD6B6] text-sm">
            PRICING
          </NavLink>
          <NavLink to="about.html" className="text-[#EDD6B6] text-sm">
            ABOUT
          </NavLink>
          <NavLink
            to="contact.html"
            className="border border-gray-100 bg-[#EDD6B6] text-black px-1 py-1 rounded-sm"
          >
            Let’s TALK
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Button (Three Dot Icon) */}
      <div className="md:hidden fixed top-4 right-4 p-3 rounded-lg cursor-pointer bg-black">
        <button onClick={toggleMenu} className="text-black">
          {/* Three Dot Icon */}
          <div className="flex flex-col gap-1">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full p-4 shadow-lg z-50  bg-black">
          <div className="flex flex-row justify-between items-center">
            <NavLink to="/" className="text-[#EDD6B6] text-xl font-bold">
              Agun.
            </NavLink>
            <NavLink
              to="/contact"
              className="border border-gray-100 bg-[#EDD6B6] text-black px-3 py-2 rounded-sm"
              onClick={toggleMenu}
            >
              Let’s TALK
            </NavLink>
          </div>
          <div className="mt-4">
            <NavLink to="services.html" className="text-[#EDD6B6] text-sm block py-2">
              SERVICES
            </NavLink>
            <NavLink to="work.html" className="text-[#EDD6B6] text-sm block py-2">
              WORK
            </NavLink>
            <NavLink to="blog.html" className="text-[#EDD6B6] text-sm block py-2">
              BLOG
            </NavLink>
            <NavLink to="pricing.html" className="text-[#EDD6B6] text-sm block py-2">
              PRICING
            </NavLink>
            <NavLink to="about.html" className="text-[#EDD6B6] text-sm block py-2">
              ABOUT
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainNavbar;
