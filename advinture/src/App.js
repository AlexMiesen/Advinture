import React from 'react';
import caro_frida from './images/caro_frida.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from './components/button'

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={caro_frida} clasName="caro-frida" alt="caro and frida" />
        <Button>
        </Button>
        <p>
           Wine with Caro and Frida's
 is Fine </p>
      </header>
    </div>
  );
}

export default App;
