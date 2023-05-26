import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RESERVATION_ROUTE } from '../routes';
import { RootState } from '../store';

export const getReservations = createAsyncThunk(
	'books/getAll',
	async (_, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState() as RootState;
			const token =
				auth.user?.token ??
				JSON.parse(localStorage.getItem('soccer-user')!).token;

			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const res = await axios.get(RESERVATION_ROUTE, config);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getOneReservation = createAsyncThunk(
	'books/getAll',
	async (id, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState() as RootState;
			const token =
				auth.user?.token ??
				JSON.parse(localStorage.getItem('soccer-user')!).token;

			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const res = await axios.get(`${RESERVATION_ROUTE}/${id}`, config);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const createReservation = createAsyncThunk(
	'book/create',
	async (data: any, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState() as RootState;
			const token =
				auth.user?.token ??
				JSON.parse(localStorage.getItem('soccer-user')!).token;

			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const res = await axios.post(RESERVATION_ROUTE, data, config);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
