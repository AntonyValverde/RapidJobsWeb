import React from 'react';
import { Col, Card, Modal, Button } from 'react-bootstrap';

class GestionCuenta extends React.Component {
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
                <p>Tus datos de la cuenta podran ser gestionados desde la aplicación.</p>
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

export default GestionCuenta;
