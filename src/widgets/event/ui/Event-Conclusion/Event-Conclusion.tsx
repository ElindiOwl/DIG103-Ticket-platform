import { EventArtists, EventProceedOrder } from 'features/event';

import style from './Event-Conclusion.module.scss'

export const EventConclusion = () => {

	return (
		<div className={style.eventConclusion}>
			<EventArtists/>
			<div className={style.eventConclusion__button}>
				<EventProceedOrder/>
			</div>
		</div>
	)
}