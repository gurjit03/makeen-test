import styled, { css } from 'styled-components'
import { colors, verticalSpacing } from '../../config/jss'
import { Button as ButtonProps } from './Button.interface'

const variantOptions: any = {
	contained: {
		primary: {
			backgroundColor: colors.primary,
			color: colors.white,
			borderColor: 'transparent',
		},
		secondary: {
			backgroundColor: colors.secondary,
			color: colors.white,
			borderColor: 'transparent',
		},
	},
	outlined: {
		primary: {
			backgroundColor: colors.white,
			borderColor: colors.primary,
			color: colors.primary,
		},
		secondary: {
			backgroundColor: colors.white,
			borderColor: colors.secondary,
			color: colors.secondary,
		},
	},
}

export const Wrapper = styled.button<ButtonProps>`
  padding: ${verticalSpacing}px;
  margin: 0;
  border: none;
  outline: none;
  border: 2px solid;
  border-radius: ${verticalSpacing}px;
  display: inline-block;
  margin-bottom: ${props => props.marginBottom || 0}px
  &:hover {
    cursor: pointer;
  }
   ${({ variant, color: buttonColor }) =>
				variant &&
				variantOptions[variant] &&
				css`
					background-color: ${variantOptions[variant][buttonColor].backgroundColor};
					color: ${variantOptions[variant][buttonColor].color};
					border-color: ${variantOptions[variant][buttonColor].borderColor};
				`}
`
