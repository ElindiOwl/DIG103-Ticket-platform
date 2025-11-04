import { configureStore } from '@reduxjs/toolkit';
import { eventsApi } from 'entities/event';
import { artistApi } from 'entities/artist';

import { baseReducer } from './reducers/base-reducer';

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(eventsApi.middleware, artistApi.middleware)
	,
	reducer: {
		[eventsApi.reducerPath]: eventsApi.reducer,
		[artistApi.reducerPath]: artistApi.reducer,
		baseReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch