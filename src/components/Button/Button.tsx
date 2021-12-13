import React from 'react';
import {StyledButton} from "./button.styles";

type Props1 = {
    width?: number | undefined
    height?: number | undefined
    primary?: string | undefined
    secondary?: string | undefined
    isDisabled?: boolean | undefined
    leftIcon?: string | undefined
    rightIcon?: string | undefined
}


// @ts-ignore
export const Button: React.FC<Props1> = (props: Props1) => {
    return (<StyledButton {...props}/>)
};


