import React from "react";
import "./header.css";
import "./ground.css";

import Header from "./components/header";
import GroundTruth from "./components/ground-truth";

function App() {
  return (
    <div className="App">
      <Header />
      <GroundTruth />
    </div>
  );
}

export default App;
