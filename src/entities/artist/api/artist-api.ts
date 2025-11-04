import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Artist, ArtistAPIResponse } from '../lib';
import { artistFromAPI } from '../lib';


export const artistApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5239/api/'
	}),
	endpoints: (builder) => ({
		getArtistById: builder.query<Artist, number>({
			providesTags: (
				result,
				error,
				id
			) => {
				return [{ id, type: 'Artist' }]
			},
			query: (id) => `artist/${id}`,
			transformResponse: (response: ArtistAPIResponse) =>
				artistFromAPI(response)
		})
	}),
	reducerPath: 'artistAPI',
	tagTypes: ['Artist']
})

export const { useGetArtistByIdQuery } = artistApi