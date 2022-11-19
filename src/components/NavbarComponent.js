import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">INTEGRASIA </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
