import axios from "axios";
import {API_URL} from "./index";

export const getOccupations = (dispatch: (param: any) => void) => {
    const token: string | null = localStorage.getItem('access_token');
    return axios.get(`${API_URL}specializations`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response)
        .catch(error => error)

}

export const fetchOccupationDoctors = (option: string) => {
    return axios.get(`${API_URL}doctors/specialization/${option}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => response)
        .catch(error => error)
}


export const fetchTimesAppointment = (isoDate: string, selectedDoctorId: string) => {
    return axios.get(`${API_URL}appointments/time/free?date=${isoDate}&doctorID=${selectedDoctorId}`,

        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => response)
        .catch(error => error)
}


export const fetchCreateAppointment = (values: any) => {
    const token: string | null = localStorage.getItem('access_token');
    return axios.post(`${API_URL}appointments`,
        {
            date: values.time,
            reason: values.reasonForVisit,
            note: values.note,
            doctorID: values.doctor
            // values
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then(response => response)
        .catch(error => error)
}