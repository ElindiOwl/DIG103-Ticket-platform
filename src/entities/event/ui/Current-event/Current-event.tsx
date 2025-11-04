import { Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';

import style from './Current-event.module.scss'

export const CurrentEvent = () => {
	const eventTitle = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event?.title
	})

	return (
		<div className={style.currentEvent}>
			{eventTitle
				?
				<Text affiliation='platform' type='h6'>
					{eventTitle}
				</Text>
				:
				<Text affiliation='platform' type='h6'>
                    Event not selected
				</Text>
			}
		</div>
	)
}