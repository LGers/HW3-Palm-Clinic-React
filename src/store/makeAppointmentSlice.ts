import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type MakeAppointmentType = {
    occupations: any[]
    occupation_id: string
    doctors: any[]
    selected_doctor_id: string
    reason: string
    note: string
    date: string
    times: any[]
    selected_time: string
    errorMessage: string
    showSuccessMessage: boolean
}

export interface MakeAppointment {
    appointment: MakeAppointmentType

}

const currentDate: string = new Date().toString()

const initialState: MakeAppointment = {
    appointment: {
        occupations: [],
        occupation_id: '',
        doctors: [],
        selected_doctor_id: '',
        reason: '',
        note: '',
        date: currentDate,
        times: [],
        selected_time:'',
        errorMessage: '',
        showSuccessMessage: false
    }

}

const makeAppointmentSlice = createSlice({
        name: 'make_appointment',
        initialState,
        reducers: {
            setOccupations(state, action) {
                state.appointment.occupations = action.payload
            },
            selectOccupation(state, action) {
                state.appointment.occupation_id = action.payload.occupationId
            },
            setDoctors(state, action) {
                state.appointment.doctors = action.payload
            },
            selectDoctor(state, action) {
                state.appointment.selected_doctor_id = action.payload.doctorId
            },
            setReason(state, action) {
                state.appointment.reason = action.payload.reason
            },
            setNote(state, action) {
                state.appointment.note = action.payload.note
            },
            selectDate(state, action) {
                state.appointment.date = action.payload.date
            },
            setTimes(state, action) {
                state.appointment.times = action.payload
            },

            showErrorMessage(state, action) {
                state.appointment.errorMessage = action.payload
            },
            showSuccessMessage(state, action) {
                state.appointment.showSuccessMessage = !state.appointment.showSuccessMessage
            },
            createAppointment(state, action: any) {
            }

        }
    }
)

export const {
    setOccupations,
    selectOccupation,
    setDoctors,
    selectDoctor,
    setReason,
    setNote,
    selectDate,
    setTimes,
    showErrorMessage,
    showSuccessMessage,
    createAppointment
} = makeAppointmentSlice.actions

export default makeAppointmentSlice.reducer