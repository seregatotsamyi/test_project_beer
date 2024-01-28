import {createSlice} from '@reduxjs/toolkit'
import {loadingStatus} from "./appReducer";
import {productAPI} from "../api/api";


const initialState = {
    list: [],
    currentProduct: {},
    currentPage: 1
}

export const productsReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {

        setList: (state, action) => {
            action.payload.forEach(item => {
                state.list.push(item)
            });
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload[0]
        },

        setCurrentPage:(state)=>{
            state.currentPage++
        }

    }
})


export const {setList, setCurrentProduct,setCurrentPage} = productsReducer.actions


export const getProduct = (id) => async (dispatch) => {

    dispatch(loadingStatus(true))

    try {

        const response = await productAPI.getItem(id)
        dispatch(setCurrentProduct(response.data))

    } catch (err) {
        console.error(err)
    }

    dispatch(loadingStatus(false))

}

export const addProduct = (page) => async (dispatch) => {

    dispatch(loadingStatus(true))

    try {

        const response = await productAPI.addItem(page)
        dispatch(setCurrentPage(page))
        dispatch(setList(response.data))

    } catch (err) {
        console.error(err)
    }

    dispatch(loadingStatus(false))

}

export default productsReducer.reducer