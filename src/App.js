import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//comps
import NavBar from "./Components/Nav/NavBar";
import { AboutV1 } from "./Sections/About/About";
import { PricingV1 } from "./Sections/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <AboutV1></AboutV1>
      <PricingV1></PricingV1>
    </div>
  );
}

export default App;
