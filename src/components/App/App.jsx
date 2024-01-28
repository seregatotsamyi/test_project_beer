import React, {useEffect} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import {useSelector} from "react-redux";

const App = () => {

    const { pathname } = useLocation();

    const loading = useSelector((state) => state.app.loading)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {loading ? <Loading/> : ''}

            <Header/>

            <main className="main">

                <Outlet/>

            </main>
        </>
    );
};

export default App;