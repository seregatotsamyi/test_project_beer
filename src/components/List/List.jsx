import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ItemBeer from "../ItemBeer/ItemBeer";
import {addProduct} from "../../store/productsReducer";

const List = () => {

    const dispatch = useDispatch()

    const items = useSelector((state) => state.products.list)
    const page = useSelector((state) => state.products.currentPage)

    const [isMyFetching,setIsFetchingDown]=useState(false)

    const scrollHandler=(e)=>{
        if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<500)
        {
            setIsFetchingDown(true)
        }
    }

    useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)
        return ()=>{
            document.removeEventListener('scroll',scrollHandler)
        }
    }, [])

    useEffect(()=>{
        if(isMyFetching)
        {
            dispatch(addProduct(page+1))
        }
    },[isMyFetching])

    useEffect(()=>{
        setIsFetchingDown(false)
    },[items])

    return (
        <>
            <div className="promo-text">
                <div className="container">
                    <div className="promo-text__text">
                        Кликните на карточку, чтобы узнать подробнее!
                    </div>
                </div>
            </div>

            <section className="list">
                <div className="container">
                    <ul className="list__list">
                        {
                            items.map(item => {
                                return(
                                    <ItemBeer key={item.id}
                                              id={item.id}
                                              img_src={item.image_url}
                                              name={item.name}
                                              tagline={item.tagline}
                                              date={item.first_brewed}
                                              abv={item.abv}
                                              ibu={item.ibu}
                                              ebc={item.ebc}
                                              srm={item.srm}
                                              ph={item.ph}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </section>



        </>
    );
};

export default List;