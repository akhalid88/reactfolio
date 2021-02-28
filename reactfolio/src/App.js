import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Menu, Tabs, Tab, TabPanel } from '@material-ui/core';

function App() {
  const value = 0;
  const onChange = 0;
  function handleChange() {
    onChange = 1;
  };
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <Menu ></Menu> */}
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}

      <Button color="primary">Hello World</Button>
      {/* </header> */}
    </div>
  );
}

export default App;
