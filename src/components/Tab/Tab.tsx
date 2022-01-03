import React from 'react';
import { StyledTab } from "./Tab.styles";
import { TabProps } from './Tab.types';

export const Tab: React.FC<TabProps> = (props) => {
    return <StyledTab {...props}/>
};
