import type { FC } from 'react';
import type { ComponentChildren } from 'shared/lib';

import style from './Card.module.scss'


export const Card: FC<ComponentChildren> & {
    Header: FC<ComponentChildren>
    Content: FC<ComponentChildren>
    Footer: FC<ComponentChildren>
} = ({ children }) => {
	return (
		<div className={style.card}>
			{children}
		</div>
	)
}

Card.Header = ({ children }) => {
	return (
		<div className={style.card__header}>
			{children}
		</div>
	)
}

Card.Content = ({ children }) => {
	return (
		<div className={style.card__content}>
			{children}
		</div>
	)
}

Card.Footer = ({ children }) => {
	return (
		<div className={style.card__footer}>
			{children}
		</div>
	)
}