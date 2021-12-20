import React from "react";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {Header} from "../../components/Header/Header";
import {RootWrapper} from "../../components/RootWrapper/RootWrapper";
import {MainContent} from "../../components/MainContent/MainContent";
import {CreateAppointmentForm} from "./CreateAppointmentForm";
import {PopupMessage} from "../../components/PopupMessage/PopupMessage";
import {useDispatch, useSelector} from "react-redux";
import {toggleShowMessage} from "../../store/auth/authSlice";
import {RootState} from "../../store";

const CreateAppointment: React.FC = () => {
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
                    <CreateAppointmentForm/>
                </MainContent>
                {showPopupMessage && <PopupMessage title={popupMessageTitle} message={popupMessageText} isSuccess={isSuccess}
                                                   onClose={handleCloseMessage}/>}
            </Wrapper>
        </RootWrapper>
    )
}

export default CreateAppointment;