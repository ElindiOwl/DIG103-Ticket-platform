import { Elindi, LinkList, ProjectLogo, Text } from 'shared/ui';

import style from './Footer.module.scss'

export const Footer = () => {
	const footerLinks = [
		{
			path: '/contacts',
			title: 'Contacts'
		},
		{
			path: '/media',
			title: 'Media'
		},
		{
			path: '/terms',
			title: 'Terms and conditions'
		}
	]

	return (
		<div className={style.footer}>
			<div className={style.footer__logos}>
				<div className={style.footer__logos_platform}>
					<ProjectLogo type={'small'}/>
					<Text>net Tickets Club</Text>
				</div>
				<div className={style.footer__logos_me}>
					<Elindi/>
					<Text>ElindiOwl</Text>
				</div>
			</div>
			<LinkList links={footerLinks}/>
		</div>
	)
}