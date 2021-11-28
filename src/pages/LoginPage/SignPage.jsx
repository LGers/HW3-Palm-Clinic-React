import React, {useState} from 'react';
import "./LoginStyles.css"
import {SignBarForm} from "./LoginPageComponents/SignBarForm";
import {FooterBlock} from "./LoginPageComponents/FooterBlock";


export const SignPage = ({link}) => {
    const showPasswordInitialState = {
        signFormShowPassword: false,
        signFormShowConfirmPassword: false
    }

    const [showPassword, setShowPassword] = useState(showPasswordInitialState)

    const toggleShowPassword = (buttonId) => {
        buttonId === 'show_password_button'
            ? setShowPassword({...showPassword, signFormShowPassword: !showPassword.signFormShowPassword})
            : setShowPassword({
                ...showPassword, signFormShowConfirmPassword: !showPassword.signFormShowConfirmPassword
            })
    }

    return (
        <div className="sign-wrapper">
            <div className="sign-container">
                <div className="signBody">
                    <div className="signBarContainer">
                        <div className="sign-bar">
                            <SignBarForm link={link}
                                         showPassword={showPassword}
                                         toggleShowPassword={toggleShowPassword}
                            />
                            <FooterBlock link={link}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignPage