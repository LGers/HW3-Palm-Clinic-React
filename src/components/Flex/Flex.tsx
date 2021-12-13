import React from 'react';
import {StyledFlex} from "./flex.styles";

type Props = {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit' | 'initial' | 'unset'
    align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'inherit' | 'initial' | 'unset'
    justify?:
        'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'baseline' |
        'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' |
        'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset'
    margin?: string
    gap?: string
    padding?: string
};

export const Flex: React.FC<Props> = (props: Props) => {
    return <StyledFlex {...props}/>
};



