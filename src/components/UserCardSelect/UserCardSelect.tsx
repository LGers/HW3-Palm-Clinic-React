import React from 'react';
import Select, {components, DropdownIndicatorProps} from "react-select";
import {MoreVertical} from "react-feather";
import {useDispatch} from "react-redux";
import {changeAppointment} from "../../store/appointments/appointmentsSlice";
import {CANCELED, CONFIRMED, DELETE, PATCH} from "../../constants/api.dictionary";
import { customStyles } from './UserCardSelect.styles';
import { EDIT_CARD_OPTION } from '../../constants/appointment.dictionary';
import { Dispatch } from '@reduxjs/toolkit';
import { OptionType, UserCardSelectProps } from './UserCardSelect.types';

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props: DropdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            <MoreVertical/>
        </components.DropdownIndicator>
    );
};

const editCardOptions = [
    {value: 'create', label: EDIT_CARD_OPTION.CREATE, isDisabled: true},
    {value: 'editResolution', label: EDIT_CARD_OPTION.EDIT, isDisabled: true},
    {value: 'confirmAppointment', label: EDIT_CARD_OPTION.CONFIRM},
    {value: 'cancelAppointment', label: EDIT_CARD_OPTION.CANCEL},
    {value: 'delete', label: EDIT_CARD_OPTION.DELETE, color: 'red'},
]

const handleChange = (option: OptionType, id: string, dispatch: Dispatch) => {
    switch (option.value) {
        case 'delete':
            return dispatch(changeAppointment({id, request: DELETE}))
        case 'create': //todo createResolutionAppointment()
            return null
        case 'editResolution': //todo editResolutionAppointment()
            return null
        case 'editAppointment': //todo editResolutionAppointment()
            return null
        case 'confirmAppointment':
            return dispatch(changeAppointment({id, request: PATCH, status: CONFIRMED}))
        case 'cancelAppointment':
            return dispatch(changeAppointment({id, request: PATCH, status: CANCELED}))
        default :
    }
}

export const UserCardSelect: React.FC<UserCardSelectProps> = ({appointmentId}) => {
    const dispatch = useDispatch()

    return (
      <Select
        value={''}
        components={{
            DropdownIndicator,
            IndicatorSeparator: null
        }}
        styles={customStyles}
        options={editCardOptions}
        placeholder=''
        isSearchable={false}
        onChange={(option) => handleChange((option as OptionType), appointmentId, dispatch)}
        menuPlacement='auto'
      />
    )
};
