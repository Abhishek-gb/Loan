import React from 'react';
import { motion } from 'framer-motion';
import office2 from "./Images/banner.jpg";

const textVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1, 
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const Banner = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#002b49', color: 'white', padding: '3rem 0' }}>
      <div className="row align-items-center">
        <div className="col-md-6 p-0 position-relative">
          <img
            src={office2}
            alt="Rexroth Team"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 43, 73, 0.5)',
            }}
          ></div>
        </div>

        <div className="col-md-6 text-center text-md-start p-4">
          <motion.h1 
            className="fw-bold display-4" 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', color: '#f1faee' }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            R G FINANCIAL SERVICES
          </motion.h1>

          <motion.p 
            className="mt-3 lead" 
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', color: '#f1faee' }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            One of the leading companies in India, renowned for delivering high-quality services with competitive interest rates.
          </motion.p>

          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: '10px', justifyContent: 'center', justifyContent: 'flex-start' }}
          >
            <button 
              className="btn btn-lg" 
              style={{ 
                backgroundColor: '#e63946', 
                color: 'white', 
                fontWeight: 'bold', 
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '3px 3px 6px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
              }}
              
               >
              ENQUIRE HERE
            </button>

            <button 
              className="btn btn-lg" 
              style={{ 
                backgroundColor: '#f1faee', 
                color: '#002b49', 
                fontWeight: 'bold',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '3px 3px 6px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
              }}
            >
              CONTACT US
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
