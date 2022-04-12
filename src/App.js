import React, { Component } from "react";
import "./App.css";
//import MyForm from "./components/MyForm";
import ValiationForm from "./components/ValidationForm";

class App extends Component {
  // state = {
  //   count: 0
  // };
  //
  // increment = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };
  //
  // decrement = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // };

  render() {
    return (
      // <div className="App">
      //   <TodoList />
      // </div>
        <ValiationForm/>
    );
  }
}

export default App;
