import React , { useState }  from 'react';
import {Modal , Button  , Row , Col  } from 'react-bootstrap';

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="outline-danger" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title><h1 style={{color :"#2f3542" , fontStyle: "italic"}}>Contact</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row style={{marginBottom : 10}}>
        <Col>
          Email : zephyrbit1@gmail.com
        </Col>
        <Col>
          Call : 08427653324
        </Col>
      </Row>
      <Button variant="outline-primary" size="lg" block>
        <a href="tel:08427653324">Call </a>
      </Button>

        </Modal.Body>

      </Modal>
    </React.Fragment>
  );
}

export default ContactModal;
