import React from 'react';

const ProductIngredients = (props) => {

    const {item} = props

    return (
        <ul className="list__information-list product__item">
            {
                item.malt.map((item, i) => (
                    <li key={i} className="list__information-item">
                        <div className="list__information-left-wrap">
                  <span className="list__information-left">
                   {item.name}
                  </span>
                        </div>

                        <span className="list__information-right">
                   {item.amount.value || "Нет данных"}, кг
                </span>
                    </li>
                ))
            }
        </ul>
    );
};

export default ProductIngredients;