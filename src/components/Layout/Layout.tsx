import React from 'react'
import AppBar from '../AppBar/AppBar'

interface LayoutProps {
	children: React.ReactChild
}

const Layout: React.FC<LayoutProps> = props => {
	const { children } = props
	return (
		<div>
			<AppBar />
			{children}
		</div>
	)
}

export default Layout
