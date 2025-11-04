import { useCallback, useEffect, useRef, useState } from 'react';

export const useDropdown = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const menuRef = useRef<HTMLDivElement>(null)

	const toggleMenu = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [])

	const handleClick = useCallback((event: Event) => {
		const target = event.target as HTMLElement

		if (!menuRef.current) {
			return
		}

		if (!menuRef.current.contains(target)) {
			setIsOpen(false)
		}
	}, [])

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClick)
			return () => document.removeEventListener('click', handleClick)
		}
	}, [isOpen, handleClick])

	return { isOpen, menuRef, toggleMenu }
}