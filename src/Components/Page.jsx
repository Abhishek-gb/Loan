import React from 'react';
import { BsBag } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

const Page = () => {
  // Inline styles
  const styles = {
    jumbotron: {
      backgroundColor: '#f8f9fa',
      padding: '50px 20px',
      marginBottom: '0',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      color: '#2c3e50',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.2rem',
      color: '#34495e',
      maxWidth: '800px',
      margin: '0 auto',
    },
    statsContainer: {
      backgroundColor: '#ffffff',
      padding: '50px 0',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    statItem: {
      padding: '20px',
      transition: 'transform 0.3s ease',
      flex: '1 1 200px',
      maxWidth: '250px',
      margin: '10px',
    },
    statItemHover: {
      transform: 'translateY(-10px)',
    },
    statIcon: {
      fontSize: '3rem',
      color: '#3498db',
      marginBottom: '15px',
    },
    statNumber: {
      fontSize: '2.5rem',
      color: '#2c3e50',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '1.2rem',
      color: '#7f8c8d',
    },
  };

  return (
    <>
      <div style={styles.jumbotron}>
        <h1 style={styles.title}>ABOUT R G FINANCIAL SERVICES</h1>
        <p style={styles.description}>
        Our company offers fast, hassle-free loan approval with funds transferred to your bank within 24 hours. We provide high loan amounts without requiring collateral, all with competitive interest rates. Experience a straightforward and reliable lending process designed to meet your financial needs.
        </p>
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
    </>
  );
};

export default Page;