import { Button, Text } from 'shared/ui';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';

import style from './Event-Proceed-Order.module.scss';

export const EventProceedOrder = () => {
	const event = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event
	})

	if (!event || !event.artists || event.artists.length === 0) {
		return null
	}

	return (
		<Link className={style.eventProceedOrder} to={'/order'}>
			<div className={style.eventProceedOrder_featured}>
				<Text type={'h2'}>Sounds good?</Text>
			</div>
			<Button>
				<Text affiliation={'theme'} type={'h2'}>CHOOSE YOUR PASS!</Text>
			</Button>
		</Link>
	)
}