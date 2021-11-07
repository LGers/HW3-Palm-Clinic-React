import React from "react";

export const SignButton = (props) => {
    if (props.text) return (
        <button type="submit" className="sign-button sign-button_style">{props.text}</button>
    )

    return ''
}