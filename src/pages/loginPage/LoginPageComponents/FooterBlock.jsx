import {Link} from "react-router-dom";
import React from "react";
import {SIGN_IN_PATH, SIGN_UP_PATH} from "../../../constants/path";

export const FooterBlock = (props) => {
    let footerText = ''
    let footerLink = ''
    let footerLinkText = ''

    switch (props.link) {
        case SIGN_IN_PATH:
            footerText = `Don't have an account?`
            footerLink = SIGN_UP_PATH
            footerLinkText = 'Sign Up'
            break
        default :/*SIGN_UP_PATH:*/
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