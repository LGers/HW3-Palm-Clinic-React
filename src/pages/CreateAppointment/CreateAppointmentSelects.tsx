import Select from "react-select";
import React from "react";
import {useField} from "formik";
import {AppointmentSelectStyles} from "./CreateAppointmentSelects.styles";
import {useDispatch} from "react-redux";
import {ErrorValidation} from "../../components/ErrorValidation/ErrorValidation";
import {
    fetchDoctors,
    fetchTimes
} from "../../store/createAppointment/createAppointmentSlice";
import {CREATE_APPOINTMENT} from "../../constants/constants";
import moment from "moment";

type optionType = {
    value: string, label: string
}
type Props = {
    options: optionType[]
    name: string
    selectId: string
    isDisabled?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

//todo refactor it

/*
const handleChange = (
    option: { value: string, label: string },
    fieldName: string,
    dispatch: (action: any) => void,
    setValue: (optionValue: string) => void) => {
    if (fieldName === CREATE_APPOINTMENT.OCCUPATION) {
        const occupationId = option.value
        // dispatch(selectOccupation({occupationId}))
    }

    if (fieldName === CREATE_APPOINTMENT.DOCTOR_ID) {
        setValue(option.value)
        // const doctorId = option.value
        // dispatch(selectDoctor({doctorId}))
    }
}

const onChangeHandler = ((e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value)
})*/


export const CreateAppointmentSelect: React.FC<Props> = ({options, name, selectId, isDisabled}, onChange) => {
    const dispatch = useDispatch()
    const [field, meta, helpers] = useField(name);
    const {setValue} = helpers;


    return (
        <>
            <Select
                //todo TS any
                onChange={(option:any) => {
                    if (field.name === CREATE_APPOINTMENT.OCCUPATION) {
                        const occupationId = option.value
                        dispatch(fetchDoctors({occupationId}))
                    }

                    if (field.name === CREATE_APPOINTMENT.DOCTOR_ID) {
                        setValue(option.value)
                        const doctorId = option.value
                        dispatch(fetchTimes({day: moment().toISOString(), doctorId}))
                    }
                }}


                isDisabled={isDisabled}
                styles={AppointmentSelectStyles}
                options={options}
                id={selectId}
                instanceId={selectId}
            />
            {meta.touched && meta.error ? (
                <ErrorValidation>{meta.error}</ErrorValidation>
            ) : null}
        </>
    )
}