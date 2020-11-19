import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "../src/ScotchInfoBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jon",
      age: 33
    };
}

  changeName(name) {
    console.log(name)
    this.setState({ name: name });
  }
  changeAge(age) {
    this.setState({age: age})
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2 className="subtitle is-4">Update Data from an input</h2>
        </div>

        {/* Display Data */}
        <div className="input-display">
          <p>Display Name: {this.state.name}</p>
          <p>Display Age: {this.state.age}</p>
        </div>

        {/* Collect User Inputs */}
        <div className="inputs">
          {/* Input name */}
          <div className="field">
            <label className="label">Name: </label>
            <input
              className="input"
              type="text"
              placeholder="William"
              onChange={(e) => this.changeName(e.currentTarget.value)}
            />
          </div>

          {/* Input age */}
          <div className="field">
            <label className="label">Age: </label>
            <input className="input" type="number" placeholder="38" 
            onChange={(e) => this.changeAge(+e.currentTarget.value)}
            />
          </div>
        </div>
        <ScotchInfoBar seriesNumber="3" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
