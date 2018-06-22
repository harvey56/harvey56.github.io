import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import PortfolioDetails from './PortfolioDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>Hi! I'm Harvey - This is my web programming Portfolio</header>
        <div className = "container-fluid">
          <div className = "row">
            <div className="col-3 left-col">
              <LeftMenu />
            </div>
            <div className="col-8 central-col">
              <PortfolioDetails />
            </div>
          </div>
        </div>
        <footer className = "text-muted">
          <div className = "container">
            <p>this is the footer. I don't really have anything to write here</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
