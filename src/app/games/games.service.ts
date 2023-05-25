import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GAMES } from '../routes';
import { RootState } from '../store';

export const getGames = createAsyncThunk(
	'games/getAll',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get(GAMES);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const createGame = createAsyncThunk(
	'games/create',
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

			const res = await axios.post(GAMES, data, config);
			return res.data;
		} catch (error: any) {
			const message =
				error.response?.data?.message || error?.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
