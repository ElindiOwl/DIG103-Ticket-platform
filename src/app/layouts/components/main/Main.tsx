import { Outlet } from 'react-router';

import style from './Main.module.scss'

export const Main = () => {
	return (
		<div className={style.main}>
			<Outlet/>
		</div>
	)
}