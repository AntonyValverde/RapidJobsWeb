import React from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/ayuda.css';

class Terminos extends React.Component {
  state = {
    showModal: null,
  };

  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  openModal = (id) => {
    this.setState({ showModal: id });
  }

  closeModal = () => {
    this.setState({ showModal: null });
  }

  renderCard(title, text, aosType, aosDelay, modalContent) {
    return (
      <Col md={4} data-aos={aosType} data-aos-delay={aosDelay}>
        <Card className="ayuda-card">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary" onClick={() => this.openModal(title)}>
              Leer Más
            </Button>
            <Modal show={this.state.showModal === title} onHide={this.closeModal} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalContent}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <Container className="ayuda-container">
        <Row>
          <Col md={12} className="text-center">
            <h1 className="ayuda-title" data-aos="fade-right">Términos y Condiciones</h1>
            <p className="ayuda-text" data-aos="fade-right" data-aos-delay="100">
              Lee cuidadosamente los términos y condiciones antes de utilizar nuestra plataforma de ofertas de empleo y servicios.
            </p>
          </Col>
        </Row>
        <Row className="card-row">
          {this.renderCard('Uso de la Plataforma', 'Condiciones para el uso adecuado de nuestra plataforma y las responsabilidades del usuario.', 'fade-up', 200, 'Aquí se explican en detalle las normas de conducta esperadas de los usuarios, así como las prohibiciones específicas al utilizar nuestra plataforma.')}
          {this.renderCard('Privacidad y Datos', 'Cómo manejamos tus datos personales y la política de privacidad que protege tu información.', 'fade-up', 300, 'Esta sección detalla nuestras prácticas de recopilación, uso, y protección de datos personales, incluyendo cómo terceros pueden acceder a esta información bajo ciertas circunstancias.')}
          {this.renderCard('Cancelaciones y Reembolsos', 'Información sobre el proceso de cancelación y las políticas de reembolso aplicables.', 'fade-up', 400, 'Información detallada sobre cómo cancelar servicios o empleos y las condiciones bajo las cuales se pueden solicitar reembolsos.')}
        </Row>
        <Row>
          <Col md={12} data-aos="fade-up" data-aos-delay="500">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Soporte Legal</Card.Title>
                <Card.Text>
                  Para consultas legales o más información sobre nuestros términos y condiciones, contáctanos directamente.
                </Card.Text>
                <Button style={{background: 'white', color: 'black'}} variant="primary" onClick={() => this.openModal("Soporte Legal")}>
                  Contactar Soporte Legal
                </Button>
                <Modal show={this.state.showModal === "Soporte Legal"} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Soporte Legal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Si tienes preguntas legales o necesitas asistencia sobre la interpretación o aplicación de nuestros términos y condiciones, no dudes en contactarnos a través de:
                    <ul>
                      <li>Email: legal@ejemplo.com</li>
                      <li>Teléfono: +123 456 7890</li>
                    </ul>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Terminos;
