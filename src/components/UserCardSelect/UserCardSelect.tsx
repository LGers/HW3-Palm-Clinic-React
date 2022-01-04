import React from 'react';
import Select, { components, DropdownIndicatorProps } from "react-select";
import { MoreVertical } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { changeAppointment, createResolution } from "../../store/appointments/appointmentsSlice";
import { CANCELED, CONFIRMED, DELETE, PATCH } from "../../constants/api.dictionary";
import { customStyles } from './UserCardSelect.styles';
import { EDIT_CARD_OPTION } from '../../constants/appointment.dictionary';
import { Dispatch } from '@reduxjs/toolkit';
import { OptionType, UserCardSelectProps } from './UserCardSelect.types';
import { StyledUserCardSelect } from '../UserCard/UserCard.styles';
import { RootState } from '../../store';

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <MoreVertical />
    </components.DropdownIndicator>
  );
};

const editCardOptions = [
  {value: 'createResolution', label: EDIT_CARD_OPTION.CREATE},
  {value: 'editResolution', label: EDIT_CARD_OPTION.EDIT, isDisabled: true},
  {value: 'confirmAppointment', label: EDIT_CARD_OPTION.CONFIRM},
  {value: 'cancelAppointment', label: EDIT_CARD_OPTION.CANCEL},
  {value: 'delete', label: EDIT_CARD_OPTION.DELETE, color: 'red'},
]

const handleChange = (option: OptionType, id: string, dispatch: Dispatch, patientName: string) => {
  switch (option.value) {
    case 'delete':
      return dispatch(changeAppointment({id, request: DELETE}))
    case 'createResolution':
      return dispatch(createResolution({patientName}))
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

export const UserCardSelect: React.FC<UserCardSelectProps> = ({appointmentId, patientName}) => {
  const dispatch = useDispatch()

  return (
    <StyledUserCardSelect>
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
        onChange={(option) => handleChange((option as OptionType), appointmentId, dispatch, patientName)}
        menuPlacement='auto'
          />
      </StyledUserCardSelect>
    )
};
