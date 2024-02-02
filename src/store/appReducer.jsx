import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: true,
}

export const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        loadingStatus: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {loadingStatus} = appReducer.actions


export default appReducer.reducer