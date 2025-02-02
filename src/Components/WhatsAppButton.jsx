import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const WhatsAppButton = () => {
  const phoneNumber = "919148362211"; 
  const message = encodeURIComponent("Hello, I am interested in your service.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="container-fluid bg-light py-3 text-center">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success d-flex align-items-center justify-content-center gap-2 px-4"
      >
        <i className="bi bi-whatsapp fs-5"></i> Contact Us on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppButton;
