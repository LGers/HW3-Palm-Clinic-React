import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {SignFormInput} from "../SignFormInput";
import {Link} from "react-router-dom";
import {RESTORE_PASSWORD_PATH} from "../../path";
import {useHistory} from "react-router-dom";
import {SignInButtonText, SignInTitle} from "../../../../constants/dictionary";
import {signInValidationSchema} from "./validations";



export const SignInForm = (props) => {

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
                validationSchema={signInValidationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        handleClick()
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
                        type={props.state.signFormShowPassword ? 'text' : 'password'}
                        placeholder="Password"
                        state={props.state}
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