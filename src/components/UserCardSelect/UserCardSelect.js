import React from 'react';
import Select, {components} from "react-select";
import {MoreVertical} from "react-feather";
import {useDispatch} from "react-redux";
import {changeAppointment} from "../../store/appointments/appointmentsSlice";
import {CANCELED, CONFIRMED, DELETE, PATCH} from "../../constants/api.dictionary";
//todo TS it
const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <MoreVertical/>
        </components.DropdownIndicator>
    );
};

const resolutionsOptions = [
    {value: 'create', label: 'Create a resolution', isDisabled: true},
    {value: 'editResolution', label: 'Edit an appointment', isDisabled: true},
    {value: 'confirmAppointment', label: 'Confirm an appointment'},
    {value: 'cancelAppointment', label: 'Cancel an appointment'},
    {value: 'delete', label: 'Delete', color: 'red'},
]

export const customStyles = {
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

    const handleChange = (option, id) => {
        switch (option.value) {

            case 'delete':
                dispatch(changeAppointment({id, request: DELETE}))
                break
            case 'create': //createResolutionAppointment()
                break
            case 'editResolution': //editResolutionAppointment()
                break
            case 'editAppointment': //editResolutionAppointment()
                break
            case 'confirmAppointment':
                dispatch(changeAppointment({id, request: PATCH, status: CONFIRMED}))
                break
            case 'cancelAppointment':
                dispatch(changeAppointment({id, request: PATCH, status: CANCELED}))
                break
            default :
        }
    }

    return (
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
    )
};