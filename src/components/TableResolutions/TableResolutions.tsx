import React from 'react';
import {TableHeader, TableRow} from './TableResolutions.styles';
import {HEADER} from "../../constants/resolutions.dictionary";
import {ChevronDown, MoreVertical} from "react-feather";
import {ResolutionsType} from "../../store/resolutions/resolutionsSlice";
import moment from "moment";

type Props = {
    resolutions: ResolutionsType[]
    userRole: 'doctor' | 'patient' | 'admin'
}
const res = (resolutions: ResolutionsType[], userRole: 'doctor' | 'patient' | 'admin') => {

    return (
        resolutions.map((resolution: ResolutionsType) =>
            <TableRow key={resolution.id}>
                <div>{resolution[userRole].first_name}</div>
                <div>{resolution[userRole].last_name}</div>
                <div>{resolution.resolution}</div>
                <div>{moment(resolution.visit_date).format('MM/DD/YY')}</div>
                <div>{moment(resolution.next_appointment_date).format('MM/DD/YY')}</div>
                <div><MoreVertical/></div>
            </TableRow>)
    )
}

export const TableResolutions: React.FC<Props> = ({resolutions, userRole}) => {

    return (
        <div>
            <TableHeader>
                <div>{HEADER.FIRST_NAME} <ChevronDown/></div>
                <div>{HEADER.LAST_NAME} <ChevronDown/></div>
                <div>{HEADER.RESOLUTION}</div>
                <div>{HEADER.VISIT_DATE} <ChevronDown/></div>
                <div>{HEADER.NEXT_VISIT} <ChevronDown/></div>
                <div>{HEADER.ACTIONS}</div>
            </TableHeader>

            {res(resolutions, userRole)}
        </div>
    );
};