import React from 'react';
import {StyledButton} from "./Button.styles";

type Props = {
    width?: number
    height?: number
    primary?: string
    secondary?: string
    isDisabled?: boolean
    leftIcon?: string
    rightIcon?: string
    variant?: string
    onClick?:()=>void
}


export const Button: React.FC<Props> = (props: Props) => {
    return (<StyledButton {...props}/>)
};


