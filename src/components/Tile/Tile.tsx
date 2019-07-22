import React, { useState, FC } from 'react';
import styles from './Tile.module.sass'

export enum Light {
	on,
	off
}

interface IProps {
	id: number;
	click: any;
	light: Light;
}

export const Tile:React.FC<IProps> = (props: IProps) => {
	const [lights, setLights] = useState<Light>(Light.off)
	const lightsColor = Light.on ? styles.lightOn : styles.lightOff; 
	const handleClick = () => {
		setLights(lights === Light.off ? Light.on : Light.off);
		props.click({ id: props.id, light: lights });
	}

	return (
		<>
			<button className={`${styles.tile} ${lightsColor}`} onClick={handleClick}></button>
		</>
	)
}