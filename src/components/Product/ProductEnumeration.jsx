import React from 'react';

const ProductEnumeration = (props) => {

    const {item} = props

    return (
        <ul className="product__enumeration">
            {
                item.map((item, i) => (
                    <li key={i} className="product__enumeration-item">
                        <span>{item}</span>
                    </li>
                ))
            }

        </ul>
    );
};

export default ProductEnumeration;