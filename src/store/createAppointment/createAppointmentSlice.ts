import { createSlice } from "@reduxjs/toolkit";
import { CreateAppointment } from './createAppointment.types';

const initialState: CreateAppointment = {
    occupations: [],
    doctors: [],
    times: [],
    isFetching: false
}

const createAppointmentSlice = createSlice({
    name: 'create_appointment',
    initialState,
    reducers: {
        fetchOccupations(state) {
            state.isFetching = true
        },
        setOccupations(state, action) {
            state.isFetching = false
            state.occupations = action.payload
        },
        fetchDoctors(state, action) {
            state.isFetching = true
        },
        setDoctors(state, action) {
            state.isFetching = false
            state.doctors = action.payload
        },
        fetchTimes(state, action) {
            state.isFetching = true
        },
        setTimes(state, action) {
            state.isFetching = false
            state.times = action.payload
        },
        createAppointment(state, action) {
            state.isFetching = true
        },
    }
})

export const {
    fetchOccupations,
    setOccupations,
    fetchDoctors,
    setDoctors,
    fetchTimes,
    setTimes,
    createAppointment,
} = createAppointmentSlice.actions

export default createAppointmentSlice.reducer