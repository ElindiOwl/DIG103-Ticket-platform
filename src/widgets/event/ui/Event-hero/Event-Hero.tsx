import { EventCycle, EventDescription, EventHeader } from 'entities/event';
import { BackgroundColor, BackgroundFrame, BackgroundImage, Card, Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';
import { EventChoice } from 'features/event';

import style from './Event-Hero.module.scss'

export const EventHero = () => {
	const event = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event
	})

	if (!event) {
		return <Text>Loading...</Text>
	}

	return (
		<div className={style.eventHero}>
			<BackgroundImage imageUrl={event.heroImage}>
				<BackgroundColor type={'translucent'}>
					<div className={style.eventHero__content}>
						<BackgroundFrame type={'big'}>
							<BackgroundImage imageUrl={event.mainImage}>
								<Card>
									<Card.Header>
										<BackgroundFrame variant={'flatBottom'}>
											<EventHeader/>
										</BackgroundFrame>
									</Card.Header>
									<Card.Footer>
										<BackgroundFrame variant={'flatTop'}>
											<EventDescription/>
										</BackgroundFrame>
									</Card.Footer>
								</Card>
							</BackgroundImage>
						</BackgroundFrame>
					</div>
				</BackgroundColor>
			</BackgroundImage>
			<div className={style.eventHero__controls}>
				<EventChoice>
					<EventCycle/>
				</EventChoice>
			</div>
		</div>
	)
}