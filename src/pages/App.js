import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import "../styles/index.css";
import ShowCardDetails from "../components/ShowCardDetails";
import Showing from "./Showing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/showing" component={Showing} />
        <Route path="/showing" component={ShowCardDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
