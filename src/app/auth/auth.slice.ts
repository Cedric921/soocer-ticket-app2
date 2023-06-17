import { createSlice } from '@reduxjs/toolkit';
import { login, signup } from './auth.service';

let localUser: (IUser & { token: string }) | null = null;
if (typeof window !== 'undefined') {
	localUser = localStorage?.getItem('soccer-user')
		? JSON.parse(localStorage?.getItem('soccer-user')!)
		: null;
}

const initialState: IAuthState = {
	user: localUser,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null;
			localStorage.removeItem('soccer-user');
		},
		resetStatus: (state) => {
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.user = action.payload.data;
				state.message = 'connecté';
				localStorage.setItem('soccer-user', JSON.stringify(state.user));
			})
			.addCase(login.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			})
			.addCase(signup.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(signup.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.user = action.payload.data;
				state.message = 'connecté';
				localStorage.setItem('soccer-user', JSON.stringify(state.user));
			})
			.addCase(signup.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			});
	},
});

export const { logout, resetStatus } = authSlice.actions;
export default authSlice.reducer;
