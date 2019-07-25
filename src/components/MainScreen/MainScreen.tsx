import React, { useState } from 'react'
import { Board } from '../Board/Board';

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
        console.log(boardParameters.numberOfRows)
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
        console.log("IS NOT Set", boardSet)
        return (
            <>
                <div>Choose your difficulty</div>
                <button onClick={() => setDifficulty(Difficulty.Easy)}>Easy</button>
                <button onClick={() => setDifficulty(Difficulty.Normal)}>Normal</button>
                <button onClick={() => setDifficulty(Difficulty.Hard)}>Hard</button>
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
            <h1> Lights Out </h1>
            {boardSet ? gameScreen() : initialScreen()}


        </div>
    )
}
