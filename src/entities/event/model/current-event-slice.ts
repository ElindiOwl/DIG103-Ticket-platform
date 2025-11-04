import { createSlice } from '@reduxjs/toolkit';

import type { Event } from '../lib';

interface CurrentEventState {
    event: Event | null;
    nextEventId: number | null;
}

const initialState: CurrentEventState = {
	event: null,
	nextEventId: null,
}

const currentEventSlice = createSlice({
	initialState,
	name: 'currentEvent',
	reducers: {
		setCurrentEvent: (state, action) => {
			state.event = action.payload
		},
		setNextEventId: (state, action) => {
			state.nextEventId = action.payload
		}
	}
})

export const { setCurrentEvent, setNextEventId } = currentEventSlice.actions;

export const currentEvent = currentEventSlice.reducer