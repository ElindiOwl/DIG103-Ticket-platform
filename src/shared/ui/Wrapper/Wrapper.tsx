import type { FC, ReactNode } from 'react';


import style from './Wrapper.module.scss';

interface WrapperProps {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({
	children,
	header = null,
	footer = null,
}) => {
	return (
		<div className={style.wrapper}>
			<header className={style.wrapper__header}>
				{header}
			</header>
			<main className={style.wrapper__main}>
				{children}
			</main>
			<footer className={style.wrapper__footer}>
				{footer}
			</footer>
		</div>
	);
};