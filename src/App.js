import React from "react";
import "./header.css";
import "./ground.css";
import "./howitworks.css";
import "./mitigration.css";
import "./waterfall.css";
import "./example.css";
import "./contact.css";
import "./footer.css";

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
