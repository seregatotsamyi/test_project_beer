import {productAPI} from "../api/api";
import {setList} from "./productsReducer";
import {loadingStatus} from "./appReducer";

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