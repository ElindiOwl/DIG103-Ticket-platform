import type { FC, ReactNode } from 'react';

import style from './Background-Image.module.scss'

interface BackgroundImageProps {
    imageUrl?: string,
    children?: ReactNode
}

export const BackgroundImage: FC<BackgroundImageProps> = ({ imageUrl = '', children }) => {
	return (
		<div className={style.backgroundImage} style={{ backgroundImage: `url(${imageUrl})` }}>
			{children}
		</div>
	)
}