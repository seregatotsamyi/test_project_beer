import {
    createBrowserRouter,
} from "react-router-dom";

import App from "./components/App/App";
import Error from "./components/Error/Error";
import ProductWrap from "./components/Product/ProductWrap";
import List from "./components/List/List";


const routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,

        children: [
            {
                path: "/",
                element: <List/>
            },
            {
                path: "/product/:id",
                element: <ProductWrap/>
            }
        ]
    },


    {
        path: "/error",
        element: <Error/>
    },

])


export default routers