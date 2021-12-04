import React from 'react';
import {Title} from "../../../components/Title/Title";
import {Button} from "../../../components/Button/Button";
import {Plus} from "react-feather";
import {useSelector} from "react-redux";
import Select from "react-select";
import {useHistory} from "react-router-dom";
import {APPOINTMENT_PAGE_PATH} from "../../../constants/path";
import {SearchBlock, SearchInput, SearchLabel, StyledUserCabinetSearch} from "./userCabinetSearchStyles";
import {CabinetSelectStyles} from "./CabinetSelectStyles";


export const UserCabinetHeader = (props) => {
    const doctorOptions =[
        {value: 'Date', label: 'Date'},
        {value: 'Name', label: 'Name'}
    ]
    const patientOptions =[
        {value: 'upcoming', label: 'Upcoming'},
        {value: 'upcoming1', label: 'Upcoming'},
        {value: 'upcoming2', label: 'Upcoming'},
        {value: 'upcoming3', label: 'Upcoming'}
    ]
    const userRole = useSelector(state => state.user.current_user).role_name.toLowerCase()
    const titleText = userRole === 'patient' ? 'My Appointments' : 'My Patients'
    const labelText = userRole === 'patient' ? 'Show:' : 'Sort by:'
    const options = userRole === 'patient' ? patientOptions : doctorOptions

    const history = useHistory();
    const handleClick = () => {
        history.push(APPOINTMENT_PAGE_PATH);
    }

    return (
        <StyledUserCabinetSearch {...props}>
            <Title>{titleText}</Title>
            <SearchBlock>
                <SearchInput type="text" placeholder="Search"/>
                <SearchLabel>{labelText}</SearchLabel>

                <Select
                    styles={CabinetSelectStyles}
                    components={{
                        // DropdownIndicator,
                        IndicatorSeparator: null
                    }}
                    options={options}
                    isSearchable={false}
                />
                {userRole === 'patient'
                    ? <Button primary leftIcon onClick={handleClick}><Plus/> Create an appointment</Button>
                    : null
                }
            </SearchBlock>
        </StyledUserCabinetSearch>
    )
};