import React from 'react';
import {useSelector} from "react-redux";
import moment from "moment";
import {Clipboard, Clock, Heart} from "react-feather";
import {
    Description,
    Icon,
    Name, NameAndStatus,
    Resolutions,
    Specialization, Status, StatusIcon,
    StyledUserCard,
    Time,
    UserInfo
} from "./UserCard.styles";
import {UserCardSelect} from "../UserCardSelect/UserCardSelect";
import {RootState} from '../../store';
import {STATUS} from "../../constants/appointment.dictionary";
import { AppointmentType } from '../../store/appointments/appointments.types';

type Props = {
    appointment: AppointmentType
}

const appointmentStatus = (status: string) => {
    switch (status) {
        case 'confirmed' :
            return STATUS.CONFIRMED
        case 'canceled' :
            return STATUS.CANCELED
        default :
            return STATUS.WAITING
    }
}

export const UserCard: React.FC<Props> = ({appointment}) => {
    const role_name = useSelector((state: RootState) => state.authUser.data).role_name
    const isDoctor = role_name === 'doctor'
    const {id, patient, doctor, visit_date, reason, status,} = appointment
    const {photo, specialization_name, last_name, first_name} = isDoctor ? patient : doctor
    const momentDate = moment(visit_date)
    const appointmentDate = momentDate.format('ddd DD MMM, YYYY')
    const appointmentTime = momentDate.format('h a') + ' - ' + momentDate.add(1, 'hour').format('h a')
    const IconDescription = role_name === 'doctor' ? <Clipboard/> : <Heart/>


    return (
        <StyledUserCard {...appointment}>
            <UserInfo>
                <img src={photo} alt="avatar"/>
                <NameAndStatus>
                    <Name>
                        {first_name} {last_name}
                    </Name>
                    {specialization_name
                        ?
                        <Specialization>
                            {specialization_name}
                        </Specialization>
                        :
                        <Status>
                            <StatusIcon status={status}/> <p>{appointmentStatus(status)}</p>
                        </Status>
                    }
                </NameAndStatus>

                {role_name === 'doctor' && <UserCardSelect appointmentId={id}/>}

            </UserInfo>
            <Resolutions>
                <Time>
                    <Icon><Clock/></Icon> {appointmentDate} {appointmentTime}
                </Time>
                <Description>
                    <Icon>{IconDescription}</Icon>{reason}
                </Description>
            </Resolutions>
        </StyledUserCard>
    )
};