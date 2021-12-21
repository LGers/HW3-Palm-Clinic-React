import React from 'react';
import {StyledButton} from "./Button.styles";

type Props = {
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
}


export const Button: React.FC<Props> = (props: Props) => {
    return (<StyledButton {...props}/>)
};


