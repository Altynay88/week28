import React from "react";
import "./App.css";
import "./components/tarif.scss";
import Tarif from "./components/tarif";

const tarif = [
  {
    id: "tarif-one",
    header: "300",
    main: "300",
    text: "10",
  },
  {
    id: "tarif-two",
    header: "450",
    main: "450",
    text: "50",
  },
  {
    id: "tarif-three",
    header: "550",
    main: "550",
    text: "100",
  },
  {
    id: "tarif-four",
    header: "1000",
    main: "1000",
    text: "200",
  },
];
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {tarif.map((tarif) => (
            <Tarif
              id={tarif.id}
              header={tarif.header}
              main={tarif.main}
              text={tarif.text}
              isSelected={tarif.isSelected}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
