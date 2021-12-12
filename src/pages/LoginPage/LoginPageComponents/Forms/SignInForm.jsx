import React from 'react';
import {Formik, Form} from 'formik';
import {SignFormInput} from "../SignFormInput";
import {Link} from "react-router-dom";
import {RESTORE_PASSWORD_PATH} from "../../../../constants/path";
import {SignInButtonText, SignInTitle} from "../../../../constants/dictionary";
import {signInValidationSchema} from "./validations";
import {useDispatch} from "react-redux";
import {fetchLogonUser} from "../../../../store/currentUserSlice";


export const SignInForm = (props) => {
    const dispatch = useDispatch()

    function handleClick(values) {
        dispatch(fetchLogonUser(values))
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={signInValidationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        handleClick(values)
                    }, 400);

                }}
            >

                <Form className="sign-bar__form">
                    <div>
                        <div className="sign-bar__title">{SignInTitle}</div>
                    </div>

                    <SignFormInput
                        name="email"
                        type="email"
                        placeholder="Email"
                    />

                    <SignFormInput
                        name="password"
                        type={props.showPassword.signFormShowPassword ? 'text' : 'password'}
                        placeholder="Password"
                        showPassword={props.showPassword}
                        toggleShowPassword={props.toggleShowPassword}
                    />

                    <button type="submit" className="sign-button sign-button_style">{SignInButtonText}</button>

                    <div className={'sign-bar__forgotPassword'}>
                        <Link to={RESTORE_PASSWORD_PATH} className="sign-bar__forgotPassword">Forgot
                        Password?</Link>
                        </div>
                </Form>
            </Formik>
        </>
    );
};