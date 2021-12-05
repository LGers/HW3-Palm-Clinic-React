import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CurrentUserType = {
    id: string
    first_name: string
    last_name: string
    photo: string
    role_name: string
}

export type UserAppointmentsType = [
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
]

export type MakeAppointmentType = {
    occupations: []
    occupation_id: string
    doctors: []
    selected_doctor_id: string
    reason: string
    note: string
    date: string
    times: []
    errorMessage: string
    showSuccessMessage: boolean
}

export type SortType = {
    sortBy: string
    order: string
    status: string
}

export interface CurrentUserState {
    current_user: CurrentUserType
    user_appointments: UserAppointmentsType
    total: number,
    make_appointment: MakeAppointmentType
    sort: SortType
}

const currentDate: string = new Date().toString()

const initialState: CurrentUserState = {
    current_user: {
        id: '',
        first_name: '',
        last_name: '',
        photo: '',
        role_name: ''
    },
    user_appointments: [
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
    total: 0,
    make_appointment: {
        occupations: [],
        occupation_id: '',
        doctors: [],
        selected_doctor_id: '',
        reason: '',
        note: '',
        date: currentDate,
        times: [],
        errorMessage: '',
        showSuccessMessage: false
    },
    sort: {sortBy: '', order: 'Asc', status: 'upcoming'}
}

const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        // setLogonUser: (state, action : PayloadAction<any>) => {
        //     state.current_user = action.payload.current_user
        // },
        setLogonUser(state, action) {
            state.current_user = action.payload.current_user
        },
        setUserAppointments(state, action) {
            state.user_appointments = action.payload.userAppointments.appointments
            state.total = action.payload.userAppointments.total
        },
        setOccupations(state, action) {
            state.make_appointment.occupations = action.payload.occupations
        },
        selectOccupation(state, action) {
            state.make_appointment.occupation_id = action.payload.occupationId
        },
        setDoctors(state, action) {
            state.make_appointment.doctors = action.payload.doctors
        },
        selectDoctor(state, action) {
            state.make_appointment.selected_doctor_id = action.payload.doctorId
        },
        setReason(state, action) {
            state.make_appointment.reason = action.payload.reason
        },
        setNote(state, action) {
            state.make_appointment.note = action.payload.note
        },
        selectDate(state, action) {
            state.make_appointment.date = action.payload.date
        },
        setTimes(state, action) {
            state.make_appointment.times = action.payload.times
        },
        showErrorMessage(state, action) {
            state.make_appointment.errorMessage = action.payload.errorMessage
        },
        showSuccessMessage(state, action) {
            state.make_appointment.showSuccessMessage = !state.make_appointment.showSuccessMessage
        }
    }
})

export const {
    setLogonUser,
    setUserAppointments,
    setOccupations,
    selectOccupation,
    setDoctors,
    selectDoctor,
    setReason,
    setNote,
    selectDate,
    setTimes,
    showErrorMessage,
    showSuccessMessage
} = userSlice.actions

export default userSlice.reducer