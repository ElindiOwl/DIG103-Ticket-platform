import { apiClient } from 'shared/api';

import { EventFromApi, FeaturedEventFromApi } from '../lib';


export const eventApiAxios = {
	getEventById: async (id: number) => {
		const response = await apiClient.get(`events/${id}`)
		return EventFromApi(response.data);
	},

	getFeaturedEvents: async () => {
		const response = await apiClient.get('events/featured')
		return response.data.map(FeaturedEventFromApi);
	}
}