import { ChangeEvent } from 'react';

import { videoApi } from '@/store/api/videos.api';

import { toastError } from '@/utils/api.utils';

export const useUploadThumbnail = (id: number) => {
	const [uploadThumbnailFile, { isLoading: thumbnailIsLoading }] =
		videoApi.useUploadThumbnailMutation();

	const uploadThumbnail = async (e: ChangeEvent<HTMLInputElement>) => {
		try {
			const files = e.target.files;
			if (!files?.length) return;

			const file = new FormData();
			file.append('file', files[0]);

			await uploadThumbnailFile({ id, file });
		} catch (e) {
			toastError(e);
		}
	};

	return {
		uploadThumbnail,
		thumbnailIsLoading
	};
};