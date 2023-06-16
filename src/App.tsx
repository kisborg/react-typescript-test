import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BoxComponent } from './BoxComponent/BoxComponent';

function App() {

  const [boxColor, setBoxColor] = useState<'red' | 'blue'>('red');

  const sayHi = (): void => {
    if (boxColor === 'red') {
      setBoxColor('blue')
    } else {
      setBoxColor('red')
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BoxComponent color={boxColor} openAlert={sayHi} />
      </header>
    </div>
  );
}

export default App;
