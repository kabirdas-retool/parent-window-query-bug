import React from "react";
import './App.css';
import Retool from "react-retool";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  buttonClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div className="App">
        <div className="parent-react-app-container">
          <h1>I am a react app</h1>
          <h2>
            Value Retool will read on load:{" "}
            <span id="id-value-retool-reads">hello</span>
          </h2>
          <div>
            <h2>
              <span id="other-id-value-retool-reads">{this.state.value}</span>
            </h2>
            <button onClick={this.buttonClicked}>
              Increment Dynamic Value
            </button>
          </div>
        </div>
"
        <div className="retool-box">
          <Retool height="600px"  url="https://retoolin.tryretool.com/apps/52327434-7118-11ed-9ffe-671e4dff40d1/Bugs/parent%20window%20query%20not%20reading%20element?_releaseVersion=latest" />
        </div>
      </div>
    );
  }
}

export default App;
