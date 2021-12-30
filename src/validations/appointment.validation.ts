import * as Yup from "yup";

export const appointmentValidationSchema = Yup.object({

    doctorID: Yup.string()
        .required('Please select Occupation adn doctor'),
    reason: Yup.string()
        .required('Reason field required'),
    date: Yup.string()
        .required('Required'),
    note: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(200, 'Must be 200 characters or less'),
})