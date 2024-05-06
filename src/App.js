import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const headerStyle = {
    backgroundImage: 'url("/fotos/appbar3.jpg")',
    backgroundSize: '1024px 200px', // Ajusta según las dimensiones reales de tu imagen
    backgroundPosition: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    padding: '5rem 0',
    textAlign: 'center'
  };
  

  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center'
  };

  const sectionStyle = {
    padding: '3rem 0',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd'
  };

  const sectionImageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '1rem'
  };

  return (
    <div className="App">
      <header style={headerStyle} data-aos="fade-down">
        <h1>Bienvenidos a RapidJobs</h1>
        <p>Descubre más sobre nuestros servicios y equipo.</p>
      </header>

      <Container fluid>
        <Row style={sectionStyle} data-aos="fade-up">
          <Col md={6}>
            <Image
              src="/fotos/appbar.jpg"
              rounded
              style={sectionImageStyle}
            />
          </Col>
          <Col md={6} className="align-self-center">
            <h2>Ayuda - Help</h2>
            <p>
              Ofrecemos ayuda para mejorar tu usabilidad y
              manejo de la aplicación RapidJobs.
            </p>
            <Button variant="primary">Saber más</Button>
          </Col>
        </Row>

        <Row style={sectionStyle} data-aos="fade-up" data-aos-delay="200">
          <Col md={6} className="order-md-2">
            <Image
              src="https://via.placeholder.com/600x400"
              rounded
              style={sectionImageStyle}
            />
          </Col>
          <Col md={6} className="align-self-center order-md-1">
            <h2>Servicio 2 - Reclutamiento</h2>
            <p>
              Encuentra candidatos ideales para tu empresa con nuestros servicios
              de reclutamiento especializado.
            </p>
            <Button variant="primary">Saber más</Button>
          </Col>
        </Row>

        <Row style={sectionStyle} data-aos="fade-up">
          <Col md={6}>
            <Image
              src="/fotos/caballo.jpg"
              rounded
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
          <Col md={6} className="align-self-center">
            <h2>Servicio 1 - Consultoría</h2>
            <p>
              Ofrecemos consultoría para mejorar tu estrategia laboral y
              optimizar tu experiencia en el campo profesional.
            </p>
            <Button variant="primary">Saber más</Button>
          </Col>
        </Row>

      </Container>

      <footer style={footerStyle} data-aos="fade-up">
        <span>© 2024 RapidJobs | </span>
        <a href="#!" style={{ color: '#ffc107', textDecoration: 'none', margin: '0 10px' }}>Contacto</a>
        <a href="#!" style={{ color: '#ffc107', textDecoration: 'none', margin: '0 10px' }}>Política de privacidad</a>
      </footer>
    </div>
  );
}

export default App;
