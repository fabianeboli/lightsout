import React from 'react';
import './App.css';
import { Tile } from './components/Tile/Tile';

const App: React.FC = () => {
  return (
    <div className="App">
      <Tile click={() => {}} id={1}  light={1} />
    </div>
  );
}

export default App;
