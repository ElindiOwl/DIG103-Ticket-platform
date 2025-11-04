import { Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';

import style from './Event-Header.module.scss';

export const EventHeader = () => {
	const event = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event
	})

	if (!event) {
		return <Text>loading...</Text>
	}

	return (
		<div className={style.eventHeader}>
			<Text affiliation={'theme'} type={'h1'}>
				{event.title}
			</Text>
			<div className={style.eventHero__content_featured}>
				<Text type={'h6'}>FEATURED</Text>
			</div>
		</div>
	)
}