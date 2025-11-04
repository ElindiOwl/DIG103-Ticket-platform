import { FeatureList } from 'entities/event';

import style from './Event-Features.module.scss'

export const EventFeatures = () => {
	
	return (
		<div className={style.eventFeatures}>
			<FeatureList/>
		</div>
	)
}