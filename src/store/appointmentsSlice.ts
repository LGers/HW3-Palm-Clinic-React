import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type AppointmentType =
    {
        id: string
        reason: string
        note: string
        patient_id: string
        doctor_id: string
        visit_date: string
        status: string
        doctor: {
            last_name: string
            first_name: string
            id: string
            photo: string
            specialization_name: string
        }
    }

export interface Appointments {
    appointments: AppointmentType[]
    total: string | null,
}

const initialState: Appointments = {
    appointments: [
        {
            id: "",
            reason: "",
            note: "",
            patient_id: "",
            doctor_id: "",
            visit_date: "",
            status: "",
            doctor: {
                last_name: "",
                first_name: "",
                id: "",
                photo: "",
                specialization_name: ""
            }
        }
    ],
    total: '0'
}

const appointmentsSlice = createSlice({
        name: 'appointments',
        initialState,
        reducers: {
            fetchAppointments() {},
            setUserAppointments(state, action) {
                state.appointments = action.payload.appointments
                state.total = action.payload.total
            },
        }
    }
)

export const {setUserAppointments, fetchAppointments} = appointmentsSlice.actions

export default appointmentsSlice.reducer