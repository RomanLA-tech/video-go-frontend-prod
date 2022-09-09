import axios from 'axios';

import { getContentType } from '@/utils/api.utils';

import { API_URL } from '@/api/url.constants';

export const axiosConfigured = axios.create({
	baseURL: API_URL,
	headers: getContentType()
});