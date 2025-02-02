import React, { useState } from "react";
import logo from "./Images/homelogo.png";
import { Link } from "react-router-dom";
import WhatsAppForm from "./WhatsAppForm";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleEnquireClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
    setDropdownOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow"
      style={{ backgroundColor: "#fff", zIndex: 1030 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img src={logo} alt="Home Logo" height="60" width="150" />
        </Link>
        <button
          className="navbar-toggler border"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundColor: "#002b49" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/" onClick={closeNavbar}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/aboutus" onClick={closeNavbar}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-bold text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={dropdownOpen}
                onClick={toggleDropdown}
              >
                LOAN SERVICES
              </a>
              <ul
                className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
                style={{ position: "absolute", top: "100%", left: 0, zIndex: 1050 }}
              >
                {["Home Loan", "Personal Loan", "Business Loan", "Doctor's Loan", "Car Loan", "Loan Against Property"].map((loanType) => (
                  <li key={loanType}>
                    <Link
                      className="dropdown-item text-dark"
                      to={`/loanservices?loanType=${encodeURIComponent(loanType)}`}
                      onClick={closeNavbar}
                    >
                      {loanType}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/contact" onClick={closeNavbar}>
                CONTACT US
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-warning text-dark fw-bold ms-3"
            onClick={() => {
              handleEnquireClick();
              closeNavbar();
            }}
          >
            ENQUIRE NOW
          </button>
        </div>
      </div>

      {showForm && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content bg-white">
              <div className="modal-header">
                <h5 className="modal-title text-dark">Enquiry Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseForm}
                ></button>
              </div>
              <div className="modal-body">
                <WhatsAppForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;git 