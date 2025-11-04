import { Link } from 'react-router';
import type { FC } from 'react';
import { cn } from 'shared/lib';

import { LogoSVG } from '../../../assets';

import style from './Project-Logo.module.scss';

type logoType = 'regular' | 'small';

interface ProjectLogoProps {
    type?: logoType
}

const types = {
	regular: style.logo_regular,
	small: style.logo_small
}

export const ProjectLogo: FC<ProjectLogoProps> = ({ type = 'regular' }) => {
	return (
		<div className={cn([style.logo, types[type]])}>
			<Link to={'/'}>
				<LogoSVG/>
			</Link>
		</div>
	)
}