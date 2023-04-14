// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Services</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Deep Cleaning
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="flex space-x-4 justify-center">
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Cleaning Business. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
