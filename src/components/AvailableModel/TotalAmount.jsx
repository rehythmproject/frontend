import React, { useState, useEffect } from 'react';
import './TotalAmount.css';
import PaymentMethod from './PaymentMethod';
import PaymentCompleted from './PaymentCompleted';
import Server from '../../utils/API';

const TotalAmount = ({totalPrice}) => {
  const [orderPayment, setOrderPayment] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const salePrice = totalPrice * 0.00;
  const [selectedMethod, setSelectedMethod] = useState('toss');

  // const totalData = Server.get(`/api/cart/add/total`)
  //                   .then((res) => {
  //                     console.log(res.data);
  //                   })
  //                   .catch((err) => {
  //                     console.log(err.response.data);
  //                   })

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
    setSelectedMethod('toss');
    if(totalPrice == 0){
      alert('결제할 모델을 선택해주세요.');
      return;
    }
    setOrderPayment(true);  
    setIsPaymentCompleted(false); 
  };

  const closePayment = () => {
    // setSelectedMethod('toss');
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
            <li className='total-amount'>₩{totalPrice}</li>
          </div>
          <div className='amount-div'>
            <li className='total-label'>할인률(0%)</li>
            <li className='total-amount'>₩{salePrice}</li>
          </div>
          <hr className='total-hr'/>
          <div className='total-div'>
            <li className='total'>Total</li>
            <li className='totalmoney'>₩{totalPrice-salePrice}</li>
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
                <div className='payment-content-money'>₩{totalPrice}</div>
              </div>
              <div className='payment-content-main-money'>
                <div className='payment-content-text-money'>Tax (0%)</div>
                <div className='payment-content-money'>₩{salePrice}</div>
              </div>
              <div className='payment-content-main-money'>
                <div className='payment-content-text-money2'>Total</div>
                <div className='payment-content-money2'>₩{totalPrice-salePrice}</div>
              </div>
            </div>
            <PaymentMethod 
              totalPrice={totalPrice}
              closePayment={closePayment} 
              setIsPaymentCompleted={setIsPaymentCompleted}
              selectedMethod={selectedMethod} 
              setSelectedMethod={setSelectedMethod}
            />
          </div>
        </div>
      )}

    {isPaymentCompleted && 
      <PaymentCompleted 
        totalPrice={totalPrice}
        onRetry={handleRetryPayment}
        closePaymentCompleted={closePaymentCompleted} 
        selectedMethod={selectedMethod}
      />}
    </div>
  );
};

export default TotalAmount;
