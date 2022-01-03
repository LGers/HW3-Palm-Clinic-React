import React from 'react';
import { AuthForm } from "./Components/AuthForm/AuthForm";
import { AuthFooter } from "./Components/AuthFooter/AuthFooter";
import { AUTH_FOOTER } from "../../constants/auth.dictionary";
import { RESTORE_PASSWORD_PATH, SIGN_UP_PATH } from '../../constants/path';
import { AuthBar, AuthBarContent, AuthBody } from './AuthPage.styles';
import { PopupMessage } from "../../components/PopupMessage/PopupMessage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleShowMessage } from "../../store/auth/authSlice";
import { AuthPageProps } from './Auth.types';

const setAuthPageData = (link: string) => {
    switch (link) {
        case SIGN_UP_PATH:
            return AUTH_FOOTER.SIGN_UP
        case RESTORE_PASSWORD_PATH:
            return AUTH_FOOTER.RESTORE_PASSWORD
        default :
            return AUTH_FOOTER.SIGN_IN
    }
}

export const AuthPage: React.FC<AuthPageProps> = ({link}) => {
    const dispatch = useDispatch()
    const authPageData = setAuthPageData(link)
    const {
        isSuccess,
        showPopupMessage,
        popupMessageTitle,
        popupMessageText,
    } = useSelector((state: RootState) => state.authUser.popupMessage)
    const handleCloseMessage = () => {
        dispatch(toggleShowMessage())
    }

    return (
        <AuthBody>
            <AuthBarContent>
                <AuthBar>
                    <AuthForm link={link}/>
                    <AuthFooter
                        footerLink={authPageData.FOOTER_LINK}
                        footerText={authPageData.FOOTER_TEXT}
                        footerLinkText={authPageData.FOOTER_LINK_TEXT}
                    />
                </AuthBar>
            </AuthBarContent>
            {showPopupMessage &&
            <PopupMessage
                title={popupMessageTitle}
                message={popupMessageText}
                isSuccess={isSuccess}
                onClose={handleCloseMessage}
            />}
        </AuthBody>
    );
};

export default AuthPage
