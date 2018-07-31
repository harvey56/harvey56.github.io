import React from "react";
import ReactDOM from "react-dom";

import LeftMenu from './LeftMenu';
import PortfolioDetails from './PortfolioDetails';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const App = () => {
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
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));