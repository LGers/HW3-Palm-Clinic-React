import React from "react";
import {RESTORE_PASSWORD_PATH, SIGN_IN_PATH, SIGN_UP_PATH} from "../../../../constants/path";
import {AUTH_FORM, RESTORE_PASSWORD} from "../../../../constants/auth.dictionary";
import {useDispatch} from "react-redux";
import {Formik, FormikValues} from "formik";
import {Link} from "react-router-dom";
import {Title} from "../../../../components/Title/Title";
import {ForgotPassword, StyledAuthForm} from "./AuthForm.styles";
import {AuthInput} from "../AuthInput/AuthInput";
import {AuthButton} from "../../AuthPage.styles";
import {fetchSignUp, fetchSignIn} from "../../../../store/auth/authSlice";
import {signInValidationSchema, signUpValidationSchema} from "../../../../validations/auth.validation";

type Props = {
    link: string
    showPassword?: never
    toggleShowPassword?: never
}

const setAuthPageData = (link: string) => {
    switch (link) {
        case SIGN_UP_PATH:
            return AUTH_FORM.SIGN_UP
        case RESTORE_PASSWORD_PATH:
            return AUTH_FORM.RESTORE_PASSWORD
        default :
            return AUTH_FORM.SIGN_IN
    }
}

const authInputs = (inputs: typeof AUTH_FORM.SIGN_UP.INPUTS) => {
    return inputs.map(input =>
        <AuthInput
            key={input.NAME}
            name={input.NAME}
            id={input.NAME}
            type={input.TYPE}
            placeholder={input.PLACEHOLDER}
            iconUrl={input.ICON_URL}
        />
    )
}
export const AuthForm: React.FC<Props> = ({link}) => {
    const authPageData = setAuthPageData(link)

    const dispatch = useDispatch()

    function handleClick(values: FormikValues) {
        link === SIGN_IN_PATH
            ? dispatch(fetchSignIn(values))
            : dispatch(fetchSignUp(values))
    }

    return (
        <Formik
            initialValues={authPageData.INITIAL_VALUES}
            validationSchema={link === SIGN_IN_PATH
                ? signInValidationSchema
                : signUpValidationSchema
            }
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false);
                handleClick(values)
            }}
        >
            <StyledAuthForm>
                <div>
                    <Title>{authPageData.TITLE}</Title>
                </div>

                {link === RESTORE_PASSWORD_PATH && RESTORE_PASSWORD.TEXT}
                {authPageData.INPUTS.length && authInputs(authPageData.INPUTS)}

                {authPageData.BUTTON_TEXT && <AuthButton type={"submit"}>{authPageData.BUTTON_TEXT}</AuthButton>}

                {link === SIGN_IN_PATH &&
                <ForgotPassword>
                    <Link to={RESTORE_PASSWORD_PATH}>Forgot
                        Password?</Link>
                </ForgotPassword>
                }
            </StyledAuthForm>
        </Formik>
    )
}