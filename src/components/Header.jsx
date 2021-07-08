import { Navbar, FormControl, Nav, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">User-List</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>

          <Nav className="d-flex">
            <Nav.Link className="my-2 my-sm-0" href="#action1">
              <Link to="AddUser">
                <button type="button" class="btn btn-success">
                  Add User
                </button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
