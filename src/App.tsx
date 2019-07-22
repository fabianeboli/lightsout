import React from 'react';
import './App.css';
import { Tile } from './components/Tile/Tile';
import { Board } from './components/Board/Board';

const App: React.FC = () => {
  return (
    <div className="App">
     <Board size={8}/>
    </div>
  );
}

export default App;
