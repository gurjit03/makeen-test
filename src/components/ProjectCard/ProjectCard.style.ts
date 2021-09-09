import styled from 'styled-components';
import { colors, fontSizes, verticalSpacing } from '../../config/jss';

export const Wrapper = styled.article`
    padding: ${verticalSpacing * 2}px;
    border-radius: ${verticalSpacing * 2}px;
    border: 2px solid ${colors.accent};
    background-color: ${colors.white};
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`;

export const ProjectDuration = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: ${verticalSpacing * 2}px;
`;

export const ProjectName = styled.h2`
    font-size: ${fontSizes.large}px;
    margin: 0;
    margin-bottom: ${verticalSpacing}px;
`;

export const ProjectStatus = styled.p<{color: string}>`
    color: ${({color}) => color}
    font-weight: 800;
    margin-bottom: ${verticalSpacing * 2}px;
`;

export const ProjectEndDuration = styled.p`
    font-weight: 800;
`;

export const ProjectAction = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: ${verticalSpacing * 2}px;
`;