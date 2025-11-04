import { eventApiAxios } from 'entities/event';

export const initialEventLoader = async () => {
	const featuredEvents = await eventApiAxios.getFeaturedEvents()

	if (featuredEvents.length === 0) {
		return {
			featuredEvents: null,
			initialEvent: null,
			initialEventId: null
		}
	}

	const initialEventId = featuredEvents[0].id
	const initialEvent = await eventApiAxios.getEventById(initialEventId)

	if (!initialEvent) {
		return {
			featuredEvents,
			initialEvent: null,
			initialEventId: null
		}
	}

	return {
		featuredEvents,
		initialEvent,
		initialEventId
	};
}