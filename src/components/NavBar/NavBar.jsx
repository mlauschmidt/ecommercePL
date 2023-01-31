import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container className='contenedor-navbar'>
                <Navbar.Brand href="#home">
                    <img
                    src="logo.png"
                    width="250"
                    height="auto"
                    className="d-inline-block align-center"
                    alt="Piedra Libre logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">INICIO</Nav.Link>
                        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Looks de día</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Looks de noche</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Trajes de baño</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link1">SUCURSALES</Nav.Link>
                        <Nav.Link href="#link2">CONTACTO</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;