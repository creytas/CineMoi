import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import "../styles/index.css";
import ShowCardDetails from "../components/ShowCardDetails";
import Showing from "./Showing";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shows" component={Showing} />
        <Route path="/shows/details" component={ShowCardDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
