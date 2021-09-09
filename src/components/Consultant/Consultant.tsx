import React from 'react'
import { Consultant as IConsulant } from '../../interfaces/Consultant.interface'
import { CWrapper, CAvatar, CName } from './Consultant.style'

interface ConsultantProps extends IConsulant {
	wrapperComponent?: React.FC
}

const ConsultantWrapper: React.FC = ({ children }) => {
	return <CWrapper>{children}</CWrapper>
}

const Consultant: React.FC<ConsultantProps> = props => {
	const {
		wrapperComponent: Wrapper = ConsultantWrapper,
		avatar,
		firstName,
		lastName,
	} = props
	const name = `${firstName} ${lastName}`
	return (
		<Wrapper>
			<CAvatar src={avatar} />
			<CName>{name}</CName>
		</Wrapper>
	)
}

export default Consultant
