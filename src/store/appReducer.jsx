import {createSlice} from '@reduxjs/toolkit'
import {productAPI} from "../api/api";
import {setList} from "./productsReducer";


const initialState = {
    loading: true,
    showMobMenu: false
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


export const initializeApp = (page = 1, per = 10) => async (dispatch) => {

    dispatch(loadingStatus(true))

    try {

        const response = await productAPI.list(page, per)
        dispatch(setList(response.data))

    } catch (err) {
        console.error(err)
    }

    dispatch(loadingStatus(false))

}


export default appReducer.reducer