import { index, layout, type RouteConfig } from '@react-router/dev/routes';

export default [
	layout('./app/layouts/Base-Layout.tsx', [
		index('./app/routes/main.tsx'),
	]),
] satisfies RouteConfig;