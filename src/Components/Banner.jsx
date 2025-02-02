import React, { useState } from 'react';
import { motion } from 'framer-motion';
import office2 from "./Images/banner.jpg";
import WhatsAppForm from './WhatsAppForm';
import ContactUs from './ContactUs';

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
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

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
            style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start' }}
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
              onClick={() => setShowWhatsAppForm(true)}
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
              onClick={() => setShowContactUs(true)}
            >
              CONTACT US
            </button>
          </motion.div>

          {/* Modal for WhatsApp Form */}
          {showWhatsAppForm && (
            <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.6)' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Enquire Now</h5>
                    <button type="button" className="btn-close" onClick={() => setShowWhatsAppForm(false)}></button>
                  </div>
                  <div className="modal-body">
                    <WhatsAppForm onClose={() => setShowWhatsAppForm(false)} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal for Contact Us Form */}
          {showContactUs && (
            <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.6)' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Contact Us</h5>
                    <button type="button" className="btn-close" onClick={() => setShowContactUs(false)}></button>
                  </div>
                  <div className="modal-body">
                    <ContactUs onClose={() => setShowContactUs(false)} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
