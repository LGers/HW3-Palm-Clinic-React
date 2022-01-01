import React from 'react';
import { StyledFlex } from "./Flex.styles";
import { FlexProps } from './Flex.types';

export const Flex: React.FC<FlexProps> = (props) => {
    return <StyledFlex {...props} />
};
