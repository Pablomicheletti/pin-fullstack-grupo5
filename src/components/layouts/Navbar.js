import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 

function NavBarMain() {
  return (
    <Navbar className="navbarmain"collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Iguazú</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Nosotros" >Nosotros</Nav.Link>
            <Nav.Link href="#Hacer">Hacer</Nav.Link>

        
            <Nav.Link href="#Disfrutar">Disfrutar</Nav.Link>
            <Nav.Link eventKey={2} href="#Saber">
              Saber
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

       
       

export default NavBarMain;