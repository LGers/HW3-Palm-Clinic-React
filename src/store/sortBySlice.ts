import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type SortType = {
    sortBy: string | null
    order: 'Asc' | 'Desc'
    status: string | null
}

export interface SortBy {
    sortBy: SortType
}

const initialState: SortBy = {
    sortBy: {
        sortBy: null,
        order: 'Asc',
        status: null
    }
}

const sortBySlice = createSlice({
        name: 'sortBy',
        initialState,
        reducers: {}
    }
)

export const {} = sortBySlice.actions

export default sortBySlice.reducer
