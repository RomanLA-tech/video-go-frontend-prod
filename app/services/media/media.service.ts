import axios from 'axios';

import { IMediaResponse } from '@/services/media/media.interface';

import { SERVER_API_URL, VIDEO, VIDEO_FILE } from '@/api/url.constants';

export const MediaService = {
	async uploadVideoFile(
		id: number,
		file: FormData,
		token: string,
		setValue?: (val: number) => void
	) {
		return axios.post<IMediaResponse>(
			`${SERVER_API_URL}/${VIDEO}/${VIDEO_FILE}/${id}`,
			file,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`
				},
				withCredentials: true,
				onUploadProgress: progressEvent => {
					if (setValue) {
						const progress = (progressEvent.loaded / progressEvent.total) * 100;
						setValue(Math.ceil(progress));
					}
				}
			}
		);
	}
};