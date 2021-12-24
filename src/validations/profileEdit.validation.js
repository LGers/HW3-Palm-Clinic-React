import * as Yup from "yup";

export const doctorProfileValidationSchema = Yup.object({
    firstName: Yup.string()
        .max(20, 'Must be 15 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
    specialization: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required occupation'),
})

export const patientProfileValidationSchema = Yup.object({
    firstName: Yup.string()
        .max(20, 'Must be 15 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
})