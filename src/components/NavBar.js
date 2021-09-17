import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../images/paws-logo.png'
import './NavBar.css';

const NavBar = () => {

  return (
    <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="/">
        <img
          src={logo}
          alt=""
          width="50"
          height="50"
          className='navImage'
        />{' '}
      <span className="navBrandItem">Pet Helpers</span>
      </Navbar.Brand>
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav className="navLinks">
        <Link to='/' className="navBarItem">Home</Link>
        <Link to='/' className="navBarItem">Link</Link>
        <NavDropdown title={<span className='navBarDropDown'>Dropdown</span>} id="dropdown">
          <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavBar;