import process from 'node:process';

export const GET_BASE_API_URL = () => {
	const isServer = typeof window === 'undefined'
	const nodeEnv = isServer ? process.env.NODE_ENV : import.meta.env.MODE
	const isDev = nodeEnv === 'development'

	if (isDev) {
		return import.meta.env.VITE_API_DEV_URL
	}

	if (isServer) {
		return process.env.API_SERVER_URL
	}

	return import.meta.env.VITE_API_PROD_URL
}