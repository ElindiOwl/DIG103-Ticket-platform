import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from 'shared/config';

import type { Artist, ArtistAPIResponse } from '../lib';
import { artistFromAPI } from '../lib';

export const artistApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_API_URL
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