import MainScreen from "../components/MainScreen";
import { Card } from "react-bootstrap";
import details from "../data/details";

const UserScreen = () => {
  const deleteHandler = (id) => {
    if (window.alert("Are you Sure?..")) {
      console.log("ok");
    }
  };

  return (
    <MainScreen name="List Of User Details">
      {details.map((detail) => (
        <Card>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                flex: "1",
                alignItems: "center",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {detail.name}
            </span>
            <div>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => deleteHandler(details.id)}
              >
                Delete
              </button>
            </div>
          </Card.Header>
          <Card.Body>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">User Data</th>
                  <th scope="col">Name</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Genmder</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-primary">
                  <th scope="row">{detail.id}</th>
                  <td>{detail.name}</td>
                  <td>{detail.email}</td>
                  <td>{detail.gender}</td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default UserScreen;
