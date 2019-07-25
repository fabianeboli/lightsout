import React from 'react';
import styles from './Tile.module.sass'

export enum Light {
	on,
	off
}

interface IProps {
	click: any;
	light: Light;
}

export const Tile:React.FC<IProps> = (props: IProps) => {
	const lightsColor = props.light === Light.off ? styles.lightOff : styles.lightOn; 
	
	const handleClick = () => {
		props.click()
	}
	
	return (
		<>
			<button className={`${styles.tile} ${lightsColor}`} onClick={handleClick}></button>
		</>
	)
}