import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
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
    })

export const signInValidationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .required('Required')
            .min(6, 'Must be 6 characters or more'),
})

export const restorePasswordValidationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
})