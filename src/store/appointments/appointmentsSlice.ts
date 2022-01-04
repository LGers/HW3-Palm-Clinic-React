import { createSlice } from "@reduxjs/toolkit";
import { DELETE, PATCH } from "../../constants/api.dictionary";
import { Appointments } from './appointments.types';

const initialState: Appointments = {
    appointments: [],
    total: null,
    isFetching: false,
    isCreateResolution: false,
    patientName: '',
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
            },
            createResolution(state, action) {
                state.isCreateResolution = !state.isCreateResolution
                state.patientName = action.payload.patientName
            },
        }
    }
)

export const {
    setUserAppointments,
    fetchAppointments,
    changeAppointment,
    createResolution
} = appointmentsSlice.actions

export default appointmentsSlice.reducer