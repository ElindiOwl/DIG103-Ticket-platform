import axios from 'axios';

export const apiClient = axios.create({
	baseURL: 'http://localhost:5239/api/',
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