import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/NavigationBar.css';

function NavigationBar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        }; 

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = {
        backgroundColor: scroll ? '#000' : '#343a40',
        borderBottom: '3px solid #ff4500',
        transition: 'background-color 0.3s ease'
    };

    const linkStyle = {
        color: 'white',
        fontWeight: 'bold',
        marginRight: '20px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)'
    };

    const toggleStyle = {
        backgroundColor: 'white'

    };

    return (
        <Navbar style={navbarStyle} expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className={`brand-colored ${scroll ? 'brand-scrolled' : ''}`}>RapidJobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={toggleStyle} />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" style={linkStyle}>Inicio</Nav.Link>
                        <Nav.Link href="#help" style={linkStyle}>Ayuda</Nav.Link>
                        <Nav.Link href="#terms" style={linkStyle}>Términos y Condiciones</Nav.Link>
                        <Nav.Link href="#guides" style={linkStyle}>Guías</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
