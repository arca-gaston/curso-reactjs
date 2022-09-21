import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Ferretería 3 de Mayo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Tienda</Nav.Link>
                        <NavDropdown title="Categoría" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Materiales de construcción</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Herramientas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fontanería</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Electroluz
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;