import { ArtistPreview } from 'entities/artist';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';
import { Text } from 'shared/ui';

import style from './Event-Artists.module.scss'

export const EventArtists = () => {
	const event = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event
	})

	if (!event) {
		return <Text>Loading...</Text>
	}

	if (!event.artists || event.artists.length === 0) {
		return <Text>No artists available</Text>
	}

	// TODO: Remake all positioning

	return (
		<div className={style.eventArtists__artists}>
			{event.artists.slice(0, 5).map((item, index) => (
				<ArtistPreview key={index} artistId={item}/>
			))}
		</div>
	)
}