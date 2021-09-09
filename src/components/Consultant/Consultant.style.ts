import styled from 'styled-components';
import { fontSizes, verticalSpacing } from '../../config/jss';

export const CWrapper = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    margin-bottom: ${verticalSpacing * 2}px;
`;

export const CAvatar = styled.img`
    max-width: 60px;
    border-radius: 50%;
    display: inline-block;
    margin-right: ${verticalSpacing * 2}px;
`

export const CName = styled.p`
    font-size: ${fontSizes.large}px;
`;