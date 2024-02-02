import {loadingStatus} from "./appReducer";
import {productAPI} from "../api/api";
import {setCurrentPage, setCurrentProduct, setList} from "./productsReducer";

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