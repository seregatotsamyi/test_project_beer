import React from 'react';
import ProductMethod from "./ProductMethod";
import ProductIngredients from "./ProductIngredients";
import ProductEnumeration from "./ProductEnumeration";

const Product = (props) => {

    const {item} = props

    return (
        <section className="product">
            <div className="container">
                <div className="product__wrap">
                    <div className="product__top">
                        <div className="product__img-wrap">
                            <img className="product__img" src={item.image_url} alt="product"/>
                        </div>
                        <div className="product__info">
                            <div className="product__name">
                                {item.name}
                            </div>
                            <div className="product__tagline">
                                {item.tagline}
                            </div>

                            <div className="product__date">
                                <span>Работают с </span>
                                <span>{item.first_brewed}</span>

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
                      {item.abv || "Нет данных"}
                    </span>
                                    </li>
                                    <li className="list__information-item">
                                        <div className="list__information-left-wrap">
                      <span className="list__information-left">
                        Горечь (ibu)
                      </span>
                                        </div>

                                        <span className="list__information-right">
                      {item.ibu || "Нет данных"}
                    </span>
                                    </li>
                                    <li className="list__information-item">
                                        <div className="list__information-left-wrap">
                      <span className="list__information-left">
                        Тип (ebc)
                      </span>
                                        </div>

                                        <span className="list__information-right">
                      {item.ebc || "Нет данных"}
                    </span>
                                    </li>
                                    <li className="list__information-item">
                                        <div className="list__information-left-wrap">
                      <span className="list__information-left">
                        Цвет (srm)
                      </span>
                                        </div>

                                        <span className="list__information-right">
                      {item.srm || "Нет данных"}
                    </span>
                                    </li>
                                    <li className="list__information-item">
                                        <div className="list__information-left-wrap">
                      <span className="list__information-left">
                        Ph
                      </span>
                                        </div>

                                        <span className="list__information-right">
                      {item.ph || "Нет данных"}
                    </span>
                                    </li>

                                </ul>
                            </div>
                            <div className="product__bottom-title">
                                Описание
                            </div>
                            <div className="product__discr">
                                {item.description}
                            </div>
                        </div>
                    </div>
                    <div className="product__bottom">

                        <div className="product__bottom-title">
                            Объем
                        </div>

                        <ul className="list__information-list product__item">
                            <li className="list__information-item">
                                <div className="list__information-left-wrap">
                  <span className="list__information-left">
                    объем
                  </span>
                                </div>

                                <span className="list__information-right">
                  {item.volume.value}
                </span>
                            </li>

                            <li className="list__information-item">
                                <div className="list__information-left-wrap">
                  <span className="list__information-left">
                    объем котла
                  </span>
                                </div>

                                <span className="list__information-right">
                  {item.boil_volume.value}
                </span>
                            </li>


                        </ul>

                        <div className="product__bottom-title">
                            Метод готовки
                        </div>

                        <div className="product__item product__method">

                            <div className="product__method-title">
                                Температурная обработка
                            </div>

                            <ProductMethod item={item.method}/>

                            <div className="product__method-title">
                                Ферментация
                            </div>

                            <ul className="product__method-list">
                                <li className="product__method-item">
                                    <div className="product__method-sub-item">
                                        <span>Темпарутра: </span>
                                        <span>{item.method.fermentation.temp.value} °C</span>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div className="product__bottom-title">
                            Ингредиенты
                        </div>

                        <ProductIngredients item={item.ingredients}/>

                        <div className="product__bottom-title">
                            Сочетается с блюдами:
                        </div>

                       <ProductEnumeration item={item.food_pairing}/>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;