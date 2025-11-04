import { createSlice } from '@reduxjs/toolkit';

import type { FeaturedEvent } from '../lib';


interface FeaturedEventsState {
    events: FeaturedEvent[] | null
}

const initialState: FeaturedEventsState = {
	events: null
}

const featuredEventsSlice = createSlice({
	initialState,
	name: 'featuredEvents',
	reducers: {
		setFeaturedEvents: (state, action) => {
			state.events = action.payload
		}
	}
})

export const { setFeaturedEvents } = featuredEventsSlice.actions

export const featuredEvents = featuredEventsSlice.reducer