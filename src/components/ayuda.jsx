import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/ayuda.css';  // Asume que los estilos están definidos en Ayuda.css

class Ayuda extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  renderCard(title, text, aosType, aosDelay) {
    return (
      <Col md={4} data-aos={aosType} data-aos-delay={aosDelay}>
        <Card className="ayuda-card">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Ayuda;
