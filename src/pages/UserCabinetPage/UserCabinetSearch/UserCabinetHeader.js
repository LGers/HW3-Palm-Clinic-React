import React from 'react';
import {Title} from "../../../components/Title/Title";
import {Button} from "../../../components/Button/Button";
import {Plus} from "react-feather";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {useHistory} from "react-router-dom";
import {MAKE_APPOINTMENT_PAGE_PATH} from "../../../constants/path";
import {SearchBlock, SearchInput, SearchLabel, StyledUserCabinetSearch} from "./userCabinetSearchStyles";
import {CabinetSelectStyles} from "./CabinetSelectStyles";
import axios from "axios";
// import {setUserAppointments} from "../../../store/userSlice";
import {API_URL} from "../../../constants/constants";
import {setUserAppointments} from "../../../store/appointmentsSlice";


export const UserCabinetHeader = (props) => {
    const value = ''
    const dispatch = useDispatch()
    const doctorOptions =[
        {value: 'Date', label: 'Date'},
        {value: 'Name', label: 'Name'}
    ]
    const patientOptions =[
        {value: 'upcoming', label: 'Upcoming'},
        {value: 'upcoming1', label: 'Upcoming1'},
        {value: 'upcoming2', label: 'Upcoming2'},
        {value: 'upcoming3', label: 'Upcoming3'}
    ]
    const userRole = useSelector(state => state.currentLogonUser.user).role_name.toLowerCase()
    const titleText = userRole === 'patient' ? 'My Appointments' : 'My Patients'
    const labelText = userRole === 'patient' ? 'Show:' : 'Sort by:'
    const options = userRole === 'patient' ? patientOptions : doctorOptions

    const token = localStorage.getItem('access_token')

    const history = useHistory();
    const handleClick = () => {
        history.push(MAKE_APPOINTMENT_PAGE_PATH);
    }

    const handleChange=(option)=> {

        let sortBy = ''
        switch (option.value) {
            case 'Name' :
                sortBy = 'firstNameSort'
                break
            default :
                sortBy = 'dateSort'
        }
        const order = 'Asc'
        const dateStatus = 'Upcoming'

        axios.get(
            `${API_URL}appointments/${userRole}/me?offset=0&limit=100&sortBy=${sortBy}&order=${order}&dateStatus=${dateStatus}`,
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
    }

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : ""
    }

    return (
        <StyledUserCabinetSearch {...props}>
            <Title>{titleText}</Title>
            <SearchBlock>
                <SearchInput type="text" placeholder="Search"/>
                <SearchLabel>{labelText}</SearchLabel>

                <Select
                    value={defaultValue(options, value)}
                    styles={CabinetSelectStyles}
                    components={{
                        // DropdownIndicator,
                        IndicatorSeparator: null
                    }}
                    options={options}
                    isSearchable={false}
                    onChange={(option)=>handleChange(option)}
                />
                {userRole === 'patient'
                    ? <Button primary leftIcon onClick={handleClick}><Plus/> Create an appointment</Button>
                    : null
                }
            </SearchBlock>
        </StyledUserCabinetSearch>
    )
};