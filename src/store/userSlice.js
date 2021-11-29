import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'currentUser',
    initialState: {
        currentUser: {
            id: '',
            first_name: '',
            last_name: '',
            photo: '',
            role_name: 'Patient'
        },
        userAppointments: [
            {
                id: "string",
                reason: "string",
                note: "string",
                patient_id: "string",
                doctor_id: "string",
                visit_date: "string",
                status: "string",
                doctor: {
                    last_name: "string",
                    first_name: "string",
                    id: "string",
                    photo: "string",
                    specialization_name: "string"
                }
            }
        ],
        total: 0
    },
    reducers: {
        setLogonUser(state, action) {
            state.currentUser = action.payload.userData
        },
        setUserAppointments(state, action) {
            state.userAppointments = action.payload.userAppointments.appointments
            state.total = action.payload.userAppointments.total
        }
    }
})

export const {setLogonUser, setUserAppointments} = userSlice.actions

export default userSlice.reducer