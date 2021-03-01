import React, { useState } from 'react';
// import logo from './logo.svg';
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
      {/* <div className="App"> */}
      {/* <header className="App-header"> */}
      {/* <Menu ></Menu> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      {/* </Navbar> */}

      <Jumbotron>

      </Jumbotron>
      {/* </div> */}
    </Router>
  );
}

export default App;
