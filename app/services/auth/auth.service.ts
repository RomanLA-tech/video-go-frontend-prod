import { IAuthData } from '@/services/auth/auth.helper';

import { axiosConfigured } from '@/api/axios.config';
import { AUTH, LOGIN, REGISTER } from '@/api/url.constants';

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosConfigured.post<IAuthData>(
			`/${AUTH}/${LOGIN}`,
			{
				email,
				password
			}
		);
		return response.data;
	},

	async register(email: string, password: string) {
		const response = await axiosConfigured.post<IAuthData>(
			`/${AUTH}/${REGISTER}`,
			{
				email,
				password
			}
		);
		return response.data;
	}
};