import { Container, Row } from "react-bootstrap";
import "./mainScreen.css";

const MainScreen = ({ name, children }) => {
  return (
    <div className="user">
      <Container>
        <Row>
          <div className="page">
            {name && (
              <>
                <h1 className="heading">{name}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
