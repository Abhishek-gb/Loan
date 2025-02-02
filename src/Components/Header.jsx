import React, { useState } from "react";
import logo from "./Images/homelogo.png";
import { Link } from "react-router-dom";
import WhatsAppForm from "./WhatsAppForm";

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const handleEnquireClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#fff" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Home Logo" height="60" width='150' />
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
          <span className="navbar-toggler-icon" style={{ backgroundColor: "#002b49" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "#002b49", fontWeight: "bold" }}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus" style={{ color: "#002b49", fontWeight: "bold" }}>ABOUT US</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#002b49", fontWeight: "bold" }}
              >
                LOAN SERVICES
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/loanservices?loanType=Home Loan" style={{ color: "#002b49" }}>Home Loans</Link></li>
                <li><Link className="dropdown-item" to="/loanservices?loanType=Personal Loan" style={{ color: "#002b49" }}>Personal Loans</Link></li>
                <li><Link className="dropdown-item" to="/loanservices?loanType=Business Loan" style={{ color: "#002b49" }}>Business Loans</Link></li>
                <li><Link className="dropdown-item" to="/loanservices?loanType=Doctor's Loan" style={{ color: "#002b49" }}>Doctor's Loans</Link></li>
                <li><Link className="dropdown-item" to="/loanservices?loanType=Car Loan" style={{ color: "#002b49" }}>Car Loans</Link></li>
                <li><Link className="dropdown-item" to="/loanservices?loanType=Loan Against Property" style={{ color: "#002b49" }}>Loan Against Property</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: "#002b49", fontWeight: "bold" }}>CONTACT US</Link>
            </li>
          </ul>
          <button className="btn btn-warning text-dark fw-bold ms-3" onClick={handleEnquireClick}>ENQUIRE NOW</button>
        </div>
      </div>

      {showForm && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{ backgroundColor: "#fff" }}>
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: "#002b49" }}>Enquiry Form</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseForm}></button>
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

export default Header;
