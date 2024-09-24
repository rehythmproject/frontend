import React, { useEffect } from 'react';
import './PaymentCompleted.css';

const PaymentCompleted = ({ onRetry }) => {

  useEffect(() => {
    // 스크롤 비활성화
    document.body.style.overflow = 'hidden';

    // 컴포넌트가 언마운트되면 스크롤 다시 활성화
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="payment-completed-overlay">
      <div className="payment-completed-container">
        <div className='payment-message'>
        <div className="circle-icon">
            <span className="icon-text">❌</span>
          </div>
          <div>
            <h5>결제가 완료되지 않았습니다!</h5>
            <p className="amount">₩982.00</p>
          </div> 
        </div>
        <p className="error-message">한도초과, 결제금액 미달 등으로 인하여 결제가 원활하게 이루어 지지 않았습니다. 재시도 부탁드립니다.</p>
        <div className='payment-line'></div>
        <p className="payment-method">Payment Method <span>kakao Pay</span></p>
        <p className="payment-time">Payment Time <span>22/02/2024 10:15 AM</span></p>
        <button className="retry-button" onClick={onRetry}>다시 결제하기</button>
      </div>
    </div>
  );
};

export default PaymentCompleted;
