import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//comps
import NavBar from "./Components/Nav/NavBar";
import { Footer } from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Utils/ScrollToTop";

//pages
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Scheduling from "./Pages/Scheduling/Scheduling";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/scheduling">
            <Scheduling />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
