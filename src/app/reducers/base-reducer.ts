import { combineReducers } from 'redux';
import { currentEvent, featuredEvents } from 'entities/event';


export const baseReducer = combineReducers(
	{
		currentEvent: currentEvent,
		featuredEvents: featuredEvents
	}
)