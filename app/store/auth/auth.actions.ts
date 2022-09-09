import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface';

import { IAuthData } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';

import { toastError } from '@/utils/api.utils';



export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ password, email }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Registration successfully completed!')
			return response;
		} catch (e) {
			toastError(e);
			return thunkAPI.rejectWithValue(e);
		}
	}
);

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ password, email }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password);
			toastr.success('Login', 'Login successful!');
			return response;
		} catch (e) {
			toastError(e);
			return thunkAPI.rejectWithValue(e);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	return {};
});