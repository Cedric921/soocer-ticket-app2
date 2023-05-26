import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USERS, LOGIN_ROUTE } from '../routes';
import { RootState } from '../store';

export const getUsers = createAsyncThunk(
	'users/getAll',
	async (_, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState() as RootState;
			const token =
				auth.user?.token ||
				JSON.parse(localStorage.getItem('soccer-user')!).token;

			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const res = await axios.get(USERS, config);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const createUser = createAsyncThunk(
	'users/create',
	async (
		data: { names: string; email: string; role: string } | IUser,
		thunkAPI
	) => {
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

			const res = await axios.post(
				USERS,
				{ ...data, password: '123456' },
				config
			);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const updateUser = createAsyncThunk(
	'users/create',
	async (dto: any, thunkAPI) => {
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

			const res = await axios.put(`${USERS}/${dto.id}`, dto.data, config);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
