
import React from 'react';
import Navbar from '../components/Navbar';
import './HomeScreen.css'; // Importer votre fichier CSS pour le style
import Slideshow from '../components/Slideshow';
import icone1 from "../save-money 1.png";
import icone2 from "../legal-compliance 1.png";
import icone3 from "../truck 1.png";
import icone4 from "../login (3) 1.png";

export default function HomeScreen() {
  return (
    <div>
        {/* Barre de navigation */}
      <Navbar />
      {/* Bannière */}
    <Slideshow />

      {/* Icônes représentant les valeurs */}
      <div className="values">
        <div className="value">
          <img src={icone4} alt="Easy Process Icon" />
          <p>Easy Process</p>
        </div>
        <div className="value">
          <img src={icone3} alt="Fast Delivery Icon" />
          <p>Fast Delivery</p>
        </div>
        <div className="value">
          <img src={icone2} alt="Policy Controlling Icon" />
          <p>Policy Controlling</p>
        </div>
        <div className="value">
          <img src={icone1} alt="Money Saving Icon" />
          <p>Money Saving</p>
        </div>
      </div>
    </div>
  );
}
