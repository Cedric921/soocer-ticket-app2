import { createSlice } from '@reduxjs/toolkit';
import { createCompet, getCompets } from './compets.service';

let localUser: IUser | null = null;
if (typeof window !== 'undefined') {
	localUser = localStorage?.getItem('soccer-user')
		? JSON.parse(localStorage?.getItem('soccer-user')!)
		: null;
}

const initialState: ICopmetitionState = {
	competitons: [],
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: '',
};

const competSlice = createSlice({
	name: 'competitions',
	initialState,
	reducers: {
		resetStatus: (state) => {
			state.message = '';
		},
		setFromStatic: (state, action) => {
			state.competitons = action.payload.data;
			state.message = action.payload.message;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCompets.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(getCompets.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.competitons = action.payload.data;
				state.message = '';
			})
			.addCase(getCompets.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			})
			.addCase(createCompet.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(createCompet.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.competitons?.push(action.payload.data);
				state.message = action.payload.message;
			})
			.addCase(createCompet.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			});
	},
});

export const { resetStatus, setFromStatic } = competSlice.actions;
export default competSlice.reducer;
