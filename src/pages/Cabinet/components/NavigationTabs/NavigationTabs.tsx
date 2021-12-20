import React from 'react';
import {Tab} from "../../../../components/Tab/Tab";
import {Flex} from "../../../../components/Flex/Flex";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import {useHistory} from "react-router-dom";
import {DOCTOR_TABS, PATIENT_TABS, TabType} from "../../../../constants/tabs.dictionary";

export const NavigationTabs = () => {
    const history = useHistory()
    const pathname = history.location.pathname
    const userRole = useSelector((state: RootState) => state.authUser.data).role_name
    const tabs: Array<TabType> = (userRole === 'patient') ? PATIENT_TABS : DOCTOR_TABS

    return (

        <Flex gap={'0 24px'} padding={'40px 0'}>
            {tabs.map((tab) =>
                <Tab
                    to={tab.path}
                    key={tab.key}
                    variant={pathname === tab.path ? 'primary' : "secondary"}
                >{tab.text}</Tab>)
            }
        </Flex>

    );
};