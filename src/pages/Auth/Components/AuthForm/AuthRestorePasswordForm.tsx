import React, {useState} from "react";
import {RESTORE_PASSWORD_PATH, SIGN_IN_PATH, SIGN_UP_PATH} from "../../../../constants/path";
import {
    AUTH_FORM,
    RESTORE_PASSWORD,
} from "../../../../constants/dictionary";

import {Formik} from "formik";
import {Link} from "react-router-dom";
import {Title} from "../../../../components/Title/Title";
import {AuthText, Email, ForgotPassword, StyledAuthForm} from "./AuthForm.styles";
import {AuthInput} from "../AuthInput/AuthInput";
import {ChevronLeft} from "react-feather";
import {restorePasswordValidationSchema} from "../../../../validations/auth.validation";
import { AuthButton } from "../../AuthPage.styles";



type Props ={
    link: string
    showPassword?: any
    toggleShowPassword?: any
}

const setAuthPageData = (link:string) => {
    switch (link) {
        case SIGN_IN_PATH:
            return AUTH_FORM.SIGN_IN
        case SIGN_UP_PATH:
            return AUTH_FORM.SIGN_UP
        case RESTORE_PASSWORD_PATH:
            return AUTH_FORM.RESTORE_PASSWORD
        default :
            return AUTH_FORM.RESTORE_PASSWORD_SENT

    }
}


const authInputs = (inputs: typeof AUTH_FORM.SIGN_UP.INPUTS)=> {
    return inputs.map(input =>
        <AuthInput
            name={input.NAME}
            id={input.NAME}
            type={input.TYPE}
            placeholder={input.PLACEHOLDER}
            iconUrl={input.ICON_URL}
        />
    )
}
export const AuthRestorePasswordForm: React.FC<Props> =({link,...props})=>{
    const authPageData = setAuthPageData(link)
    const [email, setEmail] = useState('')

    function handleClick(values:any) {
        setEmail(values.email)
    }
    return(
        <>
            {!email ?
                <>
                <Formik
                    initialValues={authPageData.INITIAL_VALUES}
                    validationSchema={restorePasswordValidationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false);
                        handleClick(values)
                    }}
                >
                    <StyledAuthForm>
                        <Title><span><Link to={SIGN_IN_PATH}><ChevronLeft/></Link></span>{authPageData.TITLE}</Title>

                        <AuthText>{RESTORE_PASSWORD.TEXT}</AuthText>

                        {authPageData.INPUTS.length ? authInputs(authPageData.INPUTS) : null}

                        {authPageData.BUTTON_TEXT ?
                            <AuthButton type={"submit"}>{authPageData.BUTTON_TEXT}</AuthButton>
                            : null}

                        {link === SIGN_IN_PATH ?
                            <ForgotPassword>
                                <Link to={RESTORE_PASSWORD_PATH}>Forgot
                                    Password?</Link>
                            </ForgotPassword>
                            :null}
                    </StyledAuthForm>
                </Formik>
                </>
                :
            <>
                <Title><span><Link to={SIGN_IN_PATH}><ChevronLeft/></Link></span>{authPageData.TITLE}</Title>

                <AuthText>
                    {RESTORE_PASSWORD.SEND_TEXT_BEFORE} {' '}
                    <Email>{email}</Email>
                    {RESTORE_PASSWORD.SEND_TEXT_AFTER}
                </AuthText>
            </>}
    </>

    )
}