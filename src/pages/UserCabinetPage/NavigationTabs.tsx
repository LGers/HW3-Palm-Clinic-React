import React from 'react';
import {Tab} from "../../components/Tab/Tab";
import {Flex} from "../../components/Flex/Flex";
import {useSelector} from "react-redux";

export const NavigationTabs = () => {

    const userRole = useSelector(state=> state.currentLogonUser.user).role_name.toLowerCase()

    const tabs = userRole === 'patient'
        ? [
            {key: 1, variant: 'secondary', text: 'Profile'},
            {key: 2, variant: 'primary', text: 'Appointments'},
            {key: 3, variant: 'secondary', text: 'Resolutions'}
        ]
        : [
            {key: 1, variant: 'primary', text: 'Patients'},
            {key: 2, variant: 'secondary', text: 'Resolutions'}
        ]
    return (

        <Flex gap={'0 24px'} padding={'40px 0'}>
            {tabs.map(tab => <Tab key={tab.key} variant={tab.variant}>{tab.text}</Tab>)}
        </Flex>

    );
};