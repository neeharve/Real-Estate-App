import React from 'react';
import { Col, Row } from "react-bootstrap";
import '../assets/styles/footer.css';

export default function Footer() {
    return (
        <div style={{ backgroundColor: "Black" }}>
            <footer className='footer-section'>
                <Row xs={1} md={2}>
                    <Col className='footer-box'>
                        <div className='footer-list-item'>
                            <div className='footer-img-holder'>
                                <img src={require('../assets/images/pin.png')} alt={'pin'} className='footer-list-image' />
                            </div>
                            <div>
                                <div>21 Street Numberone</div>
                                <div>Arizona, US</div>
                            </div>
                        </div>
                        <div className='footer-list-item'>
                            <div className='footer-img-holder'>
                                <img src={require('../assets/images/telephone.png')} alt={'pin'} className='footer-list-image' />
                            </div>
                            +1 555 666666
                        </div>
                        <div className='footer-list-item'>
                            <div className='footer-img-holder'>
                                <img src={require('../assets/images/email.png')} alt={'pin'} className='footer-list-image' />
                            </div>
                            support@company.com
                        </div>
                    </Col>
                    <Col className='footer-box'>
                        <div className='footer-title'>About the company</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}
