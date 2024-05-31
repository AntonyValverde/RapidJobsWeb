import React from 'react';
import { Col, Card, Modal, Button } from 'react-bootstrap';

class InicioRapido extends React.Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Col md={4} data-aos="fade-up" data-aos-delay={this.props.delay}>
        <Card className="ayuda-card">
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
            <Button variant="primary" onClick={this.openModal}>
              Más Información
            </Button>
            <Modal show={this.state.showModal} onHide={this.closeModal} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p style={{fontSize: '1.2rem'}}>Ingresa sesión con google y al entrar, ingresar los datos de su perfil.</p>
                <p style={{fontSize: '1.2rem'}}>Asi mismo ya estaras listo para postear tus ofertas y contratar servicios o buscar empleo.</p>
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
}

export default InicioRapido;
