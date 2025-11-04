import { Button, Text } from 'shared/ui';
import { Link } from 'react-router';
import type { FC } from 'react';
import { cn } from 'shared/lib';

import style from './Link-List.module.scss'

type listLink = {
    path: string;
    title: string;
}

type listType = 'row' | 'column';

interface LinkListProps {
    links: listLink[],
    type?: listType
}

const types = {
	column: style.linkList_column,
	row: style.linkList_row
}

export const LinkList: FC<LinkListProps> = ({ links, type = 'row' }) => {
	return (
		<div className={cn([
			style.linkList,
			types[type]
		])}>
			{links.map(({ path, title }) => (
				<Link to={path}>
					<Button variant={'blank'}>
						<Text type={'h6'}>{title}</Text>
					</Button>
				</Link>
			))}
		</div>
	)
}