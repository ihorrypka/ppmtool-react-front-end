import React from "react";
import "./App.css";
import { Component } from "react";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Dashboard />
        <Dashboard />
        <Dashboard />
      </div>
    );
  }
}

export default App;
