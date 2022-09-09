import { ChangeEvent } from 'react';

import { api } from '@/store/api/api';

import { toastError } from '@/utils/api.utils';

export const useUploadAvatar = () => {
	const [uploadAvatarFile, { isLoading: avatarIsLoading }] =
		api.useUpdateChannelAvatarMutation();

	const uploadAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
		try {
			const files = e.target.files;
			if (!files?.length) return;

			const file = new FormData();
			file.append('file', files[0]);

			await uploadAvatarFile(file);
		} catch (e) {
			toastError(e);
		}
	};

	return {
		uploadAvatar,
		avatarIsLoading
	};
};