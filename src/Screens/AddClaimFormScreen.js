// App.js
import React from 'react';
import EnteteAddclaim from '../Componnent/EnteteAddclaim'; // Import de la barre de navigation
import AddClaimForm from '../Componnent/AddClaimForm'; // Import du composant Claim



const AddClaimFormScreen = () => {
  return (
    <div className="app-container">
      <EnteteAddclaim />
      <AddClaimForm/>
      
    </div>
  );
};

export default AddClaimFormScreen;
