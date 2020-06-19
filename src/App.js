import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//comps
import NavBar from "./Components/Nav/NavBar";
import { Footer } from "./Components/Footer/Footer";

//pages
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Scheduling from "./Pages/Scheduling/Scheduling";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <About /> */}
      {/* <Pricing /> */}
      <Scheduling />
      <Footer />
    </div>
  );
}

export default App;
