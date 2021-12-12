import axios from "axios";
import {API_URL} from "../constants/constants";

export const fetchDeleteAppointment = (appointmentId: string) => {
    debugger
    return axios.delete(`${API_URL}appointments/${appointmentId}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => response)
        .catch(error => error)
}


export const fetchUpdateAppointmentStatus = (appointmentId: string, status:string) => {
    debugger
    return axios.patch(`${API_URL}appointments/${appointmentId}`,
        {
            status: status
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => response)
        .catch(error => error)
}

export const fetchCreateResolution = (appointmentId: string, userRole: string) => {

}