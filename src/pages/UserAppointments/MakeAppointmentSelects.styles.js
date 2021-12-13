import styled from "styled-components";
import {Field} from "formik";

export const occupationOptions = [
    {value: 'therapist', label: 'Therapist'},
    {value: 'dent', label: 'Dent'},
    {value: 'doctor', label: 'Doctor'},
]

export const doctorsOptions = [
    {value: 'doctorId1', label: 'John Milton'},
    {value: 'doctorId2', label: 'Miranda Nelson'},
    {value: 'doctorId3', label: 'Miranda Nelson'},
    {value: 'doctorId4', label: 'Miranda Nelson'},
]


export const StyledAppointmentLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #000000;
`

export const StyledAppointmentField = styled(Field)`
  padding: 16px 24px;
  background: #FFFFFF;
  border: 1px solid #DCE0EC;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;
  font-size: 17px;
  line-height: 24px;
  color: #202225;


  &:focus {
    border: 1px solid #7297FF;
  }
`

export const AppointmentSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        borderRadius: '8px',
        padding: '4px',
        border: '1px solid white',
        boxShadow: '0px 4px 32px rgba(218, 228, 255, 0.16)',

    }),


    menuList: (provided, state) => ({
        ...provided,
        border: 'none',
        margin: '4px',
        borderRadius: '8px',
        padding: '4px',
        '&:hover': {
            borderRadius: '6px'
        },
    }),

    option: (provided, state) => ({
        ...provided,
        border: 'none',
        '&:hover': {
            background: '#F9FAFF',
            borderRadius: '6px'
        },
        cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    }),
    control: (provided, state) => ({
        ...provided,
        border: '1px solid #DCE0EC',
        boxShadow: '0px 4px 32px rgba(218, 228, 255, 0.16)',
        borderRadius: '8px',
        padding: '8px 8px',
        marginBottom: '40px',
        fontSize: '17px',
        '&:hover': {
            borderColor: '#7297FF'
        },
        '&:focus ': {
            borderColor: '#7297FF'
        }

    }),

}