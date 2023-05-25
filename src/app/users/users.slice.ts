import { createSlice } from '@reduxjs/toolkit';
import { createUser, getUsers } from './users.service';

let localUser: IUser | null = null;
if (typeof window !== 'undefined') {
	localUser = localStorage?.getItem('soccer-user')
		? JSON.parse(localStorage?.getItem('soccer-user')!)
		: null;
}

const initialState: IUserState = {
	users: [],
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: '',
};

const authSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		resetStatus: (state) => {
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.users = action.payload.data;
				state.message = '';
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			});
	},
});

export const { resetStatus } = authSlice.actions;
export default authSlice.reducer;
