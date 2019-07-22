import * as React from 'react';
import { Tile, Light } from '../Tile/Tile';
import styles from './Board.module.sass';

interface IProps {
    size: number
}

export const Board:React.FC<IProps> = (props: IProps) => {
	
	const click = (evt: any) => {

	}

    const generateBoard = (size: number = Math.pow(props.size, 2), array: JSX.Element[] = Array.from(Array(size))) => {
        return array.map((el,id) => <Tile click={click} id={id} light={Light.on}/>)
    }

    return(
        <div className={styles.board}>
		{generateBoard()}
        </div>
    )

}   