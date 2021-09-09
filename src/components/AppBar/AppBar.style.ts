import styled from 'styled-components'
import { colors, verticalSpacing } from '../../config/jss'

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	height: 56px;
	background-color: ${colors.primary};
	padding-left: ${verticalSpacing}px;
`
