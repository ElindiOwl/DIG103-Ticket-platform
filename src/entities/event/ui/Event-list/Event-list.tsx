import { Button, ListItem, Text } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'app/store';

import { setNextEventId } from '../../model';

import style from './Event-list.module.scss'

export const EventList = () => {
	const dispatch = useDispatch<AppDispatch>()
	const events = useSelector((state: RootState) => {
		return state.baseReducer.featuredEvents.events
	})

	if (!events || events.length === 0) {
		return <Text>No Upcoming Events</Text>
	}

	const handleClick = (id: number) => {
		dispatch(setNextEventId(id));
	}

	return (
		<>
			{events.map(({ id, title }) => (
				<Button key={id} variant='blank' onClick={() => handleClick(id)}>
					<ListItem>
						<div className={style.choiceOption}>
							<Text affiliation='platform' type='h6'>
								{title}
							</Text>
						</div>
					</ListItem>
				</Button>
			))}
		</>
	)
}