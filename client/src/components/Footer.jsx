import React from 'react';
import {  FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-gray-950  via-violet-950  to-blue-950 text-blue-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-5" >
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-yellow-100 text-lg font-bold font-display">Brand Management Tool</h3>
            <p className="text-sm font-light">
              Empowering brands to achieve their full potential through innovative management solutions.
            </p>
          </div>

       

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="text-yellow-100 text-lg font-bold font-display">Contact Us</h4>
            <ul className="space-y-2 text-sm font-light">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg text-blue-400" />
                dayalbhardwaj10@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-lg text-blue-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MdLocationOn className="text-lg text-blue-400" />
                Delhi, India
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-yellow-100 text-lg font-bold font-display">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/bhardWAman" 
                className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="Twitter"
              >
                <FaXTwitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/amanbhardwaj0tw" 
                className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a 
                href="mailto:dayalbhardwaj10@gmail.com" 
                className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full hover:scale-110 duration-300"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail size={20} />
              </a>
              <a 
                href="https://www.instagram.com/amanbhardwaj0tw" 
                className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center font-light">
          <p>Aman Bhardwaj &copy; {new Date().getFullYear()} Brand Management Tool. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
