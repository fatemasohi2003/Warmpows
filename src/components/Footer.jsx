import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-20">
      <div className="footer p-10 max-w-7xl mx-auto ">
  <div className="flex flex-col items-center text-center space-y-2">
  <div className="flex items-center gap-2">
    <FaPaw className="text-5xl text-orange-500" />
    <p className="font-bold text-xl">
      WarmPaws
      <br />
      Pet Care in Winter Since 2020
    </p>
  </div>
  <p>Keeping your pets warm and happy!</p>
</div>

        <div className="grid grid-cols-3 gap-6">
        <nav >
          <h6 className="footer-title">Services</h6>
          <a href="#" className="link link-hover">Winter Grooming</a>
          <a href="#" className="link link-hover">Pet Clothing</a>
          <a href="#" className="link link-hover">Health Checkup</a>
          <a href="#" className="link link-hover">Nutrition Planning</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="#" className="link link-hover">About us</a>
          <Link to="/services" className="link link-hover">Services</Link>
          <a href="#" className="link link-hover">Contact</a>
          <a href="#" className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a href="#" className="link link-hover">Terms of use</a>
          <a href="#" className="link link-hover">Privacy policy</a>
          <a href="#" className="link link-hover">Cookie policy</a>
        </nav>
        </div>
      </div>

      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            WarmPaws Ltd.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
