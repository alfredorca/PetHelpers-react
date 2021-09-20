import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router";
import { isAuthenticated, logOut } from "../services/authService";
import { useEffect, useState } from "react";
import logo from "../images/paws-logo.png";
import "./NavBar2.css";

const NavBar2 = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    if (isAuthenticated()) {
      setAuthenticated(true);
    }
  };

  const handleLogOut = async () => {
    await logOut();
    setAuthenticated(false);
    history.push("/login");
  };

  return (
    <Navbar sticky="top" className="navbar" expand="lg">
      <Navbar.Brand href="/" className="NavBrand">
        <img src={logo} alt="" width="50" height="50" />{" "}
      </Navbar.Brand>
      <Navbar.Brand href="/">
        <span className="NavLogo">Pet Helpers</span>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            {isAuthenticated() && isAuthenticated().user.role === "USER" && (
              <>
                <Link to="/info">Your Info</Link>
                <Link to="/customerportal">Customer Portal</Link>
              </>
            )}
            {isAuthenticated() &&
              isAuthenticated().user.role === "PROVIDER" && (
                <>
                <Link to="/info">Your Info</Link>
                <Link to="/providerportal">Provider Portal</Link>
                </>
              )}
            {/* <Link to="/">Providers</Link> */}
            {/* <Link to="/">Orders</Link> */}
          </Nav>

          <Nav>
            {!isAuthenticated() ? (
              <>
                <Link className="btn btn-success" to="/login">
                  Login
                </Link>
                <Link className="btn btn-success" to="/signup">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <button onClick={handleLogOut} className="btn btn-outline-dark">
                  Sign Out
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar2;
