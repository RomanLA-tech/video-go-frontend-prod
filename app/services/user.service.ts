import { IUser } from '@/types/user.interface';

import { axiosConfigured } from '@/api/axios.config';
import { BY_ID, USER, USERS } from '@/api/url.constants';

export const UserService = {
	async getAllUsers() {
		return axiosConfigured.get<IUser[]>(`/${USER}/${USERS}`);
	},

	async getUserById(id: number) {
		return axiosConfigured.get<IUser>(`/${USER}/${BY_ID}/${id}`);
	}
};