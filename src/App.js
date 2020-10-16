import React from "react";
import "./header.css";
import "./ground.css";
import "./howitworks.css";

import Header from "./components/header";
import GroundTruth from "./components/ground-truth";
import HowItWorks from "./components/howitworks";

function App() {
  return (
    <div className="App">
      <Header />
      <GroundTruth />
      <HowItWorks />
    </div>
  );
}

export default App;
