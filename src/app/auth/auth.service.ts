import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../routes';

export const login = createAsyncThunk(
	'auth/login',
	async (data: { email: string; password: string }, thunkAPI) => {
		try {
			const res = await axios.post(LOGIN_ROUTE, data);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const signup = createAsyncThunk(
	'auth/signup',
	async (
		data: { email: string; password: string; names: string },
		thunkAPI
	) => {
		try {
			const res = await axios.post(SIGNUP_ROUTE, data);
			return res.data;
		} catch (error: any) {
			const message =
				error?.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
