import Select from "react-select";
import React from "react";
import {useField} from "formik";
import {AppointmentSelectStyles} from "./MakeAppointmentSelectsStyles";

export const AppointmentSelect = ({onChange, options, state, setState, ...props}) => {
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
                    if (field.name === 'doctor') {
                        setState({...state, doctor: state.doctor = true})
                    }
                    if (field.name === 'occupation') {
                        setState({...state, occupation: state.occupation = true})
                    }

                    if (state.doctor && state.occupation) setState({
                        ...state,
                        isStepOneCompleted: state.isStepOneCompleted = true
                    })
                }}
                isDisabled={(field.name === 'doctor' && !state.occupation) ? true : false}
                styles={AppointmentSelectStyles}
                options={options}
                id={props.selectId}
                instanceId={props.selectId}


            />
            {meta.touched && meta.error ? (
                <div className=" sign-bar__validationError">{meta.error}</div>
            ) : null}
        </>
    )
}