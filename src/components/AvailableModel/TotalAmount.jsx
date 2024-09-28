import React, { useState, useEffect } from 'react';
import './TotalAmount.css';
import PaymentMethod from './PaymentMethod';
import PaymentCompleted from './PaymentCompleted';

const TotalAmount = () => {
  const [orderPayment, setOrderPayment] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  useEffect(() => {
    if (orderPayment) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [orderPayment]);

  const openPayment = () => {
    setOrderPayment(true);  
    setIsPaymentCompleted(false); 
  };

  const closePayment = () => {
    setOrderPayment(false); 
  };

  const closePaymentCompleted = () => {
    setOrderPayment(false); 
    setIsPaymentCompleted(false);
  }

  const handleRetryPayment = () => {
    openPayment(); 
  };

  return (
    <div className='mainamount-div'>
      {!orderPayment && !isPaymentCompleted && (
        <div className='alltotal-div'>
          <div className='amount-div'>
            <li className='total-label'>총금액</li>
            <li className='total-amount'>₩250</li>
          </div>
          <div className='amount-div'>
            <li className='total-label'>할인률(0%)</li>
            <li className='total-amount'>₩250</li>
          </div>
          <hr className='total-hr'/>
          <div className='total-div'>
            <li className='total'>Total</li>
            <li className='totalmoney'>₩250</li>
          </div>
          <button className='start-button' onClick={openPayment}>start !</button>
        </div>
      )}

      {orderPayment && (
        <div className='payment-background'>
          <div className='payment-content' onClick={(e) => e.stopPropagation()}>
            <div className='payment-header'>
              <div>
                <h3>결제 하기</h3>
                <p>내 주문</p>
              </div>
              <button onClick={closePayment}>✕</button>
            </div>
            <div className='payment-information'>
              <div className='payment-content-main-money'>
                <div className='payment-content-text-money'>Subtotal</div>
                <div className='payment-content-money'>₩882.00</div>
              </div>
              <div className='payment-content-main-money'>
                <div className='payment-content-text-money'>Tax (10%)</div>
                <div className='payment-content-money'>₩38.20</div>
              </div>
              <div className='payment-content-main-money'>
                <div className='payment-content-text-money2'>Total</div>
                <div className='payment-content-money2'>₩982.00</div>
              </div>
            </div>
            <PaymentMethod 
              closePayment={closePayment} 
              setIsPaymentCompleted={setIsPaymentCompleted} 
            />
          </div>
        </div>
      )}

    {isPaymentCompleted && 
      <PaymentCompleted 
        onRetry={handleRetryPayment}
        closePaymentCompleted={closePaymentCompleted} 
      />}
    </div>
  );
};

export default TotalAmount;