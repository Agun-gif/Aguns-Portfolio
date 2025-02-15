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
        <div className="fixed top-4 flex gap-13 px-2 py-2 w-3xl bg-opacity-50 border border-gray-700 items-center backdrop-blur-3xl z-50">
          <NavLink to="HomePage" className="text-[#EDD6B6] text-lg">
            Agun.
          </NavLink>
          <NavLink to="Service" className="text-[#EDD6B6] text-lg">
            SERVICES
          </NavLink>
          <NavLink to="Work" className="text-[#EDD6B6] text-lg">
            WORK
          </NavLink>
          <NavLink to="Blog" className="text-[#EDD6B6] text-lg">
            BLOG
          </NavLink>
          <NavLink to="Pricing" className="text-[#EDD6B6] text-lg">
            PRICING
          </NavLink>
          <NavLink to="About" className="text-[#EDD6B6] text-lg">
            ABOUT
          </NavLink>
          <NavLink
            to="Contact"
            className="border border-gray-100 bg-[#EDD6B6] text-black px-1 py-1 rounded-sm"
          >
            Let’s TALK
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Button (Three Dot Icon) */}
      <div className="md:hidden fixed top-4 right-4 p-3 rounded-lg cursor-pointer bg-black z-50">
        <button onClick={toggleMenu} className="text-black">
          {/* Three Dot Icon */}
          <div className="flex flex-row gap-x-[330px]">
            <NavLink to="HomePage" className="text-[#EDD6B6] text-xl font-bold">
              Agun.
            </NavLink>
            <div className="flex flex-col gap-1">
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-96 bg-black bg-opacity-80 z-50  items-center"
          onClick={toggleMenu} // Close when clicking outside
        >
          <div
            className="bg-black p-4 shadow-lg w-80 rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="mt-6">
              <NavLink
                to="Service"
                className="text-[#EDD6B6] text-sm block py-2"
                onClick={toggleMenu} // Close menu on click
              >
                SERVICES
              </NavLink>
              <NavLink
                to="Work"
                className="text-[#EDD6B6] text-sm block py-2"
                onClick={toggleMenu}
              >
                WORK
              </NavLink>
              <NavLink
                to="Blog"
                className="text-[#EDD6B6] text-sm block py-2"
                onClick={toggleMenu}
              >
                BLOG
              </NavLink>
              <NavLink
                to="Pricing"
                className="text-[#EDD6B6] text-sm block py-2"
                onClick={toggleMenu}
              >
                PRICING
              </NavLink>
              <NavLink
                to="About"
                className="text-[#EDD6B6] text-sm block py-2"
                onClick={toggleMenu}
              >
                ABOUT
              </NavLink>
              <NavLink
                to="Contact"
                className="border border-gray-100 bg-[#EDD6B6] text-black px-3 py-2 rounded-sm block text-center mt-4"
                onClick={toggleMenu}
              >
                Let’s TALK
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainNavbar;
