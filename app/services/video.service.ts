import { IVideo } from '@/types/video.interface';

import { axiosConfigured } from '@/api/axios.config';
import { MOST_POPULAR, VIDEO } from '@/api/url.constants';

export const VideoService = {
	async getAllVideos() {
		return axiosConfigured.get<IVideo[]>(`/${VIDEO}`);
	},

	async getMostPopularVideos() {
		return axiosConfigured.get<IVideo[]>(`/${VIDEO}/${MOST_POPULAR}`);
	}
};