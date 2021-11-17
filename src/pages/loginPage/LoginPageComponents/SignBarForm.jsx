import React from "react";
import {RESTORE_PASSWORD_PATH, RESTORE_PASSWORD_SENT_PATH, SIGN_IN_PATH} from "../../../constants/path";
import {SignInForm} from "./Forms/SignInForm";
import {SignUpForm} from "./Forms/SignUpForm";
import {RestorePasswordForm} from "./Forms/RestorePasswordForm";
import {RestorePasswordSentForm} from "./Forms/RestorePasswordSentForm";

export const SignBarForm = (props) => {

    switch (props.link) {
        case SIGN_IN_PATH:
            return <SignInForm state={props.state} toggleShowPassword={props.toggleShowPassword}/>

        case RESTORE_PASSWORD_PATH:
            return <RestorePasswordForm/>

        case RESTORE_PASSWORD_SENT_PATH:
            return <RestorePasswordSentForm/>

        default :
            return <SignUpForm state={props.state} toggleShowPassword={props.toggleShowPassword}/>
    }
}