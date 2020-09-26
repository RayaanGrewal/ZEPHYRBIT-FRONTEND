import React from 'react';
import { Navbar,Nav , Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ContactModal from './ContactModal'

function NavbarComponent(props){


    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{marginBottom : 0}} >
      <Container fluid>
    <Navbar.Brand href="/"  style={{color : "	#FFFFFF" , fontWeight: "bold"  }}>Zephyrbit</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/#section1" ><Button variant="outline-success">Founder</Button></Nav.Link>
        <Nav.Link href="/#section2" ><Button variant="outline-primary">Client's</Button></Nav.Link>
        <Nav.Link><ContactModal/></Nav.Link>

      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

    );
  }


export default NavbarComponent;
