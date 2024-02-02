import {RouterProvider} from 'react-router-dom';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import routers from "./routers";
import {initializeApp} from "./store/appThunks";


function MainApp() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return <RouterProvider router={routers}/>
}

export default MainApp;
