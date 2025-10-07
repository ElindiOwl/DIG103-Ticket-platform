import { configureStore } from '@reduxjs/toolkit';

import { baseReducer } from '../reducers/base-reducer';


export const store = configureStore({
	reducer: baseReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;