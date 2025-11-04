import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '../../lib';

import style from './Button.module.scss'

type ButtonVariant = 'primary' | 'round' | 'blank'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: ButtonVariant
}

const buttonVariants = {
	blank: style.button_blank,
	primary: style.button_primary,
	round: style.button_round
} as const

export const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
	return (
		<button
			className={cn([
				style.button,
				buttonVariants[variant]
			])}

			{...props}
		>
			{children}
		</button>
	)
}