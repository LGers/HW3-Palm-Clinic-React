import React, {useCallback, useState} from 'react';
import "./LoginStyles.css"
import {Link} from "react-router-dom";

const MAIN_PAGE_PATH = '/'
const SIGN_IN_PATH = '/sign-in'
const SIGN_UP_PATH = '/sign-up'
const RESTORE_PASSWORD_PATH = '/restore-password'
const RESTORE_PASSWORD_SENT_PATH = '/restore-password-sent'

// const toggleShowPassword = (e) => {
//     e.preventDefault()
//     console.log(e.target.id)
//     debugger
//     if (e.target.id === "show_password_button") {
//         // const passwordInput = document.getElementById('password')
//         this.setState(state.signFormShowPassword=true)
//         // passwordInput.type === "password" ? passwordInput.type = "text" : passwordInput.type = "password"
//     }
// }

const ShowPasswordButton = (props) => {
    document.addEventListener("click", (e) => {
        e.preventDefault()
    })
    return <button id={"show_" + props.inputId + "_button"}
                   onClick={(e) => props.toggleShowPassword(e.target.id)}
                   className="password-block__eye-button"/>
}

const SignFormInput = (props) => {
    const {id, errorMsgId, inputType, placeholder, iconClass, name} = props
    let divClass = ''
    name === 'password' ? divClass = 'signForm_password password-block' : divClass = ''

    return (
        <div className={divClass}>
            < input id={id}
                    className={"sign-bar__input " + iconClass}
                    type={inputType}
                    placeholder={placeholder}
                    name={name}
            />
            <p id={errorMsgId} className="sign-form__validation displayNone">Name must be
                at least 2 characters</p>
            {name === 'password'
                ? <ShowPasswordButton inputId={id}
                                      state={props.state}
                                      toggleShowPassword={props.toggleShowPassword}
                />
                : ''}
        </div>
    )
}
const SignButton = (props) => {
    if (props.text) return (
        <button className="sign-button sign-button_style">{props.text}</button>
    )

    return ''
}

const FooterBlock = (props) => {
    let footerText = ''
    let footerLink = ''
    let footerLinkText = ''

    switch (props.link) {
        case SIGN_IN_PATH:
            footerText = `Don't have an account?`
            footerLink = SIGN_UP_PATH
            footerLinkText = 'Sign Up'
            break
        case SIGN_UP_PATH:
            footerText = `Already have an account?`
            footerLink = SIGN_IN_PATH
            footerLinkText = 'Sign In'
    }
    if (footerText) return (
        <div className="sign-bar__have-account">
            {footerText}
            <Link to={footerLink} className="sign-bar__have-account_link">{footerLinkText}</Link>
        </div>
    )
    return ''
}

const SignBarForm = (props) => {
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
export const SignPage = (props) => {
    const initialState = {
        signFormShowPassword: false,
        signFormShowConfirmPassword: false
    }

    const [state, setState] = useState(initialState)

    const toggleShowPassword = (buttonId) => {
        if (buttonId === 'show_password_button') {
            setState({...state, signFormShowPassword: !state.signFormShowPassword})
        } else if (buttonId === 'show_confirm_password_button') {
            setState({
                ...state, signFormShowConfirmPassword: !state.signFormShowConfirmPassword
            })
        }
    }

    return (
        <div className="sign-wrapper">
            <div className="sign-container">
                <div className="signBody">
                    <div className="signBarContainer">
                        <div className="sign-bar">
                            <SignBarForm link={props.link}
                                         state={state}
                                         toggleShowPassword={toggleShowPassword}
                            />
                            <FooterBlock link={props.link}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignPage