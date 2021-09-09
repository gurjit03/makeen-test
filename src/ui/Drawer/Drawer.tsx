import React from 'react'
import { Backdrop, DrawerWrapper } from './Drawer.style'

interface DrawerProps {
	isOpen: boolean
	onClose?: () => void
	children: React.ReactChild
}

const Drawer: React.FC<DrawerProps> = props => {
	const { isOpen, onClose = () => {}, children } = props
	const bodyRef = React.useRef<HTMLElement>(document.querySelector('body'))

	React.useEffect(() => {
		const bodyEl = bodyRef.current

		const updatePageScroll = () => {
			if (bodyEl) {
				if (isOpen) {
					bodyEl.style.overflow = 'hidden'
				} else {
					bodyEl.style.overflow = ''
				}
			}
		}
		updatePageScroll()

		return () => {
			if (bodyEl) {
				bodyEl.style.overflow = ''
			}
		}
	}, [isOpen])

	return (
		<div>
			<DrawerWrapper isOpen={isOpen}>{children}</DrawerWrapper>
			<Backdrop role='button' isOpen={isOpen} onClick={onClose} />
		</div>
	)
}

export default Drawer
