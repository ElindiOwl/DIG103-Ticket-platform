import type {
	Event,
	EventAPIResponse,
	EventFeature,
	EventFeatureAPIResponse,
	EventTheme,
	EventThemeAPIResponse,
	FeaturedEvent,
	FeaturedEventAPIResponse
} from '../lib';

const MapFeature = (eventsApi: EventFeatureAPIResponse): EventFeature => ({
	description: eventsApi.description,
	id: eventsApi.id,
	image: eventsApi.imageUrl
})

const MapTheme = (eventsApi: EventThemeAPIResponse): EventTheme => ({
	fontFamily: eventsApi.fontFamily,
	primaryColor: eventsApi.colorPrimary,
	primaryColorLight: eventsApi.colorPrimaryLight,
	secondaryColor: eventsApi.colorSecondary
})

export const EventFromApi = (eventsApi: EventAPIResponse): Event => ({
	artists: eventsApi.artistIds,
	description: eventsApi.description,
	end: eventsApi.endDate,
	features: eventsApi.features ? eventsApi.features.map(MapFeature) : undefined,
	heroImage: eventsApi.backgroundUrl,
	id: eventsApi.id,
	location: eventsApi.location,
	mainImage: eventsApi.imageUrl,
	start: eventsApi.startDate,
	theme: eventsApi.theme ? MapTheme(eventsApi.theme) : undefined,
	title: eventsApi.name
})

export const FeaturedEventFromApi = (eventsApi: FeaturedEventAPIResponse): FeaturedEvent => ({
	id: eventsApi.id,
	theme: eventsApi.theme ? MapTheme(eventsApi.theme) : undefined,
	title: eventsApi.name
})