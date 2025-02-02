import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Bajaj from './Images/Bajaj.jpeg'; 
import hdfc from './Images/hdfc.jpeg';
import icici from './Images/icici.jpeg';
import kotak from './Images/kotak.jpeg';
import sbi from './Images/sbi.jpeg';
import lic from './Images/lic.jpeg';

const BankLogo = () => {
  return (
    <section className="mt-5">
      <Container>
        <div className="text-center mb-4">
          <p>Join 4,000+ companies already growing</p>
        </div>
        <Row className="logo-row">
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={Bajaj} alt="Bajaj" className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={hdfc} alt="hdfc"  className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={icici} alt="icici"  className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={kotak} alt="kotak"  className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={sbi} alt="sbi"  className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={lic} alt="lic"  className='w-100'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BankLogo;