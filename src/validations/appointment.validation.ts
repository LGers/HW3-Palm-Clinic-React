import * as Yup from "yup";

export const appointmentValidationSchema = Yup.object({

    doctorID: Yup.string()
        .required('Required'),
    reason: Yup.string()
        .required('Required'),
    date: Yup.string()
        .required('Required'),
    note: Yup.string()
        .max(200, 'Must be 200 characters or less'),
})