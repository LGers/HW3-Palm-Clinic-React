import Select from "react-select";
import React from "react";
import {useField} from "formik";
import {AppointmentSelectStyles} from "./MakeAppointmentSelects.styles";
import {useDispatch} from "react-redux";
import {ErrorValidation} from "../../components/ErrorValidation/ErrorValidation";
import {selectDoctor, selectOccupation} from "../../store/makeAppointmentSlice";

type Props = {
    options: any[]
    name: string
    selectId: string
    state: any
    setState: any

}
export const AppointmentSelect: React.FC<Props> = ({options, name, selectId, state, setState}) => {
    const dispatch = useDispatch()
    const [field, meta, helpers] = useField(name);
    const {value} = meta;
    const {setValue} = helpers;

    const defaultValue = (options:any, value: any) => {
        return options ? options.find((option: { value: any; }) => option.value === value) : ""
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
                id={selectId}
                instanceId={selectId}
            />
            {meta.touched && meta.error ? (
                <ErrorValidation>{meta.error}</ErrorValidation>
            ) : null}
        </>
    )
}