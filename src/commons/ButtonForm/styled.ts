import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

const DISABLED = css`
    cursor: not-allowed;
    background: #d4d4d4;
    color: #f5f5f5;
`

export const StyledButton = styled.button<ButtonProps>`
    font-size: 16px;
    width: 200px;
    padding: 10px;
    cursor: pointer;
    background-color: transparent;
    border-color: gray;
    overflow: hidden;
    outline: none;
    transition: all 0.2s;    
    color: ${(props) => props.color};
    disabled: ${(props) => props.disabled ? DISABLED : null};
`;