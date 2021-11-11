import React from 'react';
import {Link} from "react-router-dom";
import {SIGN_IN_PATH} from "../../path";


export const RestorePasswordSentForm = () => {

    return (
        <div className="sign-bar__form">
            <div className="sign-bar__title">
                <Link to={SIGN_IN_PATH} className="sign-bar__backArrow"> </Link>
                <div>Restore Password</div>
            </div>

            <p className={'sign-bar__text'}>
                An email has been sent to example@exam.com. Check your inbox, and click the reset link provided
            </p>
        </div>
    );
};