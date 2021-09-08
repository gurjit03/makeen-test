import styled, {css} from 'styled-components'
import { colors } from '../../config/jss';

const transitionSpeed = 0.7

export const DrawerWrapper = styled.div<{isOpen: boolean}>`
transition: transform ${transitionSpeed}s ease;
    background-color: ${colors.white};
    max-width: 400px;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    z-index: 1000;
    overflow: auto;
    position: fixed;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    transition: transform ${transitionSpeed}s ease;
    ${({isOpen}) => isOpen && css`
        top: 0;
        right: 0;
        transform: translateX(0);
    `}
`;

export const Backdrop = styled.div<{isOpen: boolean}>`
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity ${transitionSpeed}s ease,
        visibility ${transitionSpeed}s ease;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    position: fixed;
    pointer-events: none;
	z-index: 0;
    ${({isOpen}) => isOpen && css`
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        z-index: 999;
    `}
`;
