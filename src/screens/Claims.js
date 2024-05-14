import React from 'react';
import './Claims.css';
import ContractBox from '../commponents/ContractBox'; // Use the new ContractBox component
import logo from './lg.png';

export default function Claims() {
  const contracts = [
    { id: 1, brandName: 'Samsung', model: 'Galaxy S20', serialNumber: 'SN123456', approvedSince: '2021-01-01', approvedUntil: '2023-01-01' },
    { id: 2, brandName: 'Apple', model: 'iPhone 12', serialNumber: 'SN654321', approvedSince: '2021-05-01', approvedUntil: '2023-05-01' },
    { id: 3, brandName: 'Google', model: 'Pixel 5', serialNumber: 'SN789012', approvedSince: '2021-07-01', approvedUntil: '2023-07-01' },
    { id: 4, brandName: 'Google', model: 'Pixel 5', serialNumber: 'SN890123', approvedSince: '2021-09-01', approvedUntil: '2023-09-01' },
  ];

  return (
    <div className='bg'>
      <div className="navbar">
        <a className="pic" href="LoginScreen.js">
          <img src={logo} alt="Logo" />
        </a>
        <h2>Claims</h2>
      </div>
      <h1 className="page-title">My contracts</h1>
      <div className="product-container">
        {/* Render contract boxes */}
        {contracts.map(contract => (
          <ContractBox
            key={contract.id}
            brandName={contract.brandName}
            model={contract.model}
            serialNumber={contract.serialNumber}
            approvedSince={contract.approvedSince}
            approvedUntil={contract.approvedUntil}
           
            onCompleteClick={() => {
              // Handle complete button click
              console.log(`Add a claim ${contract.id} `);
            }}
            onExtendClick={() => {
              // Handle extend button click
              console.log(`Consult a claim ${contract.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}