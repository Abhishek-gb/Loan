import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './Images/homelogo.png';
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{ background: "#002b49" }}>
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-3 text-center">
            <img 
              src={logo} 
              alt="logo" 
              style={{ 
                width: "250px",  /* Increased logo size */
                mixBlendMode: "screen", /* Blending effect */
                filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.6))" /* Light glow effect for clarity */
              }} 
            />
            <p className="mt-2">We provide the best services to help you grow your business and reach new heights.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p><i className="fas fa-map-marker-alt"></i> No.17, 1st Floor, 11th Cross, Peashanthnagar, Bengaluru-560079</p>
            <p><i className="fas fa-phone"></i> +91 9148362211</p>
            <p><i className="fas fa-envelope"></i> rgfinancialservices101@gmail.com</p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4 hover-effect"><FaInstagram /></a>
              <a href="#" className="text-light fs-4 hover-effect"><FaFacebook /></a>
              <a href="#" className="text-light fs-4 hover-effect"><FaXTwitter /></a>
              <a href="#" className="text-light fs-4 hover-effect"><CgMail /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} Abhishek G B. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        .hover-effect {
          transition: transform 0.3s, color 0.3s;
        }
        .hover-effect:hover {
          transform: scale(1.2);
          color: #00aced;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
