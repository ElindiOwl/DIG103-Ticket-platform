import type { FC, ReactNode } from 'react';
import { cn } from 'shared/lib';

import style from './Background-Frame.module.scss'

type FrameType = 'big' | 'medium' | 'small' | 'fill'
type FrameVariant = 'flatBottom' | 'flatTop' | 'mask'

interface BackgroundFrameProps {
    children: ReactNode
    type?: FrameType
    variant?: FrameVariant
}

const frameTypes = {
	big: style.backgroundFrame_big,
	fill: style.backgroundFrame_fill,
	medium: style.backgroundFrame_medium,
	small: style.backgroundFrame_small
} as const

const frameVariants = {
	flatBottom: style.backgroundFrame_flatBottom,
	flatTop: style.backgroundFrame_flatTop,
	mask: style.backgroundFrame_mask
} as const

export const BackgroundFrame: FC<BackgroundFrameProps> = ({ children, type = 'fill', variant }) => {
	return (
		<div className={cn([
			style.backgroundFrame,
			frameTypes[type],
			variant ? frameVariants[variant] : ''
		]
		)}>
			{children}
		</div>
	)
}