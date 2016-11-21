import * as React from 'react';
const logo = require('./logo.svg');

import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Movember</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          Grow it bro.
        </p>
      </div>
    );
  }
}

export default App;
