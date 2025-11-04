import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Event, EventAPIResponse } from '../lib';
import { EventFromApi } from '../lib';

export const eventsApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5239/api/'
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