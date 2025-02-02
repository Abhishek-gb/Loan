import React from "react";
import back from "./Images/phone.jpg";
import WhatsAppForm from "./WhatsAppForm";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="text-center position-relative">
          <img
            src={back}
            alt="Office Background"
            className="img-fluid rounded mb-4 shadow w-100"
            style={{ maxHeight: "50vh", objectFit: "cover" }}
          />
          <p
            className="position-absolute top-50 start-50 translate-middle text-black fw-bold"
            style={{ fontSize: "2rem", color: "#fff" }}
          >
            Contact Us
          </p>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 g-4">
            <div className="col">
              <div className="card shadow-lg p-4 mb-4">
                <h1 className="card-title text-center text-success mb-4 display-4 fw-bold">
                  Contact Details
                </h1>
                <div className="card-body">
                  <p className="mb-3">
                    <strong>Address:</strong>{" "}
                    <span className="text-muted">
                      No.17, 1st Floor, 11th Cross, Peashanthnagar,
                      Bengaluru-560079
                    </span>
                  </p>
                  <p className="mb-3">
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+919148362211"
                      className="text-decoration-none text-primary"
                    >
                      +91 91483 62211
                    </a>
                  </p>
                  <p className="mb-3">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:rgfinancialservices101@gmail.com"
                      className="text-decoration-none text-primary"
                    >
                      rgfinancialservices101@gmail.com
                    </a>
                  </p>
                  <p className="mb-3">
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://rgfinancialservices.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-primary"
                    >
                      https://rgfinancialservices.vercel.app/
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <WhatsAppForm />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0" style={{ height: "100vh" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d242.99563545275808!2d77.5329596459472!3d12.976318276664266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzM1LjAiTiA3N8KwMzEnNTguOSJF!5e0!3m2!1sen!2sin!4v1738478416553!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
