import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import './ShopScreen.css';

//shopscreen.js
const ShopScreen = () => {
  const [filter, setFilter] = useState('all');

  const filterSelection = (category) => {
    setFilter(category);
  }

  return (
    <div>
<Navbar />
      <div id="myBtnContainer">
        <button className={filter === 'all' ? "btn active" : "btn"} onClick={() => filterSelection('all')}>ALL</button>
        <button className={filter === 'computer' ? "btn active" : "btn"} onClick={() => filterSelection('computer')}>Computer</button>
        <button className={filter === 'smartphone' ? "btn active" : "btn"} onClick={() => filterSelection('smartphone')}>Smartphone</button>
        <button className={filter === 'homeappliance' ? "btn active" : "btn"} onClick={() => filterSelection('homeappliance')}>Home Appliance</button>
      </div>

      <div className="product-container">
        <ProductCard category="computer" name="pc samsung" price="2000Dt" imageUrl={require('../6525395cv12d.jpg')} filter={filter} />
        <ProductCard category="smartphone" name="Apple - iPhone 15 Pro 256GB - Blue (AT&T)" price="5000Dt" imageUrl={require('../6537368cv11d 1.png')} filter={filter} />
        <ProductCard category="homeappliance" name="LG - 31.7 Cu. Ft. French Door Smart Refrigerator with Internal Water Dispenser
 - Stainless Steel" price="2500Dt" imageUrl={require('../6553174_sd 2.png')}filter={filter} />
        <ProductCard category="homeappliance" name="Samsung - 75 Class CU8000 Crystal UHD 4K Smart Tizen TV" price="2700Dt" imageUrl={require('../6525395cv12d.jpg')} filter={filter} />
        <ProductCard category="homeappliance" name="Samsung - 75 Class CU8000 Crystal UHD 4K Smart Tizen TV" price="2700Dt" imageUrl={require('../6525395cv12d.jpg')} filter={filter} />
        

      </div>
    </div>
  );
}

export default ShopScreen;
