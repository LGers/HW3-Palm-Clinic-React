import React from 'react';
import {Tab} from "../../components/Tab/Tab";
import {Flex} from "../../components/Flex/Flex";
import {useSelector} from "react-redux";

export const NavigationTabs = () => {

    const userRole = useSelector(state=> state.user.current_user).role_name.toLowerCase()

    const tabs = userRole === 'patient'
        ? [
            {key: 1, type: 'secondary', text: 'Profile'},
            {key: 2, type: 'primary', text: 'Appointments'},
            {key: 3, type: 'secondary', text: 'Resolutions'}
        ]
        : [
            {key: 1, type: 'primary', text: 'Patients'},
            {key: 2, type: 'secondary', text: 'Resolutions'}
        ]
    return (

        <Flex gap={'0 24px'} padding={'40px 0'}>
            {tabs.map(tab => <Tab key={tab.key} type={tab.type}>{tab.text}</Tab>)}
        </Flex>

    );
};