import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/ayuda.css';
import InicioRapido from './ayuda/InicioRapido';
import GestionCuenta from './ayuda/GestionCuenta';
import SoporteTecnico from './ayuda/SoporteTecnico';

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
          <InicioRapido title="Inicio Rápido" text="Aprende los pasos básicos para empezar a usar la plataforma rápidamente." delay={200} />
          <GestionCuenta title="Gestión de Cuenta" text="Información para administrar tu cuenta y ajustar tus configuraciones." delay={300} />
          <SoporteTecnico title="Soporte Técnico" text="Soluciones a problemas técnicos y consejos para resolver incidencias comunes." delay={400} />
        </Row>
        {/* Aquí puedes agregar más filas si es necesario */}
      </Container>
    );
  }
}

export default Ayuda;
