import React, { useState } from 'react';
import './PaymentMethod.css';
import QRCode from './QRCode';
const PaymentMethod = ({ closePayment, setIsPaymentCompleted }) => {
  const [selectedMethod, setSelectedMethod] = useState('toss');
  const handleClick = (method) => {
    setSelectedMethod(method);
  };
  const handlePaymentClick = () => {
    setIsPaymentCompleted(true); // 결제 완료 상태로 변경
    closePayment(); // 결제 창 닫기
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
          <h4>Input Amount</h4>
          <div className="inputAmount-display">
            <input type="text" value="₩982.00" readOnly />
          </div>
          <div className="inputAmount-keypad">
            <div className="keypad-row">
              <button className='inputAmount-keypad-button'>1</button>
              <button className='inputAmount-keypad-button'>2</button>
              <button className='inputAmount-keypad-button'>3</button>
            </div>
            <div className="keypad-row">
              <button className='inputAmount-keypad-button'>4</button>
              <button className='inputAmount-keypad-button'>5</button>
              <button className='inputAmount-keypad-button'>6</button>
            </div>
            <div className="keypad-row">
              <button className='inputAmount-keypad-button'>7</button>
              <button className='inputAmount-keypad-button'>8</button>
              <button className='inputAmount-keypad-button'>9</button>
            </div>
            <div className="keypad-row">
              <button className='inputAmount-keypad-button'>00</button>
              <button className='inputAmount-keypad-button'>0</button>
              <button className='keypad-delete'><img src="./images/delete.png" alt="삭제" /></button>
            </div>
          </div>
          <button className="submit-button" onClick={handlePaymentClick}>결제하기</button>
        </div>
      )}
      {selectedMethod === 'kakao' && (
        <div className="kakaoPayContent">
          <h4>Input Amount</h4>
          <QRCode />
          <button className="submit-button" onClick={handlePaymentClick}>결제하기</button>
        </div>
      )}
    </div>
  );
};
export default PaymentMethod;