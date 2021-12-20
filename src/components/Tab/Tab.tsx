import React from 'react';
import {StyledTab} from "./Tab.styles";

type Props = {
    to: string
    width?: number
    height?: number
    variant?: 'secondary' | 'primary' | 'disabled'
    primary?: string
    secondary?: string
    isDisabled?: string
    leftIcon?: string
    rightIcon?: string
}

export const Tab: React.FC<Props> = (props: Props) => {
    return <StyledTab {...props}/>
};