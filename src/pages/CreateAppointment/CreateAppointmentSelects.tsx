import Select from "react-select";
import React from "react";
import { useField } from "formik";
import { AppointmentSelectStyles } from "./CreateAppointmentSelects.styles";
import { useDispatch } from "react-redux";
import { ErrorValidation } from "../../components/ErrorValidation/ErrorValidation";
import { fetchDoctors, fetchTimes } from "../../store/createAppointment/createAppointmentSlice";
import { CREATE_APPOINTMENT } from "../../constants/constants";
import moment from "moment";
import { CreateAppointmentSelectProps, OptionType } from './CreateAppointment.types';

export const CreateAppointmentSelect: React.FC<CreateAppointmentSelectProps> = (
  {
      options, name, selectId, isDisabled
  }) => {
    const dispatch = useDispatch()
    const [field, meta, helpers] = useField(name);
    const {setValue} = helpers;

    const handleChange = (option: OptionType) => {
        if (field.name === CREATE_APPOINTMENT.OCCUPATION) {
            const occupationId = option.value
            dispatch(fetchDoctors({occupationId}))
        }

        if (field.name === CREATE_APPOINTMENT.DOCTOR_ID) {
            setValue(option.value)
            const doctorId = option.value
            dispatch(fetchTimes({day: moment().toISOString(), doctorId}))
        }
    }

    return (
        <>
            <Select
                onChange={(option) => handleChange(option as OptionType)}
                isDisabled={isDisabled}
                styles={AppointmentSelectStyles}
                options={options}
                id={selectId}
                instanceId={selectId}
            />
            {meta.touched && meta.error && <ErrorValidation>{meta.error}</ErrorValidation>}
        </>
    )
}