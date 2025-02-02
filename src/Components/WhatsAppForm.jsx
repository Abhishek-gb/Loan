import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhatsAppForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const whatsappNumber = "9148362211";
    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`, "_blank");
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
          Enquire Now
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "500", color: "#555" }}>Name</label>
            <input
              type="text"
              name="name"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              value={formData.name}
              onChange={handleChange}
              required
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
            <label style={{ fontWeight: "500", color: "#555" }}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              value={formData.phone}
              onChange={handleChange}
              required
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
            <label style={{ fontWeight: "500", color: "#555" }}>Message</label>
            <textarea
              name="message"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                resize: "vertical",
              }}
              value={formData.message}
              onChange={handleChange}
              required
              onFocus={(e) => {
                e.target.style.borderColor = "#28a745";
                e.target.style.boxShadow = "0 0 10px rgba(40, 167, 69, 0.5)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ddd";
                e.target.style.boxShadow = "none";
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#28a745",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#218838";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#28a745";
              e.target.style.transform = "scale(1)";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppForm;