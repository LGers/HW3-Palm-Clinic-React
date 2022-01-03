import React from 'react';
import { Table, TableHeader, StyledTableRow, ActionButton } from './TableResolutions.styles';
import { HEADER } from "../../constants/resolutions.dictionary";
import { ChevronDown, MoreVertical } from "react-feather";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ResolutionProps, TableResolutionsProps } from './TableResolutions.types';
import { Flex } from '../Flex/Flex';

const TableRow: React.FC<ResolutionProps> = ({resolutionData}) => {
    const role_name = useSelector((state: RootState) => state.authUser.data).role_name
    const isDoctor = role_name === 'doctor'
    const {next_appointment_date, visit_date, patient, doctor, resolution} = resolutionData
    const {last_name, first_name} = isDoctor ? patient : doctor

    return (
        <StyledTableRow>
            <div>{first_name}</div>
            <div>{last_name}</div>
            <div>{resolution}</div>
            <div>{moment(visit_date).format('MM/DD/YY')}</div>
            <div>{moment(next_appointment_date).format('MM/DD/YY')}</div>
          <Flex align={'center'} padding={'0'}>
            <ActionButton><MoreVertical/></ActionButton>
          </Flex>
        </StyledTableRow>)
}

export const TableResolutions: React.FC<TableResolutionsProps> = ({resolutions}) => {
    return (
        <>
          <TableHeader>
            <div>{HEADER.FIRST_NAME} <ChevronDown /></div>
            <div>{HEADER.LAST_NAME} <ChevronDown /></div>
            <div>{HEADER.RESOLUTION}</div>
            <div>{HEADER.VISIT_DATE} <ChevronDown /></div>
            <div>{HEADER.NEXT_VISIT} <ChevronDown /></div>
            <div>{HEADER.ACTIONS}</div>
          </TableHeader>
          <Table>
            {resolutions.map((resolution) =>
              <TableRow key={resolution.id} resolutionData={resolution} />)
            }
          </Table>
        </>
    );
};
