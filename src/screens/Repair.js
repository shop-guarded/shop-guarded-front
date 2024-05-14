import React from 'react';
import './Repair.css';
import ProductBox from './ProductBox';
import logo from './lg.png';
export default function Repair() {
  const products = [
    { id: 1, brandName: 'Samsung', model: 'Galaxy S20', description: 'Description of product 1' },
    { id: 2, brandName: 'Apple', model: 'iPhone 12', description: 'Description of product 2' },
    { id: 3, brandName: 'Google', model: 'Pixel 5', description: 'Description of product 3' },
    // Add more products as needed
    { id: 4, brandName: 'Google', model: 'Pixel 5', description: 'Description of product 4' },
];
  return (
    <div className='bg'>
        <div className="navbar">
<a  className="pic" href="LoginScreen.js">
<img src={logo} alt="Logo" />
</a>
<h2>Repair workshop</h2>
</div>
      <div className="product-container">
                {/* Render product boxes */}
                {products.map(product => (
                    <ProductBox
                        key={product.id}
                        brandName={product.brandName}
                        model={product.model}
                        description={product.description}
                        onClick={() => {
                            // Handle button click
                            console.log(`Clicked on product ${product.id}`);
                        }}
                    />
                ))}
            </div>
    </div>
  )
}
