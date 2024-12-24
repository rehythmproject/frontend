import './PlusServices.css'
import { useState } from 'react';

const PlusServices = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'baleum', price: 150, count: 1 },
    { id: 2, name: 'toron', price: 120, count: 1 },
    { id: 3, name: 'dobi', price: 150, count: 1 },
    { id: 4, name: 'delLa', price: 100, count: 1},
    { id: 5, name: 'yoyak', price: 100, count: 1 },
    { id: 6, name: 'bigyo', price: 150, count: 1},
  ]);

  return (
    <div className='plus-services'>
      <h4 className='plus-h4'>추가한 서비스</h4>
      <div className='service-item'>
        <img className='model-img' src="./images/주문 목록1.png" alt="delLa" />
        <div className='modelinfo'>
          <div className='modelname'>delLa</div>
          <div className='money-main-div'>
            <button className='minus'>-</button>
            <div className='money-div'>₩100</div>
          </div>
        </div>
      </div>
      <div className='service-item'>
        <img className='model-img' src="./images/주문 목록2.png" alt="baleum" />
        <div className='modelinfo'>
          <div className='modelname'>baleum</div>
        <div className='money-main-div'>
        <button className='minus'>-</button>
        <div className='money-div'>₩150</div>
         </div>
        </div>
      </div>
      <div className='service-item'>
        <img className='model-img' src="./images/주문 목록2.png" alt="baleum" />
        <div className='modelinfo'>
          <div className='modelname'>baleum</div>
        <div className='money-main-div'>
        <button className='minus'>-</button>
        <div className='money-div'>₩150</div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default PlusServices