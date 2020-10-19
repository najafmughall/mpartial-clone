import React from "react";
import "./header.css";
import "./ground.css";
import "./howitworks.css";
import "./mitigration.css";
import "./waterfall.css";

import Header from "./components/header";
import GroundTruth from "./components/ground-truth";
import HowItWorks from "./components/howitworks";
import Mitigation from "./components/mitigation";
import Waterfall from "./components/waterfall";
import ExampleDeliverables from "./components/example-deliverables";

function App() {
  return (
    <div className="App">
      <Header />
      <GroundTruth />
      <Mitigation />
      <HowItWorks />
      <Waterfall />
      <ExampleDeliverables />
    </div>
  );
}

export default App;
