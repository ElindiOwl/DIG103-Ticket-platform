import { DateRangeFormatter, Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';
import { parseDate } from 'shared/lib';

import style from './Event-Description.module.scss';

export const EventDescription = () => {
	const event = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event
	})

	if (!event) {
		return <Text>Loading...</Text>
	}

	const date = parseDate

	return (
		<div className={style.eventDescription}>
			<div className={style.eventDescription__about}>
				<Text affiliation={'theme'} centered={false}>
					{event.description} <span className={style.eventDescription__about_finisher}>and heap more!</span>
				</Text>
			</div>
			<div className={style.eventDescription__details}>
				{event.location ?
					<Text affiliation={'theme'} type={'h2'}>
						{event.location}
					</Text> : null
				}
				{event.start && event.end ?
					<Text affiliation={'theme'} centered={false}>
						<DateRangeFormatter end={date(event.end)} start={date(event.start)}/>
					</Text>
					: null
				}
			</div>
		</div>
	)
}