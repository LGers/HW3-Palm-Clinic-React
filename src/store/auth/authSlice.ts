import {createSlice} from "@reduxjs/toolkit";

export type AuthUser = {
    data: {
        id: string
        first_name: string
        last_name: string
        photo: string
        role_name: 'doctor' | 'patient' | 'admin'
    },
    occupation: string
    roleNameInRequest: 'doctor' | 'patient' | 'admin'
    isFetching: boolean
    isTokenExist: boolean
    popupMessage: {
        isSuccess: boolean
        showPopupMessage: boolean
        popupMessageTitle: string
        popupMessageText: string
    }
}

const initialState: AuthUser = {
    data: {
        id: '',
        first_name: '',
        last_name: '',
        photo: '',
        role_name: 'patient',
    },
    occupation: '',
    roleNameInRequest: 'doctor',
    isFetching: false,
    isTokenExist: false,
    popupMessage: {
        isSuccess: true,
        showPopupMessage: false,
        popupMessageTitle: '',
        popupMessageText: ''
    },

}

const authSlice = createSlice({
        name: 'authUser',
        initialState,
        reducers: {
            fetchSignIn(state, action) {
                state.isFetching = true
            },
            fetchUserProfile(state) {
                state.isTokenExist = true
            },
            setAuthUser(state, action) {
                state.isFetching = false
                state.data = action.payload
                const roleName = action.payload.role_name.toLowerCase()
                state.data.role_name = roleName
                state.roleNameInRequest = (roleName === 'doctor') ? 'patient' : 'doctor'
            },
            fetchDoctorProfile(state) {
                state.isFetching = true
            },
            setDoctorOccupation(state, action) {
                state.occupation = action.payload
            },
            toggleShowMessage(state) {
                state.popupMessage.showPopupMessage = !state.popupMessage.showPopupMessage
            },
            setPopupMessage(state, action) {
                state.popupMessage.popupMessageText = action.payload.message
                state.popupMessage.popupMessageTitle = action.payload.title
                state.popupMessage.isSuccess = action.payload.isSuccess
            },
            fetchSignUp(state, action) {
                state.isTokenExist = true
            },
            fetchChangePassword(state, action) {
                state.isFetching = true
            },
        }
    }
)

export const {
    fetchSignIn,
    fetchUserProfile,
    setAuthUser,
    fetchDoctorProfile,
    setDoctorOccupation,
    toggleShowMessage,
    setPopupMessage,
    fetchSignUp,
    fetchChangePassword,
} = authSlice.actions

export default authSlice.reducer
