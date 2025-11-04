import type { ParsedDate } from '../types';

export const parseDate = (rawDate: string): ParsedDate | null => {
	if (!rawDate) {
		return null
	}

	const date = new Date(rawDate);
	const monthNamesENG = ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December']

	return {
		date,
		day: date.getDate(),
		month: date.getMonth(),
		namedMonth: monthNamesENG[date.getMonth()],
		year: date.getFullYear()
	}
}