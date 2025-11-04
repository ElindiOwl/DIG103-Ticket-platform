import type { Artist, ArtistAPIResponse } from 'entities/artist';

export const artistFromAPI = (artistApi: ArtistAPIResponse): Artist => ({
	description: artistApi.description,
	events: artistApi.eventIds,
	id: artistApi.id,
	image: artistApi.imageUrl,
	name: artistApi.name
})