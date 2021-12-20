import React from 'react';
import {Title} from "../../../../components/Title/Title";
import {Button} from "../../../../components/Button/Button";
import {Plus} from "react-feather";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {useHistory} from "react-router-dom";
import {CREATE_APPOINTMENT_PAGE_PATH} from "../../../../constants/path";
import {SearchBlock, SearchInput, SearchLabel, CabinetSearch} from "./CabinetHeaderSearch.styles";
import {CabinetHeaderSelectStyles} from "./CabinetHeaderSelect.styles";
import {
    USER_ROLE,
    PATIENT_CABINET, DOCTOR_CABINET
} from "../../../../constants/constants";


export const CabinetHeader = (props) => {
    const value = ''
    const dispatch = useDispatch()

    const userRole = useSelector(state => state.authUser.data).role_name.toLowerCase()

    const cabinetHeaderData = userRole === USER_ROLE.PATIENT
        ? PATIENT_CABINET
        : DOCTOR_CABINET


    const history = useHistory();
    const handleClick = () => {
        history.push(CREATE_APPOINTMENT_PAGE_PATH);
    }

    const handleChange = (value) => {
        //todo dispatch(fetchAppointments()) // by parameters from value
    }

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : ""
    }

    return (
        <CabinetSearch {...props}>
            <Title>{cabinetHeaderData.TITLE}</Title>
            <SearchBlock>
                <SearchInput type="text" placeholder="Search"/>
                <SearchLabel>{cabinetHeaderData.SELECT_LABEL}</SearchLabel>

                <Select
                    value={defaultValue(cabinetHeaderData.SORT_OPTIONS, value)}
                    styles={CabinetHeaderSelectStyles}
                    components={{
                        IndicatorSeparator: null
                    }}
                    options={cabinetHeaderData.SORT_OPTIONS}
                    isSearchable={false}
                    onChange={(value) => handleChange(value)}
                />
                {userRole === USER_ROLE.PATIENT
                    ? <Button primary leftIcon onClick={handleClick}><Plus/> Create an appointment</Button>
                    : null
                }
            </SearchBlock>
        </CabinetSearch>
    )
};