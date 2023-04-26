import React from 'react';
import { Col, Row } from "react-bootstrap";
import '../assets/styles/home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <Row className='content-text-holder' xs={1} sm={1} md={1} lg={1} >
        <Col>
          <h1 className='home-title'>Find Your Dream Home with Us</h1>
        </Col>
        <Col>
          <h5 className='home-sub-title'>Stay Up-to-Date with Real-Time Property Alerts and Market Trends Analysis</h5>
        </Col>
      </Row>

      <Row className='search-container' xs={1} sm={1} md={2} lg={4}>
        <Col className='search-option'>
          <div className='search-label'>City/Street</div>
          <input name="Location" placeholder='Location' className='search-input' />
        </Col>
        <Col className='search-option'>
          <div className='search-label'>Property Type</div>
          <input name="Location" placeholder='Property Type' className='search-input' />
        </Col>
        <Col className='search-option'>
          <div className='search-label'>Price Range</div>
          <input name="Location" placeholder='Price Range' className='search-input' />
        </Col>
        <Col className='search-option'>
          <button className='search-button'>Search</button>
        </Col>
      </Row>
    </div>
  )
}
