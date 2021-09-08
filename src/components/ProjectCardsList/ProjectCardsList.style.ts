import styled from 'styled-components';
import { verticalSpacing } from '../../config/jss';

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: ${verticalSpacing * 4}px;
`;