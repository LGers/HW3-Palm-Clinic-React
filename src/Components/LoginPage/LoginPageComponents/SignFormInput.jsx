import {ShowPasswordButton} from "./ShowPasswordButton";
import React from "react";

export const SignFormInput = (props) => {
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