import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink as RRNavLink } from 'react-router-dom'; // Importar NavLink de react-router-dom
import '../styles/NavigationBar.css';
import { useWindowSize } from 'react-use';

function NavigationBar() {
    const [scroll, setScroll] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const handleNavLinkClick = () => {
        setExpanded(false);  // Contraer el menú
    };

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
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
        position: 'relative',
    };

    const handleMouseOver = (id) => {
        setActiveLink(id);
    };

    

    // Actualizado para usar NavLink de react-router-dom
    const { width } = useWindowSize();

    const renderNavLink = (to, id, text) => {
        const isMobile = width <= 992;  // Definir el breakpoint para móvil
        const underlineStyle = isMobile ? {} : {
            position: 'absolute',
            left: 0,
            bottom: 3,
            width: activeLink === id ? '100%' : '0%',
            height: 2,
            backgroundColor: '#E8FBFC',
            transition: 'width 0.3s ease',
        };
        const handleMouseOut = () => {
            setActiveLink(null);
        };

        return (
            <Nav.Link as={RRNavLink} to={to} style={linkStyle}
                onMouseOver={() => handleMouseOver(id)}
                onMouseOut={handleMouseOut}
                className={activeLink === id ? "active" : ""}
            >
                {text}
                {!isMobile && <div className="underline" style={underlineStyle}></div>}
            </Nav.Link>
        );
    };

    return (
        <Navbar style={navbarStyle} expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={RRNavLink} to="/" className={`brand-colored ${scroll ? 'brand-scrolled' : ''}`}>RapidJobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {renderNavLink("/", 'link-inicio', 'Inicio')}
                        {renderNavLink("/ayuda", 'link-ayuda', 'Ayuda')}
                        {renderNavLink("/terms", 'link-terms', 'Términos y condiciones')}
                        {renderNavLink("/guia", 'link-guia', 'Guía')}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
