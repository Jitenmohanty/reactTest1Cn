import "./styles.css";
import Select from "react-select";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(null);
  const options = [
    {
      value: "Yes",
      label: "Yes"
    },
    {
      value: "Probably Not",
      label: "Probably Not"
    }
  ];
  const csl = () => {
    document.body.style.backgroundColor = "rgb(43, 175, 199)";
  };
  return (
    <>
      <h1>Should you use a dropdown ?</h1>
      <div
        className="App"
        style={{ margin: 30, width: 300, marginLeft: 10, fontSize: "25px" }}
      >
        <Select
          options={options}
          value={value}
          placeholder="Select"
          onChange={setValue}
          onMenuOpen={csl}
        />
      </div>
    </>
  );
}
