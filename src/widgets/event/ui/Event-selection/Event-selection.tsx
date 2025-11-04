import { useDropdown } from 'shared/lib';
import { Button, DropdownContent, DropdownTrigger, Vector } from 'shared/ui';
import { CurrentEvent, EventList } from 'entities/event';
import { EventChoice } from 'features/event';

import style from './Event-selection.module.scss'

export const EventSelection = () => {
	const { isOpen, toggleMenu, menuRef } = useDropdown()
	const vectorDirection = isOpen ? 'up' : 'down'

	return (
		<div className={style.eventChoice}>
			<Button variant='blank' onClick={toggleMenu}>
				<DropdownTrigger>
					<CurrentEvent/>
					<Vector affiliation='platform' direction={vectorDirection}/>
				</DropdownTrigger>
			</Button>
			{isOpen &&
				<div ref={menuRef} className={style.eventChoice__dropdown}>
					<DropdownContent>
						<EventChoice>
							<EventList/>
						</EventChoice>
					</DropdownContent>
				</div>
			}
		</div>
	)
}