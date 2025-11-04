import type { FC } from 'react';

import type { ParsedDate } from '../../../lib';

import style from './Date-Range-Formatter.module.scss'

interface DateRangeFormatterProps {
    start: ParsedDate | null;
    end: ParsedDate | null;
}

export const DateRangeFormatter: FC<DateRangeFormatterProps> = ({ start, end }) => {
	if (start && end != null) {
		if (start.day === end.day && start.month === end.month && start.year === end.year) {
			return (
				<>
					<span className={style.formatter__month}>{start.namedMonth}</span>
					{' '}
					<span className={style.formatter__day}>{start.day}</span>
					{' '}
					<span className={style.formatter__year}>{start.year}</span>
				</>
			);
		}

		if (start.month === end.month && start.year === end.year) {
			return (
				<>
					<span className={style.formatter__month}>{start.namedMonth}</span>
					{' '}
					<span className={style.formatter__day}>{start.day}</span>
					<span className={style.formatter__separator}>-</span>
					<span className={style.formatter__day}>{end.day}</span>
					{' '}
					<span className={style.formatter__year}>{start.year}</span>
				</>
			);
		}

		return (
			<>
				<span className={style.formatter__month}>{start.namedMonth}</span>
				{' '}
				<span className={style.formatter__day}>{start.day}</span>
				{' '}
				<span className={style.formatter__year}>{start.year}</span>
				<span className={style.formatter__separator}> - </span>
				<span className={style.formatter__month}>{end.namedMonth}</span>
				{' '}
				<span className={style.formatter__day}>{end.day}</span>
				{' '}
				<span className={style.formatter__year}>{end.year}</span>
			</>
		);
	}
}