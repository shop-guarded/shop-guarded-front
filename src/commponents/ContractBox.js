import React from 'react';
import './ProductBox.css'; // You can keep the same CSS file to avoid redundancy

function ContractBox({ brandName, model, serialNumber, approvedSince, approvedUntil,  onCompleteClick, onExtendClick }) {
    return (
        <div className="product-box">
            <h2 className="product-title">Contract</h2>
            <div className="product-info">
                <p>Brand Name: {brandName}</p>
                <p>Model: {model}</p>
                <p>Serial Number: {serialNumber}</p>
                <p>Approved Since: {approvedSince}</p>
                <p>Approved Until: {approvedUntil}</p>
               
            </div>
            <div className="button-container">
                <button onClick={onCompleteClick} className="product-button">Add a claim</button>
                <button onClick={onExtendClick} className="product-button">Consult a claim</button>
            </div>
        </div>
    );
}

export default ContractBox;
