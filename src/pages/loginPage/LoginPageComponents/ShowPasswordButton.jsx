import React from "react";

export const ShowPasswordButton = (props) => {

    let eyeButtonClassName = 'password-block__eye-button'

    if (props.inputId === "password") {
        props.showPassword.signFormShowPassword
            ? eyeButtonClassName += " password-block__eye-button_show"
            : eyeButtonClassName += " password-block__eye-button_hide"
    }

    if (props.inputId === "confirmPassword") {
        props.showPassword.signFormShowConfirmPassword
            ? eyeButtonClassName += " password-block__eye-button_show"
            : eyeButtonClassName += " password-block__eye-button_hide"
    }

    return <div id={"show_" + props.inputId + "_button"}
                onClick={(e) => props.toggleShowPassword(e.target.id)}
                className={eyeButtonClassName}/>
}