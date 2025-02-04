import React from 'react';

function Footer() {
  return (
    <div>
 {/* <!-- footer section start --> */}
        <footer className ="text-[#edd6b6] py-10  mt-8">
          <div className ="container max-w-7xl mx-auto px-4">
            <div className ="flex flex-wrap justify-between items-center">
              {/* <!-- Logo --> */}
              <div className ="mb-4 md:mb-0">
                <h1 className ="text-2xl text-[#edd6b6] font-bold">Agun.</h1>
              </div>

              {/* <!-- Social Media Icons --> */}
              <div className ="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="https://www.instagram.com/md_agun_sharker_shuvo?igsh=NGI0b2lzZm1tajFn"
                  aria-label="Instagram" className ="hover:text-gray-400">
                  <i className ="fab fa-instagram text-3xl"></i>
                </a>
                <a href="#" aria-label="Twitter" className ="hover:text-gray-400">
                  <i className ="fab fa-twitter text-3xl"></i>
                </a>
                <a href="#" aria-label="Dribbble" className ="hover:text-gray-400">
                  <i className ="fab fa-dribbble text-3xl"></i>
                </a>
                <a href="#" aria-label="Behance" className ="hover:text-gray-400">
                  <i className ="fab fa-behance text-3xl"></i>
                </a>
              </div>
            </div>

            {/* <!-- Navigation Links --> */}
            <div className ="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div>
                <h3 className ="text-lg text-[#edd6b6] font-semibold mb-2">Pages</h3>
                <ul className ="space-y-2">
                  <li><a href="index.html"
                      className ="text-[#edd6b6] hover:text-gray-400">Home</a></li>
                  <li><a href="services.html"
                      className ="text-[#edd6b6] hover:text-gray-400">Services</a></li>
                  <li><a href="about.html"
                      className ="text-[#edd6b6] hover:text-gray-400">About</a></li>
                  <li><a href="pages.html"
                      className ="text-[#edd6b6] hover:text-gray-400">Pricing</a></li>
                  <li><a href="contact.html"
                      className ="text-[#edd6b6] hover:text-gray-400">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className ="text-lg text-[#edd6b6] font-semibold mb-2">More
                  Templates</h3>
                <ul className ="space-y-2">
                  <li><a href="#"
                      className ="text-[#edd6b6] hover:text-gray-400">CMS</a></li>
                  <li><a href="work.html"
                      className ="text-[#edd6b6] hover:text-gray-400">Work</a></li>
                  <li><a href="work-single.html"
                      className ="text-[#edd6b6] hover:text-gray-400">Work
                      Single</a></li>
                  <li><a href="blog.html"
                      className ="text-[#edd6b6] hover:text-gray-400">Blog</a></li>
                  <li><a href="blog-details.html"
                      className ="text-[#edd6b6] hover:text-gray-400">Blog
                      Single</a></li>
                </ul>
              </div>
              <div>
                <h3 className ="text-lg text-[#edd6b6] font-semibold mb-2">Utility
                  Pages</h3>
                <ul className ="space-y-2">
                  <li><a href="#"
                      className ="text-[#edd6b6] hover:text-gray-400">Styleguide</a></li>
                  <li><a href="#" className ="text-[#edd6b6] hover:text-gray-400">404
                      Error Page</a></li>
                  <li><a href="#"
                      className ="text-[#edd6b6] hover:text-gray-400">Licensing</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className ="text-center text-[#edd6b6] mt-8 text-sm text-white">
            © 2024 Agun. All rights reserved.
          </div>
        </footer>
        {/* <!-- footer section end --> */}
    </div>
  );
}

export default Footer;
