// ProductCard.js

import React from 'react';
import "./ProductCard.css";

const ProductCard = ({ category, name , filter , price, imageUrl }) => {
    // Vérifie si la catégorie correspond au filtre ou si le filtre est "all"
    const isMatch = filter === 'all' || category === filter;

    // Détermine les classes CSS en fonction du filtre
    const classNames = `filterDiv ${category} ${isMatch ? 'show' : 'hide'}`;

    return (
        <div className={classNames}>
        <img src={imageUrl} alt={name} />
        <div className="product-info">
            <div className="product-name">{name}</div>
            <div className="product-price"><strong>{price}</strong></div>
        </div>
    </div>
    );
}

export default ProductCard;

