import * as Yup from "yup";

export const profileValidationSchema = Yup.object({
    first_name: Yup.string()
        .max(20, 'Must be 15 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
    last_name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
    occupation: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required occupation'),
})