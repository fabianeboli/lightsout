import React from 'react';
import { Tile } from './components/Tile/Tile';
import { Board } from './components/Board/Board';
import { MainScreen } from './components/MainScreen/MainScreen';
import styles from './App.module.sass'



const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <MainScreen/>
    </div>
  );
}

export default App;
