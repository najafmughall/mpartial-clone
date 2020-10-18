import React from "react";
import "./header.css";
import "./ground.css";
import "./howitworks.css";
import "./mitigration.css";

import Header from "./components/header";
import GroundTruth from "./components/ground-truth";
import HowItWorks from "./components/howitworks";
import Mitigation from "./components/mitigation";

function App() {
  return (
    <div className="App">
      <Header />
      <GroundTruth />
      <Mitigation />
    </div>
  );
}

export default App;
