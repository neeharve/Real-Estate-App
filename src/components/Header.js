import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

import '../assets/styles/header.css'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={1} >
                            <Link to={'/'} className='header-option'>Home</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to={'/properties'} className='header-option'>Properties</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={3} >
                            <Link to={'/pricing'} className='header-option'>Pricing</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={4}>
                            <Link to={'/contact'} className='header-option'>Contact</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;