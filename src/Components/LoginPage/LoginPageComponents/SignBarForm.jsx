import {SignFormInput} from "./SignFormInput";
import {SignButton} from "./SignButton";
import {Link} from "react-router-dom";
import React from "react";
import {MAIN_PAGE_PATH, RESTORE_PASSWORD_PATH, RESTORE_PASSWORD_SENT_PATH, SIGN_IN_PATH, SIGN_UP_PATH} from "../path";

export const SignBarForm = (props) => {
    let signBarTitle = ''
    let signBarButtonText = ''

    switch (props.link) {
        case SIGN_IN_PATH:
            signBarTitle = `Sign In`
            signBarButtonText = 'Sign In'
            return (
                <form action={MAIN_PAGE_PATH} className="sign-bar__form">
                    <div>
                        <div className="sign-bar__title">{signBarTitle}</div>
                    </div>
                    <SignFormInput
                        id={'email'}
                        errorMsgId={'emailErrorMsg'}
                        inputType={'email'}
                        placeholder={'Email'}
                        iconClass={'sign-bar__input_email-icon'}
                    />
                    <SignFormInput
                        id={'password'}
                        errorMsgId={'passwordErrorMsg'}
                        inputType={props.state.signFormShowPassword ? 'text' : 'password'}
                        name={'password'}
                        placeholder={'Password'}
                        iconClass={'sign-bar__input_password-icon'}
                        state={props.state}
                        toggleShowPassword={props.toggleShowPassword}
                    />

                    <SignButton text={signBarButtonText} link={props.link}/>
                    <div className={'sign-bar__forgotPassword'}>
                        <Link to={RESTORE_PASSWORD_PATH} className="sign-bar__have-account_link">Forgot Password?</Link>
                    </div>
                </form>
            )

        case RESTORE_PASSWORD_PATH:
            signBarTitle = `Restore Password`
            signBarButtonText = 'Send Reset Link'
            return (
                <form action={RESTORE_PASSWORD_SENT_PATH} className="sign-bar__form">
                    <div>
                        <div className="sign-bar__title">{signBarTitle}</div>
                    </div>

                    <p className={'sign-bar__text'}>Please use your email address, and we'll send you the link to reset
                        your password</p>

                    <SignFormInput
                        id={'email'}
                        errorMsgId={'emailErrorMsg'}
                        inputType={'email'}
                        placeholder={'Email'}
                        iconClass={'sign-bar__input_email-icon'}
                    />

                    <SignButton text={signBarButtonText} link={RESTORE_PASSWORD_SENT_PATH}/>
                </form>

            )
        case RESTORE_PASSWORD_SENT_PATH:
            signBarTitle = `Restore Password`
            return (
                <form className="sign-bar__form">
                    <div>
                        <div className="sign-bar__title">{signBarTitle}</div>
                    </div>

                    <p className={'sign-bar__text'}>An email has been sent to example@exam.com. Check your inbox, and
                        click the reset link provided</p>

                    <SignButton text={signBarButtonText} link={RESTORE_PASSWORD_SENT_PATH}/>
                </form>
            )
        default : //'/sign-up'
            signBarTitle = `Sign Up`
            signBarButtonText = 'Sign Up'
            return (
                <form action={SIGN_IN_PATH} className="sign-bar__form">
                    <div>
                        <div className="sign-bar__title">{signBarTitle}</div>
                    </div>
                    <SignFormInput
                        id={'firstName'}
                        errorMsgId={'firstNameErrorMsg'}
                        inputType={'input'}
                        placeholder={'First Name'}
                        iconClass={'sign-bar__input_name-icon'}
                    />
                    <SignFormInput
                        id={'lastName'}
                        errorMsgId={'lastNameErrorMsg'}
                        inputType={'input'}
                        placeholder={'Last Name'}
                        iconClass={'sign-bar__input_name-icon'}
                    />
                    <SignFormInput
                        id={'email'}
                        errorMsgId={'emailErrorMsg'}
                        inputType={'email'}
                        placeholder={'Email'}
                        iconClass={'sign-bar__input_email-icon'}
                    />
                    <SignFormInput
                        id={'password'}
                        errorMsgId={'passwordErrorMsg'}
                        inputType={props.state.signFormShowPassword ? 'text' : 'password'}
                        name={'password'}
                        placeholder={'Password'}
                        iconClass={'sign-bar__input_password-icon'}
                        state={props.state}
                        toggleShowPassword={props.toggleShowPassword}
                    />
                    <SignFormInput
                        id={'confirm_password'}
                        errorMsgId={'confirmPasswordErrorMsg'}
                        inputType={props.state.signFormShowConfirmPassword ? 'text' : 'password'}
                        name={'password'}
                        placeholder={'Confirm Password'}
                        iconClass={'sign-bar__input_confirm-password-icon'}
                        state={props.state}
                        toggleShowPassword={props.toggleShowPassword}

                    />

                    <SignButton text={signBarButtonText} link={SIGN_UP_PATH}/>
                </form>
            )
    }

    return ''
}