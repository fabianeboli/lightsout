import React from 'react';
import './App.css';
import { Tile } from './components/Tile/Tile';
import { Board } from './components/Board/Board';
import { MainScreen } from './components/MainScreen/MainScreen';



const App: React.FC = () => {
  return (
    <div className="App">
      <MainScreen/>
    </div>
  );
}

export default App;
