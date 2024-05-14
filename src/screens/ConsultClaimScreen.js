// ConsultClaimScreen.js

import React, { useState, useEffect } from 'react';
import './ConsultClaimScreen.css'; // Import des styles CSS
import Enteteconsult from '../components/Enteteconsult';

const ConsultClaimScreen = () => {
  // State pour stocker les données de la réclamation
  const [claimData, setClaimData] = useState({
    title: '',
    date: '',
    description: '',
    status: ''
  });

  // Fonction pour récupérer les données de la réclamation depuis le backend
  const fetchClaimData = () => {
    // Simuler la récupération des données de la base de données
    const dataFromDatabase = {
      title: 'Claim Title',
      date: '2024-05-13',
      description: 'Description of the claim',
      status: 'Pending'
    };
    // Mettre à jour les données de la réclamation avec les données récupérées de la base de données
    setClaimData(dataFromDatabase);
  };

  // Utilisez useEffect pour appeler fetchClaimData une fois que le composant est monté
  useEffect(() => {
    fetchClaimData();
  }, []);

  return (
    <div>
      <Enteteconsult />
      <div className="container">
        <div className="label"><span>Title of claim:</span> {claimData.title}</div>
        <div className="label"><span>Date of the claim:</span> {claimData.date}</div>
        <div className="label"><span>Description of the claim:</span> {claimData.description}</div>
        <div className="label"><span>Status:</span> {claimData.status}</div>
        <button className="closeButton">Close</button>
      </div>
    </div>
  );
};

export default ConsultClaimScreen;
