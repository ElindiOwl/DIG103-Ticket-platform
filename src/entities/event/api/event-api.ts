import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from 'shared/config';

import type { Event, EventAPIResponse } from '../lib';
import { EventFromApi } from '../lib';

export const eventsApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_API_URL
	}),
	endpoints: (builder) => ({
		getEventById: builder.query<Event, number>({
			providesTags: (
				result,
				error,
				id
			) => {
				return [{ id, type: 'Event' }]
			},
			query: (id) => `events/${id}`,
			transformResponse: (response: EventAPIResponse) =>
				EventFromApi(response)
		})
	}),
	reducerPath: 'eventsApi',
	tagTypes: ['Event']
})

export const { useGetEventByIdQuery } = eventsApi