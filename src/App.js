import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
