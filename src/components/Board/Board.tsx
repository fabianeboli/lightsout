import React, { useState } from 'react';
import { Tile, Light } from '../Tile/Tile';
import styles from './Board.module.sass';

interface IProps {
    numberOfRows: number;
    numberOfCols: number; 
}


export const Board:React.FC<IProps> = (props: IProps) => {
    const generateBoard = () => {
        let board:Light[][] = [];
        for(let i = 0; i < props.numberOfRows; i++) {
            let row = [];
            for(let i = 0;i < props.numberOfCols;i++){
                row.push(Light.on);
            }
            board.push(row)
        }
      return board;
    }

    const [light,setLights] = useState<Light[][]>(generateBoard());
    const [test, settest] = useState<number[][]>([])
    
    const flipLights = (coordination: string) => {
        const [y, x] = coordination.split(':').map(Number);
        console.log("I AM HERE", coordination)
        const flipLight = (y:number, x:number) => {
            if(x >= 0 && x < props.numberOfCols && y >= 0 && y < props.numberOfRows) {
                const checkLight =  light[y][x] === Light.off ? Light.on: Light.off;
                light[y][x] = checkLight; 
                setLights([...light, [checkLight]])
                console.log('I am also used',light[y][x], light[y][x] === Light.off ? Light.on: Light.off, y, x)
            }
        }
        flipLight(y, x)
        flipLight(y, x - 1) // upper Neighbour
        flipLight(y, x + 1) // southern Neighbour
        flipLight(y - 1, x) // western Neighbour
        flipLight(y + 1, x) // eastern Neighbour
    }

    
    const presentBoard = () => {
        let tblBoard:JSX.Element[] = [];
        for(let y = 0; y < props.numberOfRows; y++) {
            let row:JSX.Element[] = [];
            for(let x = 0; x < props.numberOfCols; x++ ){
                const coordinations = `${y}:${x}`;
                row= [...row, <Tile 
                    key={coordinations} 
                    click={() => flipLights(coordinations)} 
                    light={light[y][x]}/>]
            }   
            tblBoard = [...tblBoard, (<tr key={y}>{row}</tr>)]
        } 
        return (
            <table className={styles.board}>
              <tbody>{tblBoard}</tbody>
            </table>
        );
    }
        

    return(
        <div className={styles.board}>
        {presentBoard()}
        </div>
    )
}

