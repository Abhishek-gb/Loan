import React from "react";
import back from "./Images/about.jpg";
import phone from "./Images/phone.jpg";
import { BsBag } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AboutUs = () => {
  // Inline styles
  const styles = {
    statsContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "4rem",
    },
    statItem: {
      textAlign: "center",
      flex: 1,
    },
    statIcon: {
      fontSize: "3rem",
      color: "#007bff",
    },
    statNumber: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#333",
    },
    statLabel: {
      fontSize: "1.2rem",
      color: "#777",
    },
  };

  return (
    <>
      <div className="container-fluid my-5">
        <div className="text-center position-relative">
          <img
            src={phone}
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
      </div>

      <div className="container text-center">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 col-md-12">
            <div className="jumbotron" style={{ textAlign: "left" }}>
              <h1
                className="display"
                style={{ fontSize: "1.5rem", color: "#003366" }}
              >
                About Our Company
              </h1>
              <p className="lead" style={{ textAlign: "left" }}>
                We Provide High Quality Service Loans
              </p>
              <hr className="my-4" />
              <p style={{ textAlign: "left" }}>
                Our company is a legit and promising one. We provide various
                types of loans. Getting a loan is very easy through our company.
                We have huge experience in providing professional services. We
                provide you with all the quality information about the loans on
                our website so that it is available online for all people.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={back} alt="banner" className="img-fluid" />
          </div>
        </div>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
          <BsBag style={styles.statIcon} />
          <h2 style={styles.statNumber}>550</h2>
          <p style={styles.statLabel}>APPROVED LOANS</p>
        </div>
        <div style={styles.statItem}>
          <FaRegSmile style={styles.statIcon} />
          <h2 style={styles.statNumber}>500</h2>
          <p style={styles.statLabel}>SATISFIED CLIENTS</p>
        </div>
        <div style={styles.statItem}>
          <MdPersonAddAlt1 style={styles.statIcon} />
          <h2 style={styles.statNumber}>20</h2>
          <p style={styles.statLabel}>FACULTY</p>
        </div>
        <div style={styles.statItem}>
          <GrUserExpert style={styles.statIcon} />
          <h2 style={styles.statNumber}>7</h2>
          <p style={styles.statLabel}>YEARS OF EXPERIENCE</p>
        </div>
      </div>

      <Container className="my-5">
        <h2
          className="text-center mb-4"
          style={{ color: "#4C75A3", fontWeight: "bold" }}
        >
          Why Choose Us?
        </h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card
              className="text-center shadow-lg"
              style={{
                borderRadius: "12px",
                backgroundColor: "#FFD700",
                transition: "transform 0.3s ease",
              }}
            >
              <Card.Body>
                <h3 style={{ color: "#fff" }}>
                  <i className="fas fa-clock"></i>
                </h3>
                <h5 style={{ color: "#fff" }}>Fast Loan Approvals</h5>
                <p style={{ color: "#fff" }}>
                  Experience quick approvals with minimal paperwork.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              className="text-center shadow-lg"
              style={{
                borderRadius: "12px",
                backgroundColor: "#28A745",
                transition: "transform 0.3s ease",
              }}
            >
              <Card.Body>
                <h3 style={{ color: "#fff" }}>
                  <i className="fas fa-arrow-right"></i>
                </h3>
                <h5 style={{ color: "#fff" }}>Quick Disbursement</h5>
                <p style={{ color: "#fff" }}>
                  Receive funds directly in your account within 24 hours.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              className="text-center shadow-lg"
              style={{
                borderRadius: "12px",
                backgroundColor: "#FF5733",
                transition: "transform 0.3s ease",
              }}
            >
              <Card.Body>
                <h3 style={{ color: "#fff" }}>
                  <i className="fas fa-cogs"></i>
                </h3>
                <h5 style={{ color: "#fff" }}>Flexible Loan Amounts</h5>
                <p style={{ color: "#fff" }}>
                  Choose from a wide range of loan limits suited to your needs.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card
              className="text-center shadow-lg"
              style={{
                borderRadius: "12px",
                backgroundColor: "#007BFF",
                transition: "transform 0.3s ease",
              }}
            >
              <Card.Body>
                <h3 style={{ color: "#fff" }}>
                  <i className="fas fa-lock"></i>
                </h3>
                <h5 style={{ color: "#fff" }}>No Collateral Required</h5>
                <p style={{ color: "#fff" }}>
                  Secure loans without the need for pledged assets.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              className="text-center shadow-lg"
              style={{
                borderRadius: "12px",
                backgroundColor: "#17A2B8",
                transition: "transform 0.3s ease",
              }}
            >
              <Card.Body>
                <h3 style={{ color: "#fff" }}>
                  <i className="fas fa-percent"></i>
                </h3>
                <h5 style={{ color: "#fff" }}>Competitive Interest Rates</h5>
                <p style={{ color: "#fff" }}>
                  Enjoy affordable rates tailored to your financial goals.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
