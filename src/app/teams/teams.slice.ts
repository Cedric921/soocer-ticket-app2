import { createSlice } from '@reduxjs/toolkit';
import { createTeam, getTeams, updateTeam } from './teams.service';

const initialState: ITeamState = {
	teams: [],
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: '',
};

const teamSlice = createSlice({
	name: 'teams',
	initialState,
	reducers: {
		resetStatus: (state) => {
			state.message = '';
		},
		setFromStatic: (state, action) => {
			state.teams = action.payload.data;
			state.message = action.payload.message;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTeams.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(getTeams.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.teams = action.payload.data;
				state.message = '';
			})
			.addCase(getTeams.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = '';
			})
			.addCase(createTeam.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(createTeam.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.teams?.push(action.payload.data);
				state.message = action.payload.message;
			})
			.addCase(createTeam.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			})
			.addCase(updateTeam.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(updateTeam.fulfilled, (state, action) => {
				const filered = state.teams?.filter(
					(el) => el.id != action.payload.data.id
				);
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.teams = [...filered!, action.payload.data];
				state.message = action.payload.message;
			})
			.addCase(updateTeam.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			});
	},
});

export const { resetStatus, setFromStatic } = teamSlice.actions;
export default teamSlice.reducer;
