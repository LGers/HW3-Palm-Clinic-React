import Select from "react-select";
import React from "react";
import {useField} from "formik";
import {AppointmentSelectStyles} from "./MakeAppointmentSelectsStyles";
import {useDispatch} from "react-redux";
import {ErrorValidation} from "../../components/ErrorValidation/ErrorValidation";
import {selectDoctor, selectOccupation} from "../../store/makeAppointmentSlice";

export const AppointmentSelect = ({onChange, options, state, setState, ...props}) => {
    const dispatch = useDispatch()
    const [field, meta, helpers] = useField(props.name);
    const {value} = meta;
    const {setValue} = helpers;

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : ""
    }

    return (
        <>
            <Select
                value={defaultValue(options, value)}
                onChange={(option) => {
                    setValue(option.value)

                    if (field.name === 'occupation') {
                        setState({...state, occupation: state.occupation = true})
                        const occupationId = option.value
                        dispatch(selectOccupation({occupationId}))
                    }

                    if (field.name === 'doctor') {
                        setState({...state, doctor: state.doctor = true})
                        const doctorId = option.value
                        dispatch(selectDoctor({doctorId}))
                    }


                    if (state.doctor && state.occupation) setState({
                        ...state,
                        isStepOneCompleted: state.isStepOneCompleted = true
                    })

                }}
                isDisabled={(field.name === 'doctor' && !state.occupation)}
                styles={AppointmentSelectStyles}
                options={options}
                id={props.selectId}
                instanceId={props.selectId}
            />
            {meta.touched && meta.error ? (
                <ErrorValidation>{meta.error}</ErrorValidation>
            ) : null}
        </>
    )
}