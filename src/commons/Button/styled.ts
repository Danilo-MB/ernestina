import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

const DISABLED = css`
    cursor: not-allowed;
    background: #d4d4d4;
    color: #f5f5f5;
`

export const StyledButton = styled.button<ButtonProps>`
    font-size: 16px;
    width: 100px;
    padding: 10px 15px;
    cursor: pointer;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    outline: none;
    font-weight: 500;
    margin-right: 40px;
    transition: all 0.2s;
    color: ${(props) => props.color};
    disabled: ${(props) => props.disabled ? DISABLED : null};
`;