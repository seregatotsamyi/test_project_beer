import React from 'react';

const ProductMethod = (props) => {

    const {item} = props

    return (
        <ul className="product__method-list">
            {
                item.mash_temp.map((item, index) => (
                        <li key={index} className="product__method-item">
                            <div className="product__method-sub-item">
                                <span>Темпарутра: </span>
                                <span>{item.temp.value} °C</span>
                            </div>
                            <div className="product__method-sub-item">
                                <span>Продолжительность: </span>
                                <span>{item.duration} мин</span>
                            </div>

                        </li>
                    )
                )
            }
        </ul>
    );
};

export default ProductMethod;