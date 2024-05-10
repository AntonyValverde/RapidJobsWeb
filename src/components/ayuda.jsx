import React from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/ayuda.css';

class Ayuda extends React.Component {
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

  renderCard(title, text, aosType, aosDelay) {
    return (
      <Col md={4} data-aos={aosType} data-aos-delay={aosDelay}>
        <Card className="ayuda-card">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary" onClick={() => this.openModal(title)}>
              Más Información
            </Button>
            <Modal show={this.state.showModal === title} onHide={this.closeModal} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {text}
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
    );
  }

  render() {
    return (
      <Container className="ayuda-container">
        <Row>
          <Col md={12} className="text-center">
            <h1 className="ayuda-title" data-aos="fade-right">¿Cómo podemos ayudarte?</h1>
            <p className="ayuda-text" data-aos="fade-right" data-aos-delay="100">
              Aquí encontrarás respuestas a las preguntas más frecuentes y recursos para ayudarte a aprovechar al máximo nuestros servicios.
            </p>
          </Col>
        </Row>
        <Row className="card-row">
          {this.renderCard('Inicio Rápido', 'Aprende los básicos para empezar a usar la plataforma rápidamente.', 'fade-up', 200)}
          {this.renderCard('Gestión de Cuenta', 'Información para administrar tu cuenta y ajustar tus configuraciones.', 'fade-up', 300)}
          {this.renderCard('Soporte Técnico', 'Soluciones a problemas técnicos y consejos para resolver incidencias comunes.', 'fade-up', 400)}
        </Row>
        <Row>
          <Col md={12} data-aos="fade-up" data-aos-delay="500">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Contacto Directo</Card.Title>
                <Card.Text>
                  Si necesitas asistencia personalizada, aquí encontrarás cómo contactarnos directamente.
                </Card.Text>
                <Button style={{background: 'white', color: 'black'}} variant="primary" onClick={() => this.openModal("Contacto Directo")}>
                  Contactar
                </Button>
                <Modal show={this.state.showModal === "Contacto Directo"} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Contacto Directo</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Por favor, contáctanos a través de cualquier medio que prefieras:
                    <ul>
                      <li>Email: contacto@example.com</li>
                      <li>Teléfono: +123 456 7890</li>
                      <li>Chat en vivo disponible en nuestra plataforma</li>
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

export default Ayuda;
