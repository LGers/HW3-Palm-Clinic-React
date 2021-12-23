import React from 'react';
import {AuthFooter} from "./Components/AuthFooter/AuthFooter";
import {AUTH_FOOTER} from "../../constants/auth.dictionary";
import {RESTORE_PASSWORD_PATH, SIGN_IN_PATH, SIGN_UP_PATH} from '../../constants/path';
import {AuthBar, AuthBarContent, AuthBody} from './AuthPage.styles';
import {AuthRestorePasswordForm} from "./Components/AuthForm/AuthRestorePasswordForm";

type Props ={
    link: string
}

const setAuthPageData = (link:string) => {
    switch (link) {
        case SIGN_IN_PATH:
            return AUTH_FOOTER.SIGN_IN
        case SIGN_UP_PATH:
            return AUTH_FOOTER.SIGN_UP
        case RESTORE_PASSWORD_PATH:
            return AUTH_FOOTER.RESTORE_PASSWORD
        default :
            return AUTH_FOOTER.RESTORE_PASSWORD_SENT
    }
}

export const AuthPage: React.FC<Props> = ({link}) => {
    const authPageData = setAuthPageData(link)

    return (
        <AuthBody>
            <AuthBarContent>
                <AuthBar>
                    <AuthRestorePasswordForm link={link}

                    />
                    <AuthFooter
                        footerLink={authPageData.FOOTER_LINK}
                        footerText={authPageData.FOOTER_TEXT}
                        footerLinkText={authPageData.FOOTER_LINK_TEXT}
                    />
                </AuthBar>
            </AuthBarContent>
        </AuthBody>
    );
};

export default AuthPage