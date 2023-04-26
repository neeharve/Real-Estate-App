import React from 'react';
import { Col, Row } from "react-bootstrap";
import '../assets/styles/contact.css'

export default function Contact() {
  return (
    <div style={{ backgroundColor: 'darkslategrey' }}>
      <Row className='contact-container' xs={1} md={2}>
        <Col className='contact-box'>
          <div className='contact-title'>
            Get in Touch with Us
          </div>
          <div className='contact-desc'>
            Contact Our Support Team for Any Questions or Concerns
          </div>
        </Col>
        <Col className='contact-box form-container'>
          <input name="name" placeholder='Name' className='contact-input' />
          <input name="email" placeholder='Email' className='contact-input' />
          <input name="subject" placeholder='Subject' className='contact-input' />
          <textarea name='description' placeholder='Description' className='contact-textarea' />
          <button className='submit-button'>Submit</button>
        </Col>
      </Row>
    </div>
  )
}
