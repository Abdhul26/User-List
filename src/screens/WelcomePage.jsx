import "./welcomePage.css";
import { Container, Row, Form } from "react-bootstrap";

const WelcomePage = () => {
  return (
    <div className="welcome">
      <Container>
        <Row>
          <h1>welcome to User-List App</h1>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Your Name" />
              <Form.Text className="text-muted">
                Please enter your name to proceed
              </Form.Text>
            </Form.Group>
          </Form>
          <div className="buttonContainer">
            <a href="/UserScreen">
              <button type="button" class="btn btn-warning">
                Enter
              </button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePage;
