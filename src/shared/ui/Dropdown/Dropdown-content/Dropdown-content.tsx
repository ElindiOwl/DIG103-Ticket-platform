import type { FC, ReactNode } from 'react';

import style from './Dropdown-content.module.scss'

interface DropdownContentProps {
    children: ReactNode
}

export const DropdownContent: FC<DropdownContentProps> = ({ children }) => {
	return (
		<div className={style.dropdownContent}>
			{children}
		</div>
	)
}