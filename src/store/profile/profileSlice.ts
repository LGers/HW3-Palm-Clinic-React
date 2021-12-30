import { createSlice } from "@reduxjs/toolkit";
import { CreateAppointment } from './profile.types';

const initialState: CreateAppointment = {
  first_name: '',
  last_name: '',
  specializations: [],
  isFetching: false
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchDoctorChangeProfile(state, action) {
      state.isFetching = true
    },
    fetchPatientChangeProfile(state, action) {
      state.isFetching = true
    },
  }
})

export const {
    fetchDoctorChangeProfile,
    fetchPatientChangeProfile,
} = profileSlice.actions

export default profileSlice.reducer