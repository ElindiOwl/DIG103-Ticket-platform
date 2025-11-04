import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import { eventsApi, setCurrentEvent, setFeaturedEvents, setNextEventId } from 'entities/event';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'app/store';

import type { loader } from '@/root';

interface EntryProps {
    children: ReactNode,
    entryData: Awaited<ReturnType<typeof loader>>
}

export const BaseEntry: FC<EntryProps> = ({ children, entryData }) => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(setFeaturedEvents(entryData.featuredEvents))

		if (entryData.initialEvent) {
			dispatch(setNextEventId(entryData.initialEventId))
			dispatch(setCurrentEvent(entryData.initialEvent))
			dispatch(eventsApi.util.upsertQueryData(
				'getEventById',
				entryData.initialEventId,
				entryData.initialEvent
			))
		}
	}, [dispatch, entryData]);

	return (
		<>
			{children}
		</>
	)
}