import React from 'react'
import CompanyLogo from '../CompanyLogo/CompanyLogo'
import { Wrapper } from './AppBar.style'

const AppBar: React.FC = () => {
	return (
		<Wrapper>
			<CompanyLogo />
		</Wrapper>
	)
}

export default AppBar
