import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import usersReducer from './users/users.slice';
import competitionReducer from './compet/compets.slice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		users: usersReducer,
		competition: competitionReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
