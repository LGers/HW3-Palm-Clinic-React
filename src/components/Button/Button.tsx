import React from 'react';
import {StyledButton} from "./Button.styles";

type Props = {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    type?: 'submit' | 'button'
    width?: number
    height?: number
    primary?: any
    secondary?: any
    isDisabled?: boolean
    leftIcon?: any
    rightIcon?: any
    variant?: 'primary' | 'secondary' | 'disabled'
    onClick?:()=>void
    /* eslint-enable @typescript-eslint/no-explicit-any */
}

export const Button: React.FC<Props> = (props: Props) => {
    return (<StyledButton {...props}/>)
};


