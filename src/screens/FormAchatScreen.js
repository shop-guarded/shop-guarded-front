import React, { useState } from 'react';
import './FormAchatScreen.css';
import Navbar from "../components/Navbar";

function FormAchatScreen() {
  const [contractType, setContractType] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [theftProtection, setTheftProtection] = useState(false);
  const [contractTerms, setContractTerms] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cin, setCin] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleNext = () => {
    // Handle next button click, e.g., form submission or navigation
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="form-left">
          <h1 className="center-title">The best protection for your smartphone</h1>
          <div className="form-group">
            <label htmlFor="contractType">Type of Contract:</label>
            <select className="form-input" id="contractType" value={contractType} onChange={(e) => setContractType(e.target.value)}>
              <option value="">Select...</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pricePerDay">Price/Day:</label>
            <input className="form-input" type="text" id="pricePerDay" value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} />
          </div>
          <div className="form-group">
            <div className="checkbox-container">
              <label htmlFor="theftProtection" className="checkbox-label">Theft Protection:</label>
              <input 
                className="checkbox-input" 
                type="checkbox" 
                id="theftProtection" 
                checked={theftProtection} 
                onChange={(e) => setTheftProtection(e.target.checked)} 
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contractTerms">Contract Terms:</label>
            <textarea className="form-input" id="contractTerms" value={contractTerms} onChange={(e) => setContractTerms(e.target.value)} />
          </div>
        </div>
        <div className="form-right">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input className="form-input" type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input className="form-input" type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className="form-input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="cin">CIN:</label>
            <input className="form-input" type="text" id="cin" value={cin} onChange={(e) => setCin(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input className="form-input" type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input className="form-input" type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="form-footer">
        <button className="form-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default FormAchatScreen;
