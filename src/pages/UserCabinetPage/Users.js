import React from 'react';
import {UsersGrid} from "../../components/UsersGrid/UsersGrid";
import {useSelector} from "react-redux";
import UserCabinetEmptyPage from "./UserCabinetEmptyPage/UserCabinetEmptyPage";
import {PopupMessage} from "../../components/PopupMessage/PopupMessage";
import {UserCard} from "../../components/UserCard/UserCard";


const Users = () => {

    const appointments = useSelector(state => state.user.user_appointments)
    const totalAppointments = useSelector(state => state.user.total)
    const make_appointment = useSelector(state => state.user.make_appointment)
    const doctors = appointments.map(appointment => <UserCard key={appointment.id} appointment={appointment}/>)

    return (
        <>
            {totalAppointments
                ? <UsersGrid> {doctors}</UsersGrid>
                : <UserCabinetEmptyPage/>}
            {make_appointment.showSuccessMessage ? <PopupMessage/> : null}
        </>
    );
};
export default Users

