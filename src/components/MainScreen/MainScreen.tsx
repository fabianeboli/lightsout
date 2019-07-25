import React, { useState } from 'react'
import { Board } from '../Board/Board';
import styles from './MainScreen.module.sass'

enum Difficulty {
    Easy = 0.25,
    Normal = 0.5,
    Hard = 0.75
}

interface State {
    numberOfRows: number;
    numberOfCols: number;
    difficulty: Difficulty;
}

export const MainScreen = () => {
    const [boardParameters, setBoardParameters] = useState<State>({
        numberOfRows: 5,
        numberOfCols: 5,
        difficulty: Difficulty.Normal
    })
    const [boardSet, setBoardSet] = useState<boolean>(false)
    const setDifficulty = (difficulty: Difficulty) => {
        setBoardSet(true)
        switch (difficulty) {
            case Difficulty.Easy:
                return setBoardParameters({ numberOfRows: 5, numberOfCols: 5, difficulty: Difficulty.Easy })
            case Difficulty.Normal:
                return setBoardParameters({ numberOfRows: 5, numberOfCols: 5, difficulty: Difficulty.Normal })
            case Difficulty.Hard:
                return setBoardParameters({ numberOfRows: 5, numberOfCols: 6, difficulty: Difficulty.Hard })
        }
    }

    const initialScreen = () => {
        return (
            <>
                <h1 className={styles.difficulty}>Choose your difficulty</h1>
                <div>
                    <button className={styles.buttonEasy} onClick={() => setDifficulty(Difficulty.Easy)}>Easy</button>
                    <button className={styles.buttonNormal} onClick={() => setDifficulty(Difficulty.Normal)}>Normal</button>
                    <button className={styles.buttonHard} onClick={() => setDifficulty(Difficulty.Hard)}>Hard</button>
                </div>

            </>
        )
    }

    const gameScreen = () => {
        console.log("IS Set", boardSet)
        return (
            <>
                <Board numberOfCols={boardParameters.numberOfRows}
                    numberOfRows={boardParameters.numberOfCols}
                    difficulty={boardParameters.difficulty} />
            </>
        )
    }

    return (
        <div>
            <div className={styles.title}> Lights Out </div>
            {boardSet ? gameScreen() : initialScreen()}
        </div>
    )
}
