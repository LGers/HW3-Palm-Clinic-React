import React from 'react';
import {StyledButton} from "./Button.styles";
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props) => {
    return (<StyledButton {...props}/>)
};
