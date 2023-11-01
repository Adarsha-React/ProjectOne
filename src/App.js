import React from "react";
import "./App.css";

function App() {
  console.log(process.env.REACT_APP_DEV_URL);
  return (
    <div>
      <h1>Testing Environment files</h1>
      <h1>GitHub action - workflow created</h1>
    </div>
  );
}

export default App;
