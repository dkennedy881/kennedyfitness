import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//comps
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Footer/Footer";

//section
import { AboutV1 } from "./Sections/About/About";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <AboutV1></AboutV1>
      <Footer></Footer>
    </div>
  );
}

export default App;
