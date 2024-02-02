import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Loading from "../Loading/Loading";
import Product from "./Product";
import {getProduct} from "../../store/productsThunks";

const ProductWrap = () => {

    const dispatch = useDispatch()

    const item = useSelector((state) => state.products.currentProduct)

    let {id} = useParams();

    useEffect(() => {

        if (id) {
            dispatch(getProduct(id))
        }

    }, [id])

    return (
        <>
            {item.name ? <Product item={item}/> : <Loading/>}
        </>
    );
};

export default ProductWrap;