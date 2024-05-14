import React, { useState } from 'react';
import './PaiementScreen.css';
import Entetepaiement from "../components/Entetepaiement";

const PaiementScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleConfirm = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <div>
      <Entetepaiement />
      <div className="paiement-container">
        <div className="payment-method">
          <h2>Payment Method</h2>
          <hr />
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cheque"
              checked={selectedPaymentMethod === "Cheque"}
              onChange={handlePaymentMethodChange}
            /> Cheque
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Transfer/Bank Transfer"
              checked={selectedPaymentMethod === "Transfer/Bank Transfer"}
              onChange={handlePaymentMethodChange}
            /> Transfer/Bank Transfer
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cash Payment at Delivery"
              checked={selectedPaymentMethod === "Cash Payment at Delivery"}
              onChange={handlePaymentMethodChange}
            /> Cash Payment at Delivery
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Payment by Credit Card"
              checked={selectedPaymentMethod === "Payment by Credit Card"}
              onChange={handlePaymentMethodChange}
            /> Payment by Credit Card
          </label>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <hr />
          <label>Total Items:</label>
          <label>Shipping Cost:</label>
          <label>Insurance:</label>
          <label>Total:</label>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <p className="popup-message">Thank you! Payment completed successfully.</p>
            <button className="popup-close-button" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaiementScreen;
