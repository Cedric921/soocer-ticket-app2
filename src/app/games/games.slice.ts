import { createSlice } from '@reduxjs/toolkit';
import { createGame, getGames } from './games.service';

const initialState: IGameState = {
	games: [],
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: '',
};

const gameSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		resetStatus: (state) => {
			state.message = '';
		},
		setFromStatic: (state, action) => {
			state.games = action.payload.data;
			state.message = action.payload.message;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getGames.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(getGames.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.games = action.payload.data;
				state.message = '';
			})
			.addCase(getGames.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = '';
			})
			.addCase(createGame.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(createGame.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.games?.push(action.payload.data);
				state.message = action.payload.message;
			})
			.addCase(createGame.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			});
	},
});

export const { resetStatus, setFromStatic } = gameSlice.actions;
export default gameSlice.reducer;
