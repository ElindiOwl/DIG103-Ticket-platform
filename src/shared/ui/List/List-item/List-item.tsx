import type { FC, ReactNode } from 'react';

import style from './List-item.module.scss'

interface ListItemProps {
    children: ReactNode
}

export const ListItem: FC<ListItemProps> = ({ children }) => {
	return (
		<div className={style.listItem}>
			{children}
		</div>
	)
}