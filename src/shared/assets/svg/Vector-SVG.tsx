import type { FC } from 'react';

import type { Affiliation } from '../../lib';

interface VectorSVGProps {
    affiliation: Affiliation
    vectorStyle: string
}

export const VectorSVG: FC<VectorSVGProps> = ({ vectorStyle, affiliation }) => {
	return (
		<svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 43 27" width="100%"
			xmlns="http://www.w3.org/2000/svg">
			<g className={vectorStyle}
				filter={affiliation === 'platform' ? 'url(#filter0_d_26_180)' : 'url(#filter0_d_1_21)'}>
				<path d="M19.9901 21.5471L3.99998 5.55688L5.41419 4.14267L21.4044 20.1328L19.9901 21.5471Z"/>
				<path d="M21.4044 20.1328L37.5377 4L38.9519 5.41421L22.8189 21.5472L21.4044 20.1328Z"/>
				<path d="M21.4057 22.9601L19.9916 21.5461L21.4069 20.1308L22.821 21.5449L21.4057 22.9601Z"/>
			</g>
			{
				affiliation === 'platform' ?
					<defs>
						<filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="26.9601"
							id="filter0_d_26_180" width="42.9519" x="0"
							y="0">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
							<feOffset/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.235294 0 0 0 0 0 0 0 0 1 0"/>
							<feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_26_180"/>
							<feBlend in="SourceGraphic" in2="effect1_dropShadow_26_180" mode="normal" result="shape"/>
						</filter>
					</defs> :
					<defs>
						<filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="26.9601"
							id="filter0_d_1_21"
							width="42.9521"
							x="0.0478516" y="0">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_21"/>
							<feBlend in="SourceGraphic" in2="effect1_dropShadow_1_21" mode="normal" result="shape"/>
						</filter>
					</defs>
			}
		</svg>
	)
}