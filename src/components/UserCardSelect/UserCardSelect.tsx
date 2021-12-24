import React from 'react';
import Select, {components, DropdownIndicatorProps} from "react-select";
import {MoreVertical} from "react-feather";
import {useDispatch} from "react-redux";
import {changeAppointment} from "../../store/appointments/appointmentsSlice";
import {CANCELED, CONFIRMED, DELETE, PATCH} from "../../constants/api.dictionary";
import { customStyles } from './UserCardSelect.styles';
import { EDIT_CARD_OPTION } from '../../constants/appointment.dictionary';

type Props = {
    appointmentId: string
}

type OptionType = {
    label: string
    value: string
}

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

export const UserCardSelect: React.FC<Props> = ({appointmentId}) => {
    const dispatch = useDispatch()

    const handleChange = (option: OptionType, id: string) => {
        switch (option.value) {

            case 'delete':
                dispatch(changeAppointment({id, request: DELETE}))
                break
            case 'create': //todo createResolutionAppointment()
                break
            case 'editResolution': //todo editResolutionAppointment()
                break
            case 'editAppointment': //todo editResolutionAppointment()
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
            value={''}
            components={{
                DropdownIndicator,
                IndicatorSeparator: null
            }}
            styles={customStyles}
            options={editCardOptions}
            placeholder=''
            isSearchable={false}
            onChange={(option) => handleChange((option as OptionType), appointmentId)}
            menuPlacement='auto'
            />
    )
};