import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {SignFormInput} from "../SignFormInput";
import {SIGN_IN_PATH} from "../../path";
import {useHistory} from "react-router-dom";



export const SignUpForm = (props) => {
    const signBarTitle = `Sign Up`
    const signBarButtonText = 'Sign Up'

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
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required')
                        .min(2, 'Must be 2 characters or more'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required')
                        .min(2, 'Must be 2 characters or more'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('Required')
                        .min(6, 'Must be 6 characters or more'),
                    confirmPassword: Yup.string()
                        .required('Required')
                        .min(6, 'Must be 6 characters or more'),

                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        handleClick()
                    }, 400);

                }}
            >

                <Form className="sign-bar__form">
                    <div>
                        <div className="sign-bar__title">{signBarTitle}</div>
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
                        type={props.state.signFormShowPassword ? 'text' : 'password'}
                        placeholder="Password"
                        state={props.state}
                        toggleShowPassword={props.toggleShowPassword}
                    />

                    <SignFormInput

                        name="confirmPassword"
                        type={props.state.signFormShowConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        state={props.state}
                        toggleShowPassword={props.toggleShowPassword}
                    />


                    <button type="submit" className="sign-button sign-button_style">{signBarButtonText}</button>
                </Form>
            </Formik>
        </>
    );
};