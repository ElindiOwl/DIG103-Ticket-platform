import type { FC, ReactNode } from 'react';

import style from './Dropdown-trigger.module.scss'

interface DropdownTriggerProps {
    children: ReactNode
}

export const DropdownTrigger: FC<DropdownTriggerProps> = ({ children }) => {
	return (
		<div className={style.dropdownTrigger}>
			{children}
		</div>
	)
}