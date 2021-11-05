import React, {useState} from 'react';
import "./LoginStyles.css"
import {SignBarForm} from "./LoginPageComponents/SignBarForm";
import {FooterBlock} from "./LoginPageComponents/FooterBlock";


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