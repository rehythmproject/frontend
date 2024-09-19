import './PlusServices.css'

const PlusServices = () => {
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
    </div>
  )
}

export default PlusServices;