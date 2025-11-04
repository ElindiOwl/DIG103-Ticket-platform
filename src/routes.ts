import type { RouteConfig } from '@react-router/dev/routes';
import { index, layout } from '@react-router/dev/routes';

export default [
	layout('./app/layouts/Base-Layout.tsx', [
		index('./app/routes/main.tsx'),
	]),
] satisfies RouteConfig;