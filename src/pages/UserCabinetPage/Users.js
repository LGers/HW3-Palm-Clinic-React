import React from 'react';
import {UsersGrid} from "../../components/UsersGrid/UsersGrid";
import {useSelector} from "react-redux";
import UserCabinetEmptyPage from "./UserCabinetEmptyPage/UserCabinetEmptyPage";
import {PopupMessage} from "../../components/PopupMessage/PopupMessage";
import {UserCard} from "../../components/UserCard/UserCard";
import {UserCardPreloaded} from "../../components/UserCardPreloaded/UserCardPreloaded";

const PreloadedCards = () => {
    const cardsArray = []
    for (let i = 1; i < 10; i++) {
        cardsArray.push('')
    }
    return cardsArray
}

const Users = () => {
    const appointments = useSelector(state => state.appointments.appointments)
    const totalAppointments = useSelector(state => state.appointments.total)
    const make_appointment = useSelector(state => state.makeAppointment.appointment)
    const emptyCards = PreloadedCards()
    const users = totalAppointments !== '0'
        ? appointments.map(appointment =>
            <UserCard key={appointment.id} appointment={appointment}/>
        )
        : emptyCards.map(c => <UserCardPreloaded/>)

    return (
        <>
            {!totalAppointments ? <UsersGrid> {users}</UsersGrid> : null}

            {totalAppointments === '0'
                ? <UserCabinetEmptyPage/>
                : <UsersGrid> {users}</UsersGrid>}
            {make_appointment.showSuccessMessage ? <PopupMessage/> : null}
        </>
    );
};
export default Users

