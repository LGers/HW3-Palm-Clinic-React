import * as Yup from "yup";

export const appointmentValidationSchema = Yup.object({
    occupation: Yup.string()
        .required('Required'),
    doctor_id: Yup.string()
        .required('Required'),
})