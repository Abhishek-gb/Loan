import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import loanData from './loanData'; 
import './loan.css';
import WhatsAppForm from "./WhatsAppForm";
import EMICalculator from "./EMICalculator";

const LoanServices = () => {
  const location = useLocation();
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const loanType = queryParams.get('loanType');

    if (loanType) {
      const loan = loanData.find(loan => loan.type === loanType);
      setSelectedLoan(loan);
    }

    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="loan-services-container">
        <h2 className="text-center mb-4">Loan Services</h2>
        
        {selectedLoan ? (
          <div className="loan-details">
            <div className="loan-info">
              <h3>{selectedLoan.type}</h3>
              <p>{selectedLoan.description}</p>
              {selectedLoan.benefits && (
                <ul>
                  {selectedLoan.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              )}
              {selectedLoan.loanTypes && (
                <div>
                  <h4>Loan Types:</h4>
                  <ul>
                    {selectedLoan.loanTypes.map((loanType, index) => (
                      <li key={index}>
                        <strong>{loanType.name}</strong>: {loanType.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="loan-image">
              <img src={selectedLoan.image} alt={selectedLoan.type} />
            </div>
          </div>
        ) : (
          <p>Please select a loan type from the menu.</p>
        )}
      </div>

      <div className="container text-center">
        <div className="row g-2">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="p-3">
              <WhatsAppForm />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="p-3">
              <EMICalculator />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanServices;
