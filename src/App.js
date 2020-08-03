import React from "react";
import { Router, Route } from "react-router-dom";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </div>
    </Router>
  );
}

export default App;
