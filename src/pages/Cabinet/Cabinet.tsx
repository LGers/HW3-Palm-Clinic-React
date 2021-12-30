import React from "react";
import { Header } from "../../components/Header/Header";
import { MainContent } from "../../components/MainContent/MainContent";
import { NavigationTabs } from "./components/NavigationTabs/NavigationTabs";
import Appointments from "./components/Appointments/Appointments";
import { RootWrapper } from "../../components/RootWrapper/RootWrapper";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { PopupMessage } from "../../components/PopupMessage/PopupMessage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleShowMessage } from "../../store/auth/authSlice";
import {
    CABINET_APPOINTMENTS_PATH, CABINET_PROFILE_PATH,
    CABINET_RESOLUTION_PATH,
} from "../../constants/path";
import PatientResolutions from "./components/PatientResolutions/PatientResolutions";
import { Profile } from "./components/Profile/Profile";
import { CabinetProps } from './Cabinet.types';

const content = (link: string) => {
    switch (link) {
        case CABINET_APPOINTMENTS_PATH:
            return <Appointments/>
        case CABINET_RESOLUTION_PATH:
            return <PatientResolutions/>
        case CABINET_PROFILE_PATH:
            return <Profile/>
        default :
            return <Appointments/>

    }
}

const Cabinet: React.FC<CabinetProps> = ({link}) => {
    const dispatch = useDispatch()
    const handleCloseMessage = () => {
        dispatch(toggleShowMessage())
    }

    const {
        isSuccess,
        showPopupMessage,
        popupMessageTitle,
        popupMessageText
    } = useSelector((state: RootState) => state.authUser.popupMessage)

    return (
        <RootWrapper>
            <Wrapper>
                <Header/>
                <MainContent>
                    <NavigationTabs/>
                    {content(link)}
                </MainContent>
                {showPopupMessage &&
                <PopupMessage
                    title={popupMessageTitle}
                    message={popupMessageText}
                    isSuccess={isSuccess}
                    onClose={handleCloseMessage}
                />}
            </Wrapper>
        </RootWrapper>
    );
}

export default Cabinet;