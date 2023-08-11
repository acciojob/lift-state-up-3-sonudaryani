
import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

const ParentComponent = () => {
  let [displayOption, setDisplayOption] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>

      <ChildComponent1
        displayOption={displayOption}
        setDisplayOption={setDisplayOption}
      />
      <ChildComponent2
        displayOption={displayOption}
        setDisplayOption={setDisplayOption}
      />
      <p>Selected Option: {displayOption}</p>
    </div>
  );
};

const ChildComponent1 = ({ displayOption, setDisplayOption }) => {
  const handleClick = (e) => {
    setDisplayOption("Option 1");
  };
  return (
    <div>
      <h1>Child Component 1</h1>
      <button onClick={handleClick}>Option 1</button>
    </div>
  );
};

const ChildComponent2 = ({ displayOption, setDisplayOption }) => {
  const handleClick = (e) => {
    setDisplayOption("Option 2");
  };
  return (
    <div>
      <h1>Child Component 2</h1>
      <button onClick={handleClick}>Option 2</button>
    </div>
  );
};

export default App;

