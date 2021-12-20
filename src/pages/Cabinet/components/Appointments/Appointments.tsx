import React, {useEffect} from 'react';
import {UsersGrid} from "../../../../components/UsersGrid/UsersGrid";
import {useDispatch, useSelector} from "react-redux";
import CabinetIsEmpty from "../CabinetIsEmpty/CabinetIsEmpty";
import {UserCard} from "../../../../components/UserCard/UserCard";
import {UserCardPreloaded} from "../../../../components/UserCardPreloaded/UserCardPreloaded";
import {RootState} from "../../../../store";
import {fetchUserProfile} from "../../../../store/auth/authSlice";
import {fetchAppointments} from "../../../../store/appointments/appointmentsSlice";


//todo Array(10)
const PreloadedCards = () => {
    const cardsArray = []
    for (let i = 1; i < 10; i++) {
        cardsArray.push('')
    }
    return cardsArray.map(card => <UserCardPreloaded/>)
}

const Appointments: React.FC = () => {
    const dispatch = useDispatch()
    const userRole = useSelector((state: RootState) => state.authUser.data).role_name

    useEffect(() => {
        dispatch(fetchAppointments({userRole: userRole}))
    }, [userRole])

    const {appointments, total, isFetching} = useSelector((state: RootState) => state.appointments)

    const users = appointments.map(appointment =>
        <UserCard key={appointment.id} appointment={appointment}/>)

    return (
        <>
            {isFetching
                ? <UsersGrid>{PreloadedCards()}</UsersGrid>
                : total
                    ? <UsersGrid> {users}</UsersGrid>
                    : <CabinetIsEmpty/>
            }
        </>
    );
};
export default Appointments

