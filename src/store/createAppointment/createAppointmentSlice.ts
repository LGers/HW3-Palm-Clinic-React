import {createSlice, PayloadAction} from "@reduxjs/toolkit";
//todo delete it

interface CreateAppointment {
    occupations: any[]
    doctors: any[]
    times: any[]
    // errorMessage: string
    // showSuccessMessage: boolean
    isFetching: boolean
}

const initialState: CreateAppointment = {
    occupations: [],
    doctors: [],
    times: [],
    // errorMessage: '',
    // showSuccessMessage: false,
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


            //todo delete it or Not??
            createAppointment(state, action) {

            },

            /*showErrorMessage(state, action) {
                state.errorMessage = action.payload
            },
            showSuccessMessage(state, action) {
                state.showSuccessMessage = !state.showSuccessMessage
            },*/
        }
    }
)

export const {
    fetchOccupations,
    setOccupations,
    fetchDoctors,
    setDoctors,
    fetchTimes,
    setTimes,
    // showErrorMessage,
    // showSuccessMessage,

    createAppointment,
} = createAppointmentSlice.actions

export default createAppointmentSlice.reducer