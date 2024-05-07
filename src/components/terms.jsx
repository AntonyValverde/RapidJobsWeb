import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';

class Terminos extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  render() {
    return (
      <Container style={{ marginTop: '100px' }}>
        <Row>
          <Col md={12}>
            <h1 data-aos="fade-right">¿Cómo podemos ayudarte?</h1>
            <p data-aos="fade-right" data-aos-delay="100">
              Aquí encontrarás respuestas a las preguntas más frecuentes y recursos para ayudarte a aprovechar al máximo nuestros servicios.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card>
              <Card.Body>
                <Card.Title>Inicio Rápido</Card.Title>
                <Card.Text>
                  Aprende los básicos para empezar a usar la plataforma rápidamente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <Card>
              <Card.Body>
                <Card.Title>Gestión de Cuenta</Card.Title>
                <Card.Text>
                  Información para administrar tu cuenta y ajustar tus configuraciones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="400">
            <Card>
              <Card.Body>
                <Card.Title>Soporte Técnico</Card.Title>
                <Card.Text>
                  Soluciones a problemas técnicos y consejos para resolver incidencias comunes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} data-aos="fade-up" data-aos-delay="500">
            <Card>
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
}

export default Terminos;
