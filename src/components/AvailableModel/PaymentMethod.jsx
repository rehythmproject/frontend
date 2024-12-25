import React, { useState } from 'react';
import './PaymentMethod.css';
import QRCode from './QRCode';

const PaymentMethod = ({ totalPrice, closePayment, setIsPaymentCompleted, selectedMethod , setSelectedMethod}) => {

  const handleClick = (method) => {
    setSelectedMethod(method);
  };

  const handlePaymentClick = () => {
    setIsPaymentCompleted(true); 
    closePayment(); 
  };

  return (
    <div className="paymentMethod">
      {selectedMethod === 'toss' &&
      <div><h4>Payment Method</h4>
      <div className="paymentMethod-content">
        <div className="payment-option">
          <button
            className={`payment-button ${selectedMethod === 'toss' ? 'active' : ''}`}
            onClick={() => handleClick('toss')}
          >
            <img className="paymentMethod-img" src="./images/토스페이먼츠-logo.png" alt="토스" />
          </button>
          <p>Toss Pay</p>
        </div>
        <div className="payment-option">
          <button
            className={`payment-button ${selectedMethod === 'kakao' ? 'active' : ''}`}
            onClick={() => handleClick('kakao')}
          >
            <img className="paymentMethod-img" src="./images/qris_logo.png" alt="카카오" />
          </button>
          <p>Kakao Pay</p>
        </div>
      </div>
      </div>
      }
      {selectedMethod === 'toss' && (
        <div className="inputAmount">
          <h4>Amount</h4>
          <div className="inputAmount-display">
            <input type="text" value={`₩${totalPrice}`} readOnly />
          </div>
          
          <button className="submit-button" onClick={handlePaymentClick}>결제하기</button>
        </div>
      )}
      {selectedMethod === 'kakao' && (
        <div className="kakaoPayContent">
          <h4>Input Amount</h4>
          <QRCode />
          <button className="kakao-submit-button" onClick={handlePaymentClick}>결제하기</button>
        </div>
      )}
    </div>
  );
};
export default PaymentMethod;
