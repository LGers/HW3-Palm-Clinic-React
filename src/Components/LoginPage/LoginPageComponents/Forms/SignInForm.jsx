import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {SignFormInput} from "../SignFormInput";
import {Link} from "react-router-dom";
import {RESTORE_PASSWORD_PATH, SIGN_IN_PATH} from "../../path";
import { useHistory } from "react-router-dom";



export const SignInForm = (props) => {
    const signBarTitle = `Sign In`
    const signBarButtonText = 'Sign In'

    const history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('Required')
                        .min(6, 'Must be 6 characters or more'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        handleClick()
                        // window.location.href = '/';
                    }, 400);

                }}
            >

                <Form className="sign-bar__form">
                    <div>
                        <div className="sign-bar__title">{signBarTitle}</div>
                    </div>

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

                    <button type="submit" className="sign-button sign-button_style">{signBarButtonText}</button>

                    <div className={'sign-bar__forgotPassword'}>
                        <Link to={RESTORE_PASSWORD_PATH} className="sign-bar__forgotPassword">Forgot
                        Password?</Link>
                        </div>
                </Form>
            </Formik>
        </>
    );
};