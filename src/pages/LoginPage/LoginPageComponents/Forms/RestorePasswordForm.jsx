import React from 'react';
import {Formik, Form} from 'formik';
import {SignFormInput} from "../SignFormInput";
import {Link, useHistory} from "react-router-dom";
import {RESTORE_PASSWORD_SENT_PATH, SIGN_IN_PATH} from "../../../../constants/path";
import {restorePasswordButtonText, restorePasswordTitle} from "../../../../constants/dictionary";
import {restorePasswordValidationSchema} from "./validations";



export const RestorePasswordForm = (props) => {

    const history = useHistory();

    function handleClick() {
        history.push(RESTORE_PASSWORD_SENT_PATH);
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={restorePasswordValidationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        handleClick()
                    }, 400);
                }}
            >

                <Form className="sign-bar__form">
                    <div className="sign-bar__title">
                        <Link to={SIGN_IN_PATH} className="sign-bar__backArrow"> </Link>
                        <div>{restorePasswordTitle}</div>
                    </div>

                    <p className={'sign-bar__text'}>Please use your email address, and we'll send you the link to reset
                        your password</p>

                    <SignFormInput
                        name="email"
                        type="email"
                        placeholder="Email"
                    />

                    <button type="submit" className="sign-button sign-button_style">{restorePasswordButtonText}</button>

                </Form>
            </Formik>
        </>
    );
};