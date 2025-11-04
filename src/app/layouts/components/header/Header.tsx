import { EventSelection } from 'widgets/event';
import { Button, LinkList, ProjectLogo, Text } from 'shared/ui';

import style from './Header.module.scss'

export const Header = () => {
	const headerLinks = [
		{
			path: '/events',
			title: 'All events'
		},
		{
			path: '/experiences',
			title: 'Experiences'
		},
		{
			path: '/faq',
			title: 'FAQ'
		}
	]

	return (
		<div className={style.header}>
			<div className={style.header__left}>
				<ProjectLogo/>
				<EventSelection/>
			</div>
			<div className={style.header__right}>
				<LinkList links={headerLinks}/>
				<Button variant={'blank'}><Text type={'h6'}>Log In</Text></Button>
			</div>
		</div>
	)
} 