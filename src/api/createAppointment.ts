import {instance} from "./index";

const URL = {
    specializations: () => `/specializations/`,
    doctorsSpecialization: (id: string) => `/doctors/specialization/${id}`,
    appointmentsTimeFree: () => `/appointments/time/free`,
    appointments: () => `appointments`
}

export const fetchSpecializations = () => instance.get(URL.specializations())

export const fetchDoctorsSpecialization = (id: string) => instance.get(URL.doctorsSpecialization(id))

export const fetchTimesAppointment = (date: string, id: string) => instance.get(URL.appointmentsTimeFree(),
        {
            params: {
                date: date,
                id: id
            }
        })


//  todo rename values
type valuesType = {
    date: string
    reason: string
    note: string
    doctorID: string
}
// export const fetchCreateAppointment = (values: valuesType) =>  instance.post(URL.appointments(),
export const fetchCreateAppointment = ({date, reason, note, doctorID}:valuesType) =>  instance.post(URL.appointments(),
        {
            date,
            reason,
            note,
            doctorID,
        })
