import React, {useEffect} from 'react';
import {DoctorCard} from "../../PatientPage/container/DoctorCard/DoctorCard";
import {UsersGrid} from "../../../components/UsersGrid/UsersGrid";
import axios from "axios";
import {setUserAppointments} from "../../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";


const Doctors = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://reactlabapi.herokuapp.com/api/appointments/patient/me?offset=0&limit=10',
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

    const appointments = useSelector(state => state.user.userAppointments)
    const Doctors = appointments.map(appointment => <DoctorCard key={appointment.id} appointment={appointment}/>)
    return (
        <UsersGrid>
            {Doctors}
        </UsersGrid>
    );
};
export default Doctors

