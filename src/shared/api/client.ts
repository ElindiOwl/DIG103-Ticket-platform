import axios from 'axios';

import { BASE_API_URL } from '../config';

export const apiClient = axios.create({
	baseURL: BASE_API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	timeout: 5000
})

apiClient.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
)