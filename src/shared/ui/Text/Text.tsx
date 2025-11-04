import type { FC, ReactNode } from 'react';
import { createElement } from 'react';

import type { Affiliation, TextType } from '../../lib';
import { cn } from '../../lib';

import style from './Text.module.scss'

interface TextProps {
    affiliation?: Affiliation
    type?: TextType
    formatted?: boolean
    centered?: boolean
    children: ReactNode
}

const affiliations = {
	platform: style.text_platform,
	theme: style.text_theme
}

export const Text: FC<TextProps> = ({
	affiliation = 'platform',
	type = 'p',
	formatted = false,
	centered = true,
	children
}) => {
	return createElement(
		type,
		{
			className: cn([
				affiliations[affiliation],
				formatted ? style.text_formatted : '',
				centered ? style.text_centered : ''
			])
		},
		children
	)
}