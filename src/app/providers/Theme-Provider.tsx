import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const eventTheme = useSelector((state: RootState) => {
		return state.baseReducer.currentEvent.event?.theme
	})

	useEffect(() => {
		if (typeof window === 'undefined') return;

		if (eventTheme) {
			document.documentElement.style.setProperty('--color-theme-primary', eventTheme.primaryColor);
			document.documentElement.style.setProperty('--color-theme-primary-light', eventTheme.primaryColorLight);
			document.documentElement.style.setProperty('--color-theme-secondary', eventTheme.secondaryColor);
			document.documentElement.style.setProperty('--font-family-theme-text', eventTheme.fontFamily);
		}
	}, [eventTheme]);

	return <>
		{children}
	</>
}