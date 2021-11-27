import React from 'react';
import {Formik, Form} from 'formik';
import {SignFormInput} from "../SignFormInput";
import {SIGN_IN_PATH} from "../../../../constants/path";
import {useHistory} from "react-router-dom";
import {SignUpButtonText, SignUpTitle} from "../../../../constants/dictionary";
import {signUpValidationSchema} from "./validations";



export const SignUpForm = (props) => {

    const history = useHistory();

    function handleClick() {
        history.push(SIGN_IN_PATH);
    }
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={signUpValidationSchema}

                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        handleClick()
                    }, 400);

                }}
            >

                <Form className="sign-bar__form">
                    <div>
                        <div className="sign-bar__title">{SignUpTitle}</div>
                    </div>
                    <SignFormInput
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                    />

                    <SignFormInput
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />

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

                    <SignFormInput
                        name="confirmPassword"
                        type={props.showPassword.signFormShowConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        showPassword={props.showPassword}
                        toggleShowPassword={props.toggleShowPassword}
                    />

                    <button type="submit" className="sign-button sign-button_style">{SignUpButtonText}</button>
                </Form>
            </Formik>
        </>
    );
};