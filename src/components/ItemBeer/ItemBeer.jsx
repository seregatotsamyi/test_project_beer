import React from 'react';
import {Link} from "react-router-dom";

const ItemBeer = ({img_src, name, tagline, date, id, ...props}) => {

    return (

        <li className="list__item">
            <div className="list__link" >
                <div className="list__img-wrap">
                    <img className="list__img" src={img_src} alt="promo-beer"/>
                </div>
                <div className="list__content">
                    <div className="list__name">
                        {name}
                    </div>
                    <div className="list__tagline">
                        {tagline}
                    </div>
                    <div className="list__date">
                        <span>Работают с </span>
                        <span>{date}</span>

                    </div>
                    <div className="list__information">
                        <ul className="list__information-list">
                            <li className="list__information-item">
                                <div className="list__information-left-wrap">
                        <span className="list__information-left">
                          %, алк
                        </span>
                                </div>

                                <span className="list__information-right">
                        {props.abv || "Нет данных"}
                      </span>
                            </li>
                            <li className="list__information-item">
                                <div className="list__information-left-wrap">
                        <span className="list__information-left">
                          Горечь (ibu)
                        </span>
                                </div>

                                <span className="list__information-right">
                        {props.ibu || "Нет данных"}
                      </span>
                            </li>
                            <li className="list__information-item">
                                <div className="list__information-left-wrap">
                        <span className="list__information-left">
                          Тип (ebc)
                        </span>
                                </div>

                                <span className="list__information-right">
                        {props.ebc || "Нет данных"}
                      </span>
                            </li>
                            <li className="list__information-item">
                                <div className="list__information-left-wrap">
                        <span className="list__information-left">
                          Цвет (srm)
                        </span>
                                </div>

                                <span className="list__information-right">
                        {props.srm || "Нет данных"}
                      </span>
                            </li>
                            <li className="list__information-item">
                                <div className="list__information-left-wrap">
                        <span className="list__information-left">
                          Ph
                        </span>
                                </div>

                                <span className="list__information-right">
                        {props.ph || "Нет данных"}
                      </span>
                            </li>

                        </ul>
                    </div>
                    <Link className="btn" to={`/product/${id}`} >
                        Узнать подробнее
                    </Link>
                </div>

            </div>
        </li>

    );
};

export default ItemBeer;