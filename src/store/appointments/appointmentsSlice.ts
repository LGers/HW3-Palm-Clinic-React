import {createSlice} from "@reduxjs/toolkit";
import {DELETE, PATCH} from "../../constants/api.dictionary";


export type AppointmentType =
    {
        id: string
        reason: string
        note: string
        patient_id: string
        doctor_id: string
        visit_date: string
        status: 'confirmed' | 'canceled' | 'waiting'
        doctor: {
            last_name: string
            first_name: string
            id: string
            photo: string
            specialization_name: string
        }
        patient: {
            last_name: string
            first_name: string
            id: string
            photo: string
            specialization_name: string
        }
    }

export interface Appointments {
    appointments: AppointmentType[]
    total: number | null
    isFetching: boolean
}

const initialState: Appointments = {
    appointments: [],
    total: null,
    isFetching: false
}

const appointmentsSlice = createSlice({
        name: 'appointments',
        initialState,
        reducers: {
            fetchAppointments(state, action) {
                state.isFetching = true
            },
            setUserAppointments(state, action) {
                state.appointments = action.payload.appointments
                state.total = +action.payload.total
                state.isFetching = false
            },
            changeAppointment(state, action) {
                if (action.payload.request === DELETE) {
                    const updatedAppointments = state.appointments.filter(appointment => appointment.id !== action.payload.id)
                    state.appointments = updatedAppointments
                }
                if (action.payload.request === PATCH) {
                    const appointment = state.appointments.find((appointment) => appointment.id === action.payload.id)
                    if (appointment) {
                        appointment.status = action.payload.status
                    }
                }
            }
        }
    }
)

export const {setUserAppointments, fetchAppointments, changeAppointment} = appointmentsSlice.actions

export default appointmentsSlice.reducer