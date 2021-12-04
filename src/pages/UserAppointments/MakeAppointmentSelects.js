import Select from "react-select";
import React from "react";
import {useField} from "formik";
import {AppointmentSelectStyles} from "./MakeAppointmentSelectsStyles";
import axios from "axios";
import {selectDoctor, selectOccupation, setDoctors} from "../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";

export const AppointmentSelect = ({onChange, options, state, setState, ...props}) => {
    const dispatch = useDispatch()
    const [field, meta, helpers] = useField(props.name);
    const {value} = meta;
    const {setValue} = helpers;

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : ""
    }


    const makeAppointment = useSelector(state => state.user.make_appointment)

    return (
        <>
            <Select
                value={defaultValue(options, value)}

                onChange={(option) => {
                    const occupationId = makeAppointment.occupation_id
                    console.log('occupationId', occupationId)
                    if (option.value && field.name === 'occupation') {
                        axios.get(`https://reactlabapi.herokuapp.com/api/doctors/specialization/${option.value}`,
                            {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                                }
                            })
                            .then(response => {
                                const doctors = response.data
                                dispatch(setDoctors({doctors}))

                            })
                            .catch(error =>
                                console.log(error)
                            )
                    }
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