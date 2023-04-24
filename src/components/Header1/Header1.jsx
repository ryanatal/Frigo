import './Header1.scss';
import logo from "../../assets/Logo White Transparent.png";
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../state';

function CollapsibleExample() {
    const location = useLocation();
    const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="fixed-top HeaderOpacity">
      <Container>
        <Navbar.Brand href="/landing" className='ml-auto'>
            <img src={logo} className="logo" alt="logo" width ='90px'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="RightNavbar">
                <Nav.Link href="/home" className = {location.pathname === "/home" ? "CurrentRoute" : ""}>
                    Home
                </Nav.Link>
                <Nav.Link href="/ingredients" className = {location.pathname === "/ingredients" ? "CurrentRoute" : ""}>
                  Pantry
                </Nav.Link>
                <Nav.Link href="/shopping" className = {location.pathname === "/shopping" ? "CurrentRoute" : ""}>
                  Shopping
                </Nav.Link>
                <Nav.Link href="/aboutus" className = {location.pathname === "/aboutus" ? "CurrentRoute" : ""}>
                  About
                </Nav.Link>
                {location.pathname !== '/' && location.pathname !== '/signup' && (
                  <NavDropdown title="Profile" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/profile">Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={() => dispatch(setLogout())}>Log Out</NavDropdown.Item>
                  </NavDropdown>
                )}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;