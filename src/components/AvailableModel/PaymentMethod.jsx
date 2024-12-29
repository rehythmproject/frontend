import React, { useState } from 'react';
import './PaymentMethod.css';
import QRCodeComponent from './QRCodeComponent ';
import Server from '../../utils/API';

const PaymentMethod = ({ totalPrice, closePayment, setIsPaymentCompleted, selectedMethod , setSelectedMethod}) => {
  const [qrUrl, setQrUrl] = useState(null);

  // 결제 준비 api 호출
  const handlePaymentClick = async () => {
    try {
      const response = await Server.post('/order/pay/ready', {
        name: 'barum',       // 상품 이름
        totalPrice: totalPrice, // 결제 금액
      });
      if (response.status === 200) {
        const data = response.data;
        setQrUrl(data.next_redirect_pc_url); // QR 코드 URL
        console.log('결제 준비 성공:', data);
      } else {
        alert('결제 준비에 실패했습니다.');
      }
    } catch (error) {
      console.error('결제 준비 중 오류:', error.response || error.message);
      alert('결제 준비 중 오류가 발생했습니다.');
    }
  };
  

  const handleClick = (method) => {
    setSelectedMethod(method);
  }

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
          {qrUrl ? (
            <QRCodeComponent qrUrl={qrUrl}/> //동적 qr 코드 생성
          ) : (
            <div>
            <p className="transaction-text">Waiting for transaction confirmation</p>
            <div className="loading_spinner_box" style={{marginTop:'60px'}}>
                <div className="loading_spinner" />
            </div>
            <button className="kakao-submit-button" onClick={handlePaymentClick}>결제하기</button>
            </div>
          )}         
        </div>
      )}
    </div>
  );
};
export default PaymentMethod;
