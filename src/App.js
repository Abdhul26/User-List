import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./screens/WelcomePage";
import AddUser from "./screens/AddUser";
import { BrowserRouter, Route } from "react-router-dom";
import UserScreen from "./screens/UserScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/UserScreen" component={UserScreen} />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
