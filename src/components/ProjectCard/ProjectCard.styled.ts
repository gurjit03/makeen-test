import styled from 'styled-components';
import { colors, standardSizes, verticalSpacing } from '../../config/jss';

export const Wrapper = styled.article`
    padding: ${verticalSpacing}px;
    border-radius: ${verticalSpacing * 2}px;
    border: 2px solid ${colors.accent};
`;

export const ProjectName = styled.h2`
    font-size: ${standardSizes.large}px;
    margin: 0;
    margin-bottom: ${verticalSpacing}px;
`;

export const ProjectStatus = styled.p<{color: string}>`
    color: ${({color}) => color}
    font-weight: 800;
`;

export const ProjectEndDuration = styled.p`
    font-weight: 800;
`;