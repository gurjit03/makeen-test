import styled from 'styled-components'
import { colors, fontSizes, verticalSpacing } from '../../config/jss'

export const Wrapper = styled.div`
	padding: ${verticalSpacing * 4}px;
`

export const ProjectStatus = styled.p`
	font-size: ${fontSizes.xSmall}px;
	margin-bottom: ${verticalSpacing * 2}px;
`

export const ProjectName = styled.h2`
	font-size: ${fontSizes.large}px;
	margin-bottom: ${verticalSpacing * 2}px;
`

export const ProjectDetailLabel = styled.h3`
	color: ${colors.grey};
	margin-bottom: ${verticalSpacing}px;
`

export const ProjectDetailGroup = styled.div`
	margin-bottom: ${verticalSpacing * 2}px;
`

export const ProjectDescription = styled.p`
	font-size: ${fontSizes.large}px;
	letter-spacing: 1px;
`

export const ProjectConsultants = styled.ul`
	margin: 0;
	padding: 0;
`
