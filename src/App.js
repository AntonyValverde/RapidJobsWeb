import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Modal, Row, Col, Button, Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contrato from './components/contrato';
import NavigationBar from './components/navBar';
import InicioSesion from './components/inicio_guia'; // Considerado como la página de inicio
import Posteo from './components/posteo_servicio';
import Ayuda from './components/ayuda';
import Terminos from './components/terms';
import Descarga from './components/descarga_guia';
import Guia from './components/guia';
import { FaCloudDownloadAlt } from 'react-icons/fa';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showModalContacto, setShowModalContacto] = useState(false);

  const handleOpenModalContacto = () => setShowModalContacto(true);
  const handleCloseModalContacto = () => setShowModalContacto(false);

  const headerStyle = {
    backgroundImage: 'url("/fotos/appbar3.jpg")',
    backgroundSize: '100% 200px',
    backgroundPosition: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    padding: '7rem 0',
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
    backgroundColor: '#E4F2FD',
    borderBottom: '6px solid #fff'
  };

  const sectionImageStyle = {
    width: '200px',
    height: '400px'
  };

  const sectionImageStyle2 = {
    maxWidth: '100%',
    height: 'auto'
  };

  const appStyle = {
    backgroundColor: '#343a40',
    minHeight: '100vh',
  };

  return (
    <Router>
      <NavigationBar />
      <div className="App" style={appStyle}>

        <Routes>
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/terms" element={<Terminos />} />
          <Route path="/guia" element={<Guia />} />
        </Routes>
        <header style={headerStyle} data-aos="fade-down">
          <h1>Bienvenidos a RapidJobs</h1>
          <p>Descubre más sobre nuestros servicios y equipo.</p>
          <button
            className="fab"
            onClick={() => window.location.href =
              'https://1drv.ms/u/s!AtpHceJ44ymigvd6q3-E1uEdhsiNZw?e=hC0A8A'}
            style={{
              position: 'fixed',
              right: '30px',
              bottom: '30px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#007bff',
              color: 'white',
              textAlign: 'center',
              lineHeight: '40px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              zIndex: 1000,
              cursor: 'pointer',
              transition: 'transform 0.1s'
            }}
          >
            <FaCloudDownloadAlt style={{ verticalAlign: 'middle' }} size="100%" />
          </button>
        </header>

        <Container fluid>
          <Row style={sectionStyle} data-aos="fade-up">
            <Col md={6}>
              <Carousel style={{ maxWidth: '380px', margin: '0 auto' }}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_descarga/1.jpeg"
                    alt="First slide"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_descarga/2.jpeg"
                    alt="1"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_descarga/3.jpeg"
                    alt="2"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_descarga/4.jpeg"
                    alt="3"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_descarga/5 (2).jpeg"
                    alt="3"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_descarga/6 (2).jpeg"
                    alt="3"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_descarga/7 (2).jpeg"
                    alt="3"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>

              </Carousel>
            </Col>
            <Col md={6} className="align-self-center">
              <Descarga/>
            </Col>
          </Row>

          <Row style={sectionStyle} data-aos="fade-up" data-aos-delay="200">
            <Col md={6} className="order-md-2">
              <Carousel style={{ maxWidth: '380px', margin: '0 auto' }}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_aceptarOferta/1.jpeg"
                    alt="First slide"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_aceptarOferta/2.jpeg"
                    alt="1"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_aceptarOferta/3.jpeg"
                    alt="2"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_aceptarOferta/4.jpeg"
                    alt="2"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col md={6} className="align-self-center order-md-1">
              <Contrato />
            </Col>
          </Row>

          <Row style={sectionStyle} data-aos="fade-up">
            <Col md={6}>
              <Carousel style={{ maxWidth: '380px', margin: '0 auto' }}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_inicio/1.jpeg"
                    alt="First slide"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_inicio/2.jpeg"
                    alt="1"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_inicio/3.jpeg"
                    alt="2"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_inicio/4.jpeg"
                    alt="3"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>

              </Carousel>
            </Col>
            <Col md={6} className="align-self-center">
              <InicioSesion />
            </Col>
          </Row>

          <Row style={sectionStyle} data-aos="fade-up" data-aos-delay="200">
            <Col md={6} className="order-md-2">
              <Carousel style={{ maxWidth: '380px', margin: '0 auto' }}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_inicio/5.jpeg"
                    alt="First slide"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_inicio/6.jpeg"
                    alt="1"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/fotos/fotos_inicio/7.jpeg"
                    alt="2"
                    style={{ ...sectionImageStyle2, borderRadius: '15px' }}

                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col md={6} className="align-self-center order-md-1">
              <Posteo />
            </Col>
          </Row>

        </Container>

        <footer style={footerStyle} data-aos="fade-up">
          <span>© 2024 RapidJobs | </span>
          <a href="#!" onClick={handleOpenModalContacto} style={{ color: '#ffc107', textDecoration: 'none', margin: '0 10px' }}>Contacto</a>
          <a href="#!" onClick={handleOpenModal} style={{ color: '#ffc107', textDecoration: 'none', margin: '0 10px' }}>Política de privacidad</a>
        </footer>

        <Modal show={showModal} onHide={handleCloseModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Política de Privacidad
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Subtítulo</h4>
            <p>
              Aquí puedes incluir el contenido de tus políticas de privacidad. Utiliza un buen formato
              para hacerlo más legible para tus usuarios.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModalContacto} onHide={handleCloseModalContacto} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Contacto
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Subtítulo</h4>
            <p>
              Aquí puedes incluir el contenido de tus políticas de privacidad. Utiliza un buen formato
              para hacerlo más legible para tus usuarios.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseModalContacto}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Router>
  );
}

export default App;
