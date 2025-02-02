import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [monthlyInterest, setMonthlyInterest] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    if (principal && rate && tenure) {
      const monthlyRate = rate / 12 / 100;
      const months = tenure * 12;
      const emiCalc = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                      (Math.pow(1 + monthlyRate, months) - 1);
      const totalRepay = emiCalc * months;
      const totalInt = totalRepay - principal;
      const monthlyInt = (principal * monthlyRate).toFixed(2);

      setEmi(emiCalc.toFixed(2));
      setTotalRepayment(totalRepay.toFixed(2));
      setTotalInterest(totalInt.toFixed(2));
      setMonthlyInterest(monthlyInt);
    } else {
      setEmi(null);
      setTotalRepayment(null);
      setTotalInterest(null);
      setMonthlyInterest(null);
    }
  };

  const resetFields = () => {
    setPrincipal('');
    setRate('');
    setTenure('');
    setEmi(null);
    setMonthlyInterest(null);
    setTotalRepayment(null);
    setTotalInterest(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
          borderRadius: "20px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          padding: "30px",
          maxWidth: "500px",
          width: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#333",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          EMI Calculator
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500", color: "#555" }}>Loan Amount (₹)</label>
          <input
            type="number"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter loan amount"
            onFocus={(e) => {
              e.target.style.borderColor = "#28a745";
              e.target.style.boxShadow = "0 0 10px rgba(40, 167, 69, 0.5)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#ddd";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500", color: "#555" }}>Annual Interest Rate (%)</label>
          <input
            type="number"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter interest rate"
            onFocus={(e) => {
              e.target.style.borderColor = "#28a745";
              e.target.style.boxShadow = "0 0 10px rgba(40, 167, 69, 0.5)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#ddd";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500", color: "#555" }}>Tenure (Years)</label>
          <input
            type="number"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Enter tenure in years"
            onFocus={(e) => {
              e.target.style.borderColor = "#28a745";
              e.target.style.boxShadow = "0 0 10px rgba(40, 167, 69, 0.5)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#ddd";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        <button
          onClick={calculateEMI}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: "10px",
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0056b3";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "scale(1)";
          }}
        >
          Calculate EMI
        </button>

        <button
          onClick={resetFields}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#6c757d",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#5a6268";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6c757d";
            e.target.style.transform = "scale(1)";
          }}
        >
          Reset
        </button>

        {emi && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#28a745",
              color: "#fff",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h4>Results:</h4>
            <div style={{ marginBottom: "10px" }}>Monthly EMI: ₹{emi}</div>
            <div style={{ marginBottom: "10px" }}>Monthly Interest: ₹{monthlyInterest}</div>
            <div style={{ marginBottom: "10px" }}>Total Repayment: ₹{totalRepayment}</div>
            <div style={{ marginBottom: "10px" }}>Total Interest: ₹{totalInterest}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
