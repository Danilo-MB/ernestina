import React from 'react';
import { StyledButton } from './styled';

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    color?: string;
    disabled?: boolean;
};

const Button = (props: ButtonProps) => {

    const { onClick, children, color, disabled } = props;

    return (
        <StyledButton onClick={onClick} color={color} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;

