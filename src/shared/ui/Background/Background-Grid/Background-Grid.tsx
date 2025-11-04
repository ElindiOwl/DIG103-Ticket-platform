import type { FC, ReactNode } from 'react';

import style from './Background-Grid.module.scss'

interface BackgroundGridProps {
    children: ReactNode
}

export const BackgroundGrid: FC<BackgroundGridProps> = ({ children }) => {
	return (
		<div className={style.backgroundGrid}>
			{children}
		</div>
	)
}