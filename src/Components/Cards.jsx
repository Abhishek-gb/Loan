import React from 'react';
import { Link } from 'react-router-dom'; 
import car from './Images/car.jpg';
import business from './Images/business.jpg';
import doctor from './Images/doctor.jpg';
import home from './Images/home.jpg';
import personal from './Images/personal.jpg';
import sold from './Images/sold.jpg';

const Cards = () => {
  return (
    <>
      {/* Custom Styles */}
      <style>{`
        .card-link {
          color: red;
          text-decoration: none;
        }

        .card-link:hover {
          text-decoration: underline;
        }

        .card-title:hover {
          color: darkblue;
        }
      `}</style>

      {/* Heading with orange underline */}
      <h1 className="text-center mb-4 position-relative p-5 m-5" style={{ color: '#00243e' }}>
        Loan Services
        <span className="position-absolute bottom-0 start-50 translate-middle-x bg-warning" style={{ height: '4px', width: '100px' }}></span>
      </h1>

      {/* Subheading */}
      <p className="text-center mb-5 fs-5 text-muted">We provide you with legible loan services. Our services include:</p>

      {/* Cards Section */}
      <div className="container">
        <div className="row">
          {/* Card 1 - Home Loan */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={home} className="card-img-top" alt="Home Loan" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Home Loan</h5>
                <p className="card-text flex-grow-1">A home loan or mortgage loan will be applied by a person who wants to purchase a home.</p>
                <Link to="/loanservices?loanType=Home Loan" className="card-link mt-auto align-self-start">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Card 2 - Personal Loan */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={personal} className="card-img-top" alt="Personal Loan" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Personal Loan</h5>
                <p className="card-text flex-grow-1">A personal loan is an amount of money that is borrowed by an individual.</p>
                <Link to="/loanservices?loanType=Personal Loan" className="card-link mt-auto align-self-start">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Card 3 - Business Loan */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={business} className="card-img-top" alt="Business Loan" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Business Loan</h5>
                <p className="card-text flex-grow-1">Do you need money to improve your business? We provide business loans to help you expand.</p>
                <Link to="/loanservices?loanType=Business Loan" className="card-link mt-auto align-self-start">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Card 4 - Doctor Loan */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={doctor} className="card-img-top" alt="Doctor Loan" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Doctor Loan</h5>
                <p className="card-text flex-grow-1">Doctor's loans include personal, business, and property loans designed for medical professionals.</p>
                <Link to="/loanservices?loanType=Doctor's Loan" className="card-link mt-auto align-self-start">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Card 5 - Car Loan */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={car} className="card-img-top" alt="Car Loan" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Car Loan</h5>
                <p className="card-text flex-grow-1">We provide the best service for your car loan. You can pay it back through installments.</p>
                <Link to="/loanservices?loanType=Car Loan" className="card-link mt-auto align-self-start">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Card 6 - Loan Against Property */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={sold} className="card-img-top" alt="Loan Against Property" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Loan Against Property</h5>
                <p className="card-text flex-grow-1">A loan against property is a type of loan where your property is used as collateral.</p>
                <Link to="/loanservices?loanType=Loan Against Property" className="card-link mt-auto align-self-start">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards; 
