import * as React from 'react';
import logo from './2.jpg';

class LandingPage extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Bird App</h1>
        </header>
        <p className="App-intro">
          This is built by: <code>Zainab Maleki</code>.
        </p>
      </div>
    );
  }
}

export default LandingPage;
