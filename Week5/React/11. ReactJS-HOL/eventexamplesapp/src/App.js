import React from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert("I was clicked");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  render() {

    return (

      <div style={{padding:"20px"}}>

        <h1>React Event Examples</h1>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br/><br/>

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <br/><br/>

        <button onClick={this.onPress}>
          OnPress
        </button>

        <hr/>

        <CurrencyConvertor/>

      </div>

    );
  }

}

export default App;