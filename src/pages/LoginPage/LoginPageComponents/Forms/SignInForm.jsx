import React from 'react';
import {Formik, Form} from 'formik';
import {SignFormInput} from "../SignFormInput";
import {Link} from "react-router-dom";
import {PATIENT_PAGE_PATH, RESTORE_PASSWORD_PATH} from "../../../../constants/path";
import {useHistory} from "react-router-dom";
import {SignInButtonText, SignInTitle} from "../../../../constants/dictionary";
import {signInValidationSchema} from "./validations";
import axios from 'axios'


export const SignInForm = (props) => {

    const history = useHistory();

    function handleClick(values) {

        axios.post(
            'https://reactlabapi.herokuapp.com/api/auth/login',
            {
                "userName": values.email,
                "password": values.password
            })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                history.push(PATIENT_PAGE_PATH);
            })
            .catch((error) => {
                console.log('error.message ', error.message)
            })
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