import React from 'react';
import caro_frida from './images/caro_frida.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from './components/button'

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <div className="row">
          <img src={caro_frida} className="caro-frida" alt="caro and frida" width="300" height="300" />
          <div className="col">
            <Button>
            </Button>
          </div>
          <div className="col">
            <p>
              Wine with Caro and Frida's
    is Fine </p>
          </div>
        </div>
        <div className="row">
          <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Wines
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">White</a>
              <a className="dropdown-item" href="/#">Red</a>
              <a className="dropdown-item" href="/#">Rose</a>
                <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">help</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
