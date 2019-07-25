import React, { useState, FC } from 'react';
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
	
	const handleClick = (evt: React.MouseEvent) => {
		props.click()
		console.log('CURRENT PROP LIGHT', props.light)
	}
	
	return (
		<>
			<button className={`${styles.tile} ${lightsColor}`} onClick={handleClick}></button>
		</>
	)
}