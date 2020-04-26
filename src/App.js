import React, { useState } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleBar from "./Components/TitleBar/TitleBar";
import ReviewSets from "./Components/ReviewSets/ReviewSets";
import Records from "./Resources/ReviewSets.json";

const App = () => {
  const [records, setRecords] = useState([...Records]);

  return (
    <div className="container appContainer">
      <TitleBar setRecords={setRecords} records={records} />
      <ReviewSets records={records} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
