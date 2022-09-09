import { IComment, ICommentDto } from '@/types/comment.interface';

import { api } from '@/store/api/api';

import { COMMENT } from '@/api//url.constants';

export const commentApi = api.injectEndpoints({
	endpoints: builder => ({
		createComment: builder.mutation<IComment, ICommentDto>({
			query: body => ({
				url: `/${COMMENT}`,
				method: 'POST',
				body
			}),
			invalidatesTags: (result, error, { videoId }) => [
				{ type: 'Video', id: videoId }
			]
		})
	})
});