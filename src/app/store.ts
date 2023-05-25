import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import usersReducer from './users/users.slice';
import competitionReducer from './compet/compets.slice';
import gamesReducer from './games/compets.slice';
import teamReducer from './teams/teams.slice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		users: usersReducer,
		competitions: competitionReducer,
		teams: teamReducer,
		games: gamesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
