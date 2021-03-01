import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppBar, Button, Menu, Tabs, Tab, TabPanel } from '@material-ui/core';
import Jumbotron from "./components/jumbotron/jumbotron";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
// import NoMatch from "./pages/nomatch";

function App() {


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        {/* <Route component={NoMatch} /> */}
      </Switch>

      {/* <Jumbotron>

      </Jumbotron> */}
    </Router>
  );
}

export default App;
