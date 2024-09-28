import React, { useEffect, useState } from 'react';
import './PaymentCompleted.css';
const PaymentCompleted = ({ onRetry, closePaymentCompleted }) => {
    // 결제 상태를 관리하는 상태 변수
    const [paymentStatus, setPaymentStatus] = useState('success'); // failure success
  useEffect(() => {
    // 스크롤 비활성화
    document.body.style.overflow = 'hidden';
    // 컴포넌트가 언마운트되면 스크롤 다시 활성화
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handlePaymentCompletedClick = () => {
    closePaymentCompleted();
  }
  return (
    <div className="payment-completed-overlay">
    {paymentStatus === 'failure' ? (
      <div className="payment-completed-container1">
        <div className='payment-message'>
        <div className="circle-icon1">
            <span className="icon-text">❌</span>
          </div>
          <div>
            <h5>결제가 완료되지 않았습니다!</h5>
            <p className="amount1">₩982.00</p>
          </div> 
        </div>
        <p className="error-message">한도초과, 결제금액 미달 등으로 인하여 결제가 원활하게 이루어 지지 않았습니다. 재시도 부탁드립니다.</p>
        <div className='payment-line'></div>
        <p className="payment-method">Payment Method <span>kakao Pay</span></p>
        <p className="payment-time">Payment Time <span>22/02/2024 10:15 AM</span></p>
        <button className="retry-button" onClick={onRetry}>다시 결제하기</button>
      </div>
    ) : paymentStatus === 'success' ? (
        <div className="payment-completed-container2">
          <div className='payment-message'>
            <div className="circle-icon2">
              <img className="payment-img" src="/images/결제완료.png" alt="결제완료이미지" />
            </div>
            <div>
              <h5>결제가 완료되었습니다!</h5>
              <p className="amount2">₩982.00</p>
            </div>
        </div>
        <p className="success-message">당신의 업무, 공부 도우미 ai 서비스가 결제 되었습니다! 실행 버튼을 <br />눌러 사용하면 됩니다!</p>
          <div className='payment-line'></div>
          <p className="payment-method">Payment Method <span>kakao Pay</span></p>
          <p className="payment-time">Payment Time <span>22/02/2024 10:15 AM</span></p>
          <button className="retry-button">바로 실행하기</button>
          <button className='close-button' onClick={handlePaymentCompletedClick}>닫기</button>
        </div>
    ) : null}
    </div>
  );
};
export default PaymentCompleted;