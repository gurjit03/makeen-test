import React from 'react'
import { Wrapper } from './Button.style'
import { Button as ButtonProps } from './Button.interface'

const Button: React.FC<ButtonProps> = props => {
	const { children, ...rest } = props
	return <Wrapper {...rest}>{children}</Wrapper>
}

export default Button
