import React from 'react';
import './App.css';
import { Tile } from './components/Tile/Tile';
import { Board } from './components/Board/Board';

const App: React.FC = () => {
  return (
    <div className="App">
     <Board numberOfRows={5} numberOfCols={5}/>
    </div>
  );
}

export default App;
