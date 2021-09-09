import styled from 'styled-components';
import { colors, fontSizes, verticalSpacing } from '../../config/jss';

export const Wrapper = styled.div``;

export const ProjectStatus = styled.p`
    font-size: ${fontSizes.xSmall}px;
    margin-bottom: ${verticalSpacing * 2}px;
`;

export const ProjectName = styled.h2`
    font-size: ${fontSizes.large}px;
    margin-bottom: ${verticalSpacing * 2}px;
`

export const ProjectDetailLabel = styled.p`
    color: ${colors.grey};
`;