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

const appointmentStatus =(status) => {
    let appointmentStatus = ''
    switch (status) {
        case 'confirmed' :
            return appointmentStatus = 'Appointment is confirmed'
        case 'canceled' :
            return appointmentStatus = 'Appointment is cancelled'
        default : return appointmentStatus ='Waiting for confirmation'
    }
}


export const UserCard = ({appointment, ...props}) => {
    // debugger
    const authUser = useSelector(state => state.authUser.data)
    // const appointmentCardRole = authUser.nameInRequest

    let appointmentCardRole = ''
    switch (authUser.role_name.toLowerCase()) {
        case 'doctor':
            appointmentCardRole = 'patient'
            break
        default:// 'patient':
            appointmentCardRole = 'doctor'

    }


    const momentDate = moment(appointment.visit_date)
    const appointmentDate = momentDate.format('ddd DD MMM, YYYY')
    const appointmentTime = momentDate.format('h a') + ' - ' + momentDate.add(1, 'hour').format('h a')

    let IconDescription = <Heart/>
    if (authUser.role_name === 'Doctor') {
        IconDescription = <Clipboard/>
    }


    return (
        <StyledUserCard {...props}>
            <UserInfo>
                <img src={appointment[appointmentCardRole].photo} alt="avatar"/>
                <NameAndStatus>
                    <Name>
                        {appointment[appointmentCardRole].first_name} {appointment[appointmentCardRole].last_name}
                    </Name>
                    {appointment[appointmentCardRole].specialization_name
                        ?
                        <Specialization>
                            {appointment[appointmentCardRole].specialization_name}
                        </Specialization>
                        :
                        <Status>
                            <StatusIcon status={appointment.status}/> <p>{appointmentStatus(appointment.status)}</p>
                        </Status>
                    }
                </NameAndStatus>
                {authUser.role_name.toLowerCase() === 'doctor'
                    ? <UserCardSelect appointmentId={appointment.id}/>
                    : null
                }

            </UserInfo>
            <Resolutions>
                <Time>
                    <Icon><Clock/></Icon> {appointmentDate} {appointmentTime}
                </Time>
                <Description>
                    <Icon>{IconDescription}</Icon>{appointment.reason}
                </Description>
            </Resolutions>
        </StyledUserCard>
    )
};