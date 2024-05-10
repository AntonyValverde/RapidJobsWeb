import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/ayuda.css';  // Asume que los estilos están definidos en Ayuda.css

class Guia extends React.Component {
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
            <h1 className="ayuda-title" data-aos="fade-right">Guía del Usuario</h1>
            <p className="ayuda-text" data-aos="fade-right" data-aos-delay="100">
              Explora nuestra guía para familiarizarte rápidamente con todas las funcionalidades de nuestra plataforma.
            </p>
          </Col>
        </Row>
        <Row className="card-row">
          {this.renderCard('Primeros Pasos', 'Descubre cómo crear tu perfil y comenzar a buscar ofertas de empleo o servicios.', 'fade-up', 200)}
          {this.renderCard('Cómo Aplicar a Ofertas', 'Aprende el proceso para aplicar a ofertas de trabajo o solicitar servicios.', 'fade-up', 300)}
          {this.renderCard('Configuración de Alertas', 'Configura alertas para recibir notificaciones de nuevas ofertas que coincidan con tus intereses.', 'fade-up', 400)}
        </Row>
        <Row>
          <Col md={12} data-aos="fade-up" data-aos-delay="500">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Soporte Adicional</Card.Title>
                <Card.Text>
                  Si necesitas ayuda adicional o tienes preguntas específicas, no dudes en contactarnos.
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

export default Guia;
