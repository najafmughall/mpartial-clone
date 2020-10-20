import React from "react";

import "./css/footer.css";
import "./css/howitworks.css";
import "./css/contact.css";
import "./css/header.css";
import "./css/waterfall.css";
import "./css/mitigration.css";
import "./css/ground.css";
import "./css/example.css";

import Header from "./components/header";
import GroundTruth from "./components/ground-truth";
import HowItWorks from "./components/howitworks";
import Mitigation from "./components/mitigation";
import Waterfall from "./components/waterfall";
import ExampleDeliverables from "./components/example-deliverables";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <GroundTruth />
      <Mitigation />
      <HowItWorks />
      <Waterfall />
      <ExampleDeliverables />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
