import React from 'react';
import { Title } from "../../../../components/Title/Title";
import { Button } from "../../../../components/Button/Button";
import { Plus } from "react-feather";
import { useSelector } from "react-redux";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import { CREATE_APPOINTMENT_PAGE_PATH } from "../../../../constants/path";
import { SearchBlock, SearchInput, SearchLabel, CabinetSearch } from "./CabinetHeaderSearch.styles";
import { CabinetHeaderSelectStyles } from "./CabinetHeaderSelect.styles";
import {
    USER_ROLE,
    PATIENT_CABINET, DOCTOR_CABINET
} from "../../../../constants/constants";
import { RootState } from '../../../../store';

type OptionType = {
    label: string
    value: string
}

export const CabinetHeader: React.FC = () => {
    const userRole = useSelector((state: RootState) => state.authUser.data).role_name
    const cabinetHeaderData = userRole === USER_ROLE.PATIENT
        ? PATIENT_CABINET
        : DOCTOR_CABINET


    const history = useHistory();
    const handleClick = () => {
        history.push(CREATE_APPOINTMENT_PAGE_PATH);
    }

    const handleSortChange = (option: OptionType) => {
        //todo sort dispatch(fetchAppointments()) // by parameters from value
        console.log('sort options', option)
    }

    return (
        <CabinetSearch >
            <Title>{cabinetHeaderData.TITLE}</Title>
            <SearchBlock>
                <SearchInput type="text" placeholder="Search"/>
                <SearchLabel>{cabinetHeaderData.SELECT_LABEL}</SearchLabel>

                <Select
                    value={''}
                    styles={CabinetHeaderSelectStyles}
                    components={{
                        IndicatorSeparator: null
                    }}
                    options={cabinetHeaderData.SORT_OPTIONS}
                    isSearchable={false}
                    onChange={(option) => handleSortChange(option as OptionType)}
                />
                {userRole === USER_ROLE.PATIENT
                    ? <Button primary leftIcon onClick={handleClick}><Plus/> Create an appointment</Button>
                    : null
                }
            </SearchBlock>
        </CabinetSearch>
    )
};