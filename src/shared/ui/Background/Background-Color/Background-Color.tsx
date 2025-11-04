import type { FC, ReactNode } from 'react';
import { cn } from 'shared/lib';

import style from './Background-Color.module.scss'

type ColorType = 'solid' | 'translucent' | 'faded'

interface BackgroundColorProps {
    children: ReactNode,
    type?: ColorType
}

const colorTypes = {
	faded: style.backgroundColor_faded,
	solid: style.backgroundColor_solid,
	translucent: style.backgroundColor_translucent
} as const

export const BackgroundColor: FC<BackgroundColorProps> = ({ children, type = 'solid' }) => {
	return (
		<div className={cn([
			style.backgroundColor,
			colorTypes[type]
		])}>
			{children}
		</div>
	)
}