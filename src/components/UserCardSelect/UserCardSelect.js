import React from 'react';
import styled from "styled-components";
import Select, {components, DropdownIndicatorProps} from "react-select";
import {MoreVertical} from "react-feather";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUserAppointments, showErrorMessage, showSuccessMessage} from "../../store/userSlice";
import {API_URL} from "../../constants/constants";

const StyledUserCardSelect = styled.div`
`

const resolutionsOptions = [
    {value: 'create', label: 'Create a resolution'},
    {value: 'edit', label: 'Edit an appointment', isDisabled: true},
    {value: 'delete', label: 'Delete', color: 'red'},
]

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <MoreVertical/>
        </components.DropdownIndicator>
    );
};

const customStyles = {
    menu: () => ({
        position: "absolute",
        right: '16px',
        width: '272px'
    }),
    option: (provided, state) => ({
        ...provided,
        background: 'white',
        color: state.value === 'delete' ? 'red' : '#202225',
        '&:hover': !state.isDisabled
            ? {
                cursor: 'pointer',
                background: '#F9FAFF',
                borderRadius: '6px'
            }
            : {
                cursor: 'not-allowed',
            },

    }),

    control: () => ({
    }),

    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.1 : 1;
        const transition = 'opacity 300ms';
        const color = state.color ? 'red' : 'blue'

        return {...provided, opacity, transition, color};
    }
}

const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : ""
}



export const UserCardSelect = ({appointmentId, ...props}) => {
    const value = ''
    const dispatch = useDispatch()
    const token = localStorage.getItem('access_token')
    const apiUrl = `https://reactlabapi.herokuapp.com/api/appointments/`
    const userRole = useSelector(state => state.user.current_user).role_name.toLowerCase()

    const deleteAppointment = () => {
        axios.delete(`${apiUrl}${appointmentId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }
        )
            .then(response => {
                console.log('DeleteAppointment response.data', response.data)
                axios.get(`${API_URL}appointments/${userRole}/me?offset=0&limit=100`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        const userAppointments = response.data
                        dispatch(setUserAppointments({userAppointments}))
                    })
                    .catch(error =>
                        console.log('error', error)
                    )
                dispatch(showSuccessMessage())
                setTimeout(() => dispatch(showSuccessMessage()), 2000)
            })
            .catch(error => {
                    console.log('DeleteAppointmentError: ', error)
                    dispatch(showErrorMessage({errorMessage: 'Some Error'}))
                    setTimeout(() => dispatch(showErrorMessage({errorMessage: ''})), 2000)
                }
            )
    }

    const createResolution = () => {
        axios.delete(`${apiUrl}${appointmentId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }
        )
            .then(response => {
                console.log('DeleteAppointment response.data', response.data)
                axios.get(`${API_URL}appointments/${userRole}/me?offset=0&limit=100`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        const userAppointments = response.data
                        dispatch(setUserAppointments({userAppointments}))
                    })
                    .catch(error =>
                        console.log('error', error)
                    )
                dispatch(showSuccessMessage())
                setTimeout(() => dispatch(showSuccessMessage()), 2000)
            })
            .catch(error => {
                    console.log('DeleteAppointmentError: ', error)
                    dispatch(showErrorMessage({errorMessage: 'Some Error'}))
                    setTimeout(() => dispatch(showErrorMessage({errorMessage: ''})), 2000)
                }
            )
    }

    const handleChange = (option, appointmentId) => {
        console.log(option)
        switch (option.value) {
            case 'delete': deleteAppointment()
                break
            case 'create': createResolution()
                break
            default :
        }
        debugger
        // Delete appointment
        deleteAppointment()
        /*axios.delete(`${apiUrl}${appointmentId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }
        )
            .then(response => {
                console.log('DeleteAppointment response.data', response.data)
                axios.get(`${apiUrl}${userRole}/me?offset=0&limit=100`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        const userAppointments = response.data
                        dispatch(setUserAppointments({userAppointments}))
                    })
                    .catch(error =>
                        console.log('error', error)
                    )
                dispatch(showSuccessMessage())
                setTimeout(() => dispatch(showSuccessMessage()), 2000)
            })
            .catch(error => {
                    console.log('DeleteAppointmentError: ', error)
                    dispatch(showErrorMessage({errorMessage: 'Some Error'}))
                    setTimeout(() => dispatch(showErrorMessage({errorMessage: ''})), 2000)
                }
            )*/
    }

    return (
        <StyledUserCardSelect {...props}>
            <Select
                value={defaultValue(resolutionsOptions, value)}
                components={{
                    DropdownIndicator,
                    IndicatorSeparator: null
                }}
                styles={customStyles}
                options={resolutionsOptions}
                placeholder=''
                isSearchable={false}
                onChange={(option) => handleChange(option, appointmentId)}
                menuPlacement='auto'
            />
        </StyledUserCardSelect>
    )
};