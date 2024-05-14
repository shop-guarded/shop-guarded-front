// App.js
import React from 'react';
import EnteteLC from './EnteteLC'; // Import de la barre de navigation
import Claim from './Claim'; // Import du composant Claim



const ListofclaimsScreen = () => {
  return (
    <div className="app-container">
      <EnteteLC />
      <Claim/>
      
    </div>
  );
};

export default ListofclaimsScreen;
