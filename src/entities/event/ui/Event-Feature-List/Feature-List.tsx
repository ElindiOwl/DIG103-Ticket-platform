import { cn, formatText } from 'shared/lib';
import { BackgroundFrame, BackgroundImage, Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';

import style from './Feature-List.module.scss'

export const FeatureList = () => {
	const event = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event
	})

	if (!event) {
		return <Text>Loading...</Text>
	}

	if (!event.features || event.features.length === 0) {
		return <Text>No features available</Text>
	}

	const formattedText = formatText

	return (
		<>
			{event.features.map(({ id, description, image }, index) => (
				<div
					key={id}
					className={cn([
						style.eventList__item,
						index % 2 === 1 ? style.eventList__item_reversed : ''
					])}
				>
					<Text affiliation={'theme'} formatted={true} type={'h6'}>
						{formattedText(description, '      ')}
					</Text>
					<BackgroundFrame type={'medium'}>
						<BackgroundImage imageUrl={image}/>
					</BackgroundFrame>
				</div>
			))}
		</>
	)
}