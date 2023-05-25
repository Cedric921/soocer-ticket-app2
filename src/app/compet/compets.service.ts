import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USERS, LOGIN_ROUTE, COMPETITIONS } from '../routes';
import { RootState } from '../store';

export const getCompets = createAsyncThunk(
	'compets/getAll',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get(COMPETITIONS);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const createCompet = createAsyncThunk(
	'compets/create',
	async (data: { title: string; description: string }, thunkAPI) => {
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

			const res = await axios.post(COMPETITIONS, data, config);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
