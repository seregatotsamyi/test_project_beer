import {createSlice} from '@reduxjs/toolkit'


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


export default productsReducer.reducer