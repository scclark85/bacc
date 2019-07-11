import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Partners from "./pages/partners"



class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/partners" component={Partners} />
      </Router>
    );
  }
}

export default App;
