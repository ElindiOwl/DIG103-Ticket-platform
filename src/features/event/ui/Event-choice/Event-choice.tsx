import { setCurrentEvent, useGetEventByIdQuery } from 'entities/event';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'app/store';
import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';

interface EventChoiceProps {
    children: ReactNode
}

export const EventChoice: FC<EventChoiceProps> = ({ children }) => {
	const dispatch = useDispatch<AppDispatch>()
	const nextEventId = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.nextEventId
	})
	const { data } = useGetEventByIdQuery(nextEventId as number, {
		skip: !nextEventId
	})

	useEffect(() => {
		if (data) {
			dispatch(setCurrentEvent(data))
		}
	}, [data, dispatch]);

	// TODO: make store for loading, error state for those who react on current event

	return (
		<>
			{children}
		</>
	)
}
