import {createSlice} from "@reduxjs/toolkit";
import {DELETE, PATCH} from "../../constants/api.dictionary";


export type ResolutionsType =
    {
        id: string
        appointment_id: string
        next_appointment_date: string
        resolution: string
        visit_date: string
        patient: {
            last_name: string
            first_name: string
            id: string
            photo: string
            specialization_name: string
        }
        doctor: {
            last_name: string
            first_name: string
            id: string
            photo: string
        }
        admin: {
            last_name: string
            first_name: string
            id: string
            photo: string
        }
    }

export interface Resolutions {
    resolutions: ResolutionsType[]
    total: number | null
    isFetching: boolean
}

const initialState: Resolutions = {
    resolutions: [],
    total: null,
    isFetching: false
}

const resolutionsSlice = createSlice({
        name: 'resolutions',
        initialState,
        //todo create common reducer - duplicate code
        reducers: {
            fetchResolutions(state, action) {
                state.isFetching = true
            },
            setUserResolutions(state, action) {
                state.resolutions = action.payload.resolutions
                state.total = +action.payload.total
                state.isFetching = false
            },
            changeResolution(state, action) {
                if (action.payload.request === DELETE) {
                    const updatedResolution = state.resolutions.filter(resolution => resolution.id !== action.payload.id)
                    state.resolutions = updatedResolution
                }
                if (action.payload.request === PATCH) {
                    const resolution = state.resolutions.find((resolution) => resolution.id === action.payload.id)
                    if (resolution) {
                        resolution.resolution = action.payload.status
                    }
                }
            }
        }
    }
)

export const {setUserResolutions, fetchResolutions, changeResolution} = resolutionsSlice.actions

export default resolutionsSlice.reducer