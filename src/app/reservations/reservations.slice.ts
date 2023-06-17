import { createSlice } from '@reduxjs/toolkit';
import { createReservation, getReservations } from './reservations.service';

const initialState: IReservationState = {
	reservations: [],
	selected: null,
	status: {
		isLoading: false,
		isSuccess: false,
		isError: false,
	},
	message: '',
};

const reservationSlice = createSlice({
	name: 'reservations',
	initialState,
	reducers: {
		resetResStatus: (state) => {
			state.message = '';
		},
		setFromStatic: (state, action) => {
			state.reservations = action.payload.data;
			state.message = action.payload.message;
		},
		selectOneReservation: (state, action) => {
			const element =
				state.reservations?.filter(
					(el) =>
						el.id.includes(action.payload) ||
						el.User.names.includes(action.payload) ||
						el.date.includes(action.payload) ||
						el.id === action.payload
				)[0] ?? null;
			state.selected = element;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getReservations.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(getReservations.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.reservations = action.payload.data;
				state.message = '';
			})
			.addCase(getReservations.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			})
			.addCase(createReservation.pending, (state) => {
				state.status.isLoading = true;
				state.status.isSuccess = false;
				state.status.isError = false;
			})
			.addCase(createReservation.fulfilled, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = true;
				state.status.isError = false;
				state.reservations?.push(action.payload.data);
				state.message = action.payload.message;
			})
			.addCase(createReservation.rejected, (state, action) => {
				state.status.isLoading = false;
				state.status.isSuccess = false;
				state.status.isError = true;
				state.message = action.payload as string;
			});
	},
});

export const { resetResStatus, setFromStatic, selectOneReservation } =
	reservationSlice.actions;
export default reservationSlice.reducer;
