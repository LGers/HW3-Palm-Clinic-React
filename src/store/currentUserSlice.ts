import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CurrentUser {
    user: {
        id: string
        first_name: string,
        last_name: string,
        photo: string,
        role_name: string
    }
}

const initialState: CurrentUser = {
    user: {
        id: '',
        first_name: 'ee',
        last_name: '',
        photo: '',
        role_name: ''
    }
}

const currentUserSlice = createSlice({
        name: 'currentUser',
        initialState,
        reducers: {
            fetchLogonUser() {
            },
            setLogonUser(state = initialState, action) {
                state.user = action.payload
            },
            deleteAppointment() {
            },
            createResolutionAppointment() {
            },
            editResolutionAppointment() {
            },
            editAppointment() {
            },
            confirmAppointment(state, action) {
            },
            cancelAppointment(state, action) {
            },
        }
    }
)

export const {
    fetchLogonUser,
    setLogonUser,
    deleteAppointment,
    createResolutionAppointment,
    editResolutionAppointment,
    editAppointment,
    confirmAppointment,
    cancelAppointment
} = currentUserSlice.actions

export default currentUserSlice.reducer
