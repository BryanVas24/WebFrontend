import { Navbar } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/Potologo.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <>
    <Navbar expand="lg" className="bg-azulOscuro navbar">
      <Container>
        <Navbar.Brand className="text-white">
          <img src={Logo} alt="" height={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar__flex">
            <Nav.Item  className="text-white">
              <Link className="text-decoration-none">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="text-white"> 
              <Link className="text-decoration-none">
                Link
              </Link>
            </Nav.Item>
            <Nav.Item className="text-white"> 
              <Link to={"/dashboard/admin/tickets"} className="text-decoration-none">
                Tickets
              </Link>
            </Nav.Item>
            <Nav.Item className="text-white"> 
              <Link to={"/dashboard/admin/asignacion"} className="text-decoration-none">
                Asignacion de Tickets
              </Link>
            </Nav.Item>
            <Nav.Item className="text-white"> 
              <Link to={"/dashboard/admin/seguimiento"} className="text-decoration-none">
                Seguimiento
              </Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Header