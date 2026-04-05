import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white px-5 pt-10 mt-10">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">DigiTools</h1>
          <p className="opacity-80 text-[15px] mb-4">
            Premium digital tools for creators, <br />
            professionals, and businesses. Work smarter <br />
            with our suite of powerful tools.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h2 className="font-bold text-2xl mb-4">Product</h2>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Features</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Pricing</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Templates</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Integrations</p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="font-bold text-2xl mb-4">Company</h2>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">About</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Blog</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Careers</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Press</p>
        </div>

        {/* Resources Links */}
        <div>
          <h2 className="font-bold text-2xl mb-4">Resources</h2>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Documentation</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Help Center</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Community</p>
          <p className="opacity-80 text-[15px] mb-2 hover:text-purple-400 cursor-pointer">Contact</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-[14px] opacity-80 gap-3 md:gap-0 mb-3">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-purple-400">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400">Terms of Service</a>
          <a href="#" className="hover:text-purple-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;