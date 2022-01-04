import React, { useEffect } from 'react';
import { UsersGrid } from "../../../../components/UsersGrid/UsersGrid";
import { useDispatch, useSelector } from "react-redux";
import CabinetIsEmpty from "../CabinetIsEmpty/CabinetIsEmpty";
import { UserCard } from "../../../../components/UserCard/UserCard";
import { UserCardPreloaded } from "../../../../components/UserCardPreloaded/UserCardPreloaded";
import { RootState } from "../../../../store";
import { fetchAppointments } from "../../../../store/appointments/appointmentsSlice";
import { CabinetHeader } from "../CabinetHeader/CabinetHeader";
import { CreateResolutionModalWindow } from '../../../../components/CreateResolutionModalWindow/CreateResolutionModalWindow';


const PreloadedCards = () => {
    return Array(12)
      .fill('')
      .map(() => <UserCardPreloaded key={Math.random()} />)
}

const Appointments: React.FC = () => {
    const dispatch = useDispatch()
    const role_name1 = useSelector((state: RootState) => state.authUser.data).role_name
    const {role_name, first_name, last_name} = useSelector((state: RootState) => state.authUser.data)

    useEffect(() => {
        dispatch(fetchAppointments({userRole: role_name}))
    }, [role_name])

    const {
        appointments,
        total,
        isFetching,
        isCreateResolution
    } = useSelector((state: RootState) => state.appointments)

    const users = appointments.map(appointment =>
        <UserCard key={appointment.id} appointment={appointment}/>)

    return (
        <>
            <CabinetHeader/>
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

