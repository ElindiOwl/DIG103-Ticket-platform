import type { FC } from 'react';

import { VectorSVG } from '../../assets';
import type { Affiliation, Direction } from '../../lib';
import { cn } from '../../lib';

import style from './Vector.module.scss'


interface VectorProps {
    direction?: Direction
    affiliation?: Affiliation
}

const directions = {
	down: style.vector_down,
	left: style.vector_left,
	right: style.vector_right,
	up: style.vector_up
} as const

const affiliations = {
	platform: style.vector_platform,
	theme: style.vector_theme
} as const

export const Vector: FC<VectorProps> = ({ direction = 'down', affiliation = 'platform' }) => {
	return (
		<div
			className={cn([
				style.vector,
				directions[direction]
			])}>
			<VectorSVG
				affiliation={affiliation} vectorStyle={cn([
					affiliations[affiliation]
				])}/>
		</div>
	)
}