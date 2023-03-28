import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container className='contenedor-navbar'>
                <Link to='/'>
                    <img
                    src="logo.png"
                    width="250"
                    height="auto"
                    className="d-inline-block align-center"
                    alt="Piedra Libre logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>INICIO</Link>
                        <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/productos' className='nav-link'>Todos los productos</Link>
                            </NavDropdown.Item>    
                            <NavDropdown.Divider /> 
                            <NavDropdown.Item>
                                <Link to={`/categoria/remeras`} className='nav-link'>REMERAS</Link>  
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={`/categoria/sweaters`} className='nav-link'>SWEATERS</Link>  
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={`/categoria/camperas`} className='nav-link'>CAMPERAS</Link> 
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={`/categoria/jeans`} className='nav-link'>JEANS</Link>  
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link to='/sucursales' className='nav-link'>SUCURSALES</Link>
                        <Link to='/contacto' className='nav-link'>CONTACTO</Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;

            