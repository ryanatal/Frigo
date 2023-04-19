import './Header1.scss';
import logo from "../../assets/Logo White Transparent.png";
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
    const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="fixed-top HeaderOpacity">
      <Container>
        <Navbar.Brand href="/landing" className='ml-auto'>
            <img src={logo} className="logo" alt="logo" width ='90px'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="RightNavbar">
                <Nav.Link href="/" className = {location.pathname === "/" ? "CurrentRoute" : ""}>
                    Home
                </Nav.Link>
                <Nav.Link href="/ingredients" className = {location.pathname === "/ingredients" ? "CurrentRoute" : ""}>
                  Ingredients
                </Nav.Link>
                <Nav.Link href="/shopping" className = {location.pathname === "/shopping" ? "CurrentRoute" : ""}>
                  Shopping
                </Nav.Link>
                <Nav.Link href="/aboutus" className = {location.pathname === "/aboutus" ? "CurrentRoute" : ""}>
                  About
                </Nav.Link>
                <NavDropdown title="Profile"id="collasible-nav-dropdown">              
                    <NavDropdown.Item href="#action/3.2">
                        View
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        Pantry
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Log Out
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;