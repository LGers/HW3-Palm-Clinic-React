import React, {useEffect} from 'react';
import {DoctorCard} from "../../PatientPage/container/DoctorCard/DoctorCard";
import {UsersGrid} from "../../../components/UsersGrid/UsersGrid";
import axios from "axios";
import {setUserAppointments} from "../../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";
import PatientsEmptyPage from "../../PatientPage/container/PatientsEmptyPage";
import {PopupMessage} from "../../../components/PopupMessage/PopupMessage";


const Doctors = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://reactlabapi.herokuapp.com/api/appointments/patient/me?offset=0&limit=100',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(response => {
                const userAppointments = response.data
                dispatch(setUserAppointments({userAppointments}))
            })
            .catch(error =>
                console.log('error', error)
            )
    }, [])

    const appointments = useSelector(state => state.user.user_appointments)
    const doctors = appointments.map(appointment => <DoctorCard key={appointment.id} appointment={appointment}/>)
    const totalAppointments = useSelector(state => state.user.total)
    const make_appointment = useSelector(state => state.user.make_appointment)

    return (
        <>
            {totalAppointments
                ? <UsersGrid> {doctors}</UsersGrid>
                : <PatientsEmptyPage/>}
            {make_appointment.showSuccessMessage ? <PopupMessage/> : null}
        </>
    );
};
export default Doctors

