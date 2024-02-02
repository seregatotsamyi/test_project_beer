import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ItemBeer from "../ItemBeer/ItemBeer";
import {addProduct} from "../../store/productsThunks";


const List = () => {

    const dispatch = useDispatch()

    const {list: items, currentPage: page} = useSelector((state) => state.products)

    const [isMyFetching, setIsFetchingDown] = useState(false)

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 500) {
            setIsFetchingDown(true)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(() => {
        if (isMyFetching) {
            dispatch(addProduct(page + 1))
        }
    }, [isMyFetching])

    useEffect(() => {
        setIsFetchingDown(false)
    }, [items])

    return (
        <>
            <div className="promo-text container">

                <h2 className="promo-text__text">
                    Кликните на карточку, чтобы узнать подробнее!
                </h2>

            </div>

            <section className="list container">

                <ul className="list__list">
                    {
                        items.map(item => {
                            return (
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

            </section>


        </>
    );
};

export default List;