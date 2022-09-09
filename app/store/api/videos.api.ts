import { IMediaResponse } from '@/services/media/media.interface';

import { IThumbnailDto, IVideo, IVideoDto } from '@/types/video.interface';

import { api } from '@/store/api/api';

import {
	GET_PRIVATE,
	THUMBNAIL,
	UPDATE_LIKES,
	UPDATE_VIEWS,
	VIDEO
} from '@/api//url.constants';


export const videoApi = api.injectEndpoints({
	endpoints: builder => ({
		getVideoBySearchTerm: builder.query<IVideo[], string>({
			query: searchTerm => ({
				url: `/${VIDEO}`,
				params: { searchTerm }
			})
		}),
		getVideoById: builder.query<IVideo, number>({
			query: id => `/${VIDEO}/${id}`,
			providesTags: (result, error, id) => [{ type: 'Video', id }]
		}),
		getVideoPrivate: builder.query<IVideo, number>({
			query: id => `/${VIDEO}/${GET_PRIVATE}/${id}`,
			providesTags: (result, error, id) => [{ type: 'Video', id }]
		}),
		createVideo: builder.mutation<string, void>({
			query: () => ({
				url: `/${VIDEO}`,
				method: 'POST'
			}),
			invalidatesTags: () => [{ type: 'Profile' }]
		}),
		updateVideo: builder.mutation<IVideo, IVideoDto>({
			query: ({ id, ...body }) => ({
				url: `/${VIDEO}/${id}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Video', id },
				{ type: 'Profile' }
			]
		}),
		uploadThumbnail: builder.mutation<IMediaResponse, IThumbnailDto>({
			query: ({ id, file }) => ({
				url: `/${VIDEO}/${THUMBNAIL}/${id}`,
				body: file,
				method: 'POST'
			}),
			invalidatesTags: (result, error, { id }) => [{ type: 'Video', id }]
		}),

		updateViews: builder.mutation<IVideo, number>({
			query: id => ({
				url: `/${VIDEO}/${UPDATE_VIEWS}/${id}`,
				method: 'PUT'
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Video', id }]
		}),
		updateLikes: builder.mutation<boolean, number>({
			query: id => ({
				url: `/${VIDEO}/${UPDATE_LIKES}/${id}`,
				method: 'PUT'
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Video', id }]
		}),
		deleteVideo: builder.mutation<void, number>({
			query: id => ({
				url: `/${VIDEO}/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: () => [{ type: 'Video' }, { type: 'Profile' }]
		})
	})
});