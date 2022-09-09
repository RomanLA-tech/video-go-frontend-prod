import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IUser, IUserDto } from '@/types/user.interface';

import { TypeRootState } from '@/store/store';

import {
	API_URL,
	AVATAR,
	BY_ID,
	EDIT,
	SUBSCRIBE,
	USER
} from '@/api//url.constants';


export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Video', 'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.accessToken;
			if (token) headers.set('Authorization', `Bearer ${token}`);
			return headers;
		},
		credentials: 'include'
	}),
	endpoints: builder => ({
		getProfile: builder.query<IUser, any>({
			query: () => `/${USER}/profile`,
			providesTags: () => [{ type: 'Profile' }]
		}),
		getProfileById: builder.query<IUser, number>({
			query: id => `/${USER}/${BY_ID}/${id}`,
			providesTags: (result, error, id) => [{ type: 'Profile', id }]
		}),
		subscribeToChannel: builder.mutation<boolean, number>({
			query: (channelId: number) => ({
				url: `/${USER}/${SUBSCRIBE}/${channelId}`,
				method: 'PATCH'
			}),
			invalidatesTags: () => [{ type: 'Profile' }]
		}),
		updateChannelInfo: builder.mutation<IUser, IUserDto>({
			query: ({ ...body }) => ({
				url: `/${USER}/${EDIT}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: () => [{ type: 'Profile' }]
		}),
		updateChannelAvatar: builder.mutation<IUser, FormData>({
			query: file => ({
				url: `/${USER}/${AVATAR}`,
				method: 'POST',
				body: file
			}),
			invalidatesTags: () => [{ type: 'Profile' }]
		})
	})
});