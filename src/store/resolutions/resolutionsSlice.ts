import { createSlice } from "@reduxjs/toolkit";
import { DELETE, PATCH } from "../../constants/api.dictionary";
import { Resolutions } from './resolutions.types';

const initialState: Resolutions = {
  resolutions: [],
  total: null,
  isFetching: false
}

const resolutionsSlice = createSlice({
    name: 'resolutions',
    initialState,
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