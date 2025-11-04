import { Button, Vector } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'app/store';

import { setNextEventId } from '../../model';

import style from './Event-cycle.module.scss'

export const EventCycle = () => {
	const dispatch = useDispatch<AppDispatch>()
	const featuredEvents = useSelector((state: RootState) => {
		return state.baseReducer.featuredEvents.events
	})
	const event = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event
	})

	if (!event || !featuredEvents) {
		return null
	}

	const currentIndex = featuredEvents.findIndex((item) => item.id === event.id)

	const handleClickBackwards = () => {
		const prevIndex = currentIndex === 0 ? featuredEvents.length - 1 : currentIndex - 1
		dispatch(setNextEventId(featuredEvents[prevIndex].id))
	}

	const handleClickForward = () => {
		const nextIndex = currentIndex === featuredEvents.length - 1 ? 0 : currentIndex + 1
		dispatch(setNextEventId(featuredEvents[nextIndex].id))
	}

	return (
		<div className={style.eventCycle}>
			<Button variant={'round'} onClick={handleClickBackwards}>
				<Vector affiliation='theme' direction={'left'}/>
			</Button>
			<Button variant={'round'} onClick={handleClickForward}>
				<Vector affiliation='theme' direction={'right'}/>
			</Button>
		</div>
	)
}