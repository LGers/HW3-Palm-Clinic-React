import {useField} from "formik";
import {ShowPasswordButton} from "./ShowPasswordButton";
import React from "react";

export const SignFormInput = ({label, ...props}) => {

    const [field, meta] = useField(props);
    const inputIconsClassName = {
        firstName: "sign-bar__input_name-icon",
        lastName: "sign-bar__input_name-icon",
        name: "sign-bar__input_name-icon",
        email: 'sign-bar__input_email-icon',
        password: 'sign-bar__input_password-icon',
        confirmPassword: 'sign-bar__input_confirm-password-icon',
    }
    let inputClassName = "sign-bar__input " + inputIconsClassName[props.name]
    let passwordInputClassName = null

    if (props.name === 'password' || props.name === 'confirmPassword') {
        passwordInputClassName = "signForm_password password-block"

    }

    if (meta.touched && meta.error) inputClassName += " sign-bar__validationInputError"

    return (
        <>
            <div className={passwordInputClassName}>
                <input className={inputClassName} {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className=" sign-bar__validationError">{meta.error}</div>
                ) : null}
                {passwordInputClassName
                    ? <ShowPasswordButton inputId={props.name}
                                          state={props.state}
                                          toggleShowPassword={props.toggleShowPassword}
                    />
                    : ''}
            </div>
        </>
    )
        ;
};