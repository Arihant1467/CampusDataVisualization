import React, { Component } from "react";
import Main from "./components/Main";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App" style={{ margin: "5px" }}>
        <Main />
      </div>
    );
  }
}

export default App;
