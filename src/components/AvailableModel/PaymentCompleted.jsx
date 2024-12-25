import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentCompleted.css';

const PaymentCompleted = ({ totalPrice, onRetry, closePaymentCompleted, selectedMethod }) => {
  const [paymentStatus, setPaymentStatus] = useState('success'); // failure or success
  const navigate = useNavigate();

  const getNowdate = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handlePaymentCompletedClick = () => {
    closePaymentCompleted();
  };

  const handleExecutionPage = () => {
    navigate('/execution');
  };

  const getPaymentMethodName = () => {
    console.log('Selected Method in PaymentCompleted:', selectedMethod);
    if (selectedMethod === 'toss') {
      return 'toss payments';
    } else if (selectedMethod === 'kakao') {
      return 'KaKaoPay';
    } else {
      return 'Unknown';
    }
  };

  return (
    <div className="payment-completed-overlay">
      {paymentStatus === 'failure' ? (
        <div className="payment-completed-container1">
          <div className="payment-message">
            <div className="circle-icon1">
              <span className="icon-text">❌</span>
            </div>
            <div>
              <h5>결제가 완료되지 않았습니다!</h5>
              <p className="amount1">₩{totalPrice}</p>
            </div>
          </div>
          <p className="error-message">
            한도초과, 결제금액 미달 등으로 인하여 결제가 원활하게 이루어지지 않았습니다. 재시도 부탁드립니다.
          </p>
          <div className="payment-line"></div>
          <p className="payment-method">Payment Method <span>{getPaymentMethodName()}</span></p>
          <p className="payment-time">Payment Time <span>{getNowdate()}</span></p>
          <button className="retry-button" onClick={onRetry}>다시 결제하기</button>
        </div>
      ) : paymentStatus === 'success' ? (
        <div className="payment-completed-container2">
          <div className="payment-message">
            <div className="circle-icon2">
              <img className="payment-img" src="/images/결제완료.png" alt="결제완료이미지" />
            </div>
            <div>
              <h5>결제가 완료되었습니다!</h5>
              <p className="amount2">₩{totalPrice}</p>
            </div>
          </div>
          <p className="success-message">
            당신의 업무, 공부 도우미 AI 서비스가 결제 되었습니다! 실행 버튼을 <br /> 눌러 사용하면 됩니다!
          </p>
          <div className="payment-line"></div>
          <p className="payment-method">Payment Method <span>{getPaymentMethodName()}</span></p>
          <p className="payment-time">Payment Time <span>{getNowdate()}</span></p>
          <button className="retry-button" onClick={handleExecutionPage}>바로 실행하기</button>
          <button className="close-button" onClick={handlePaymentCompletedClick}>닫기</button>
        </div>
      ) : null}
    </div>
  );
};

export default PaymentCompleted;
