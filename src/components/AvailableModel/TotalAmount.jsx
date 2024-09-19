import './TotalAmount.css'

const TotalAmount = () => {
  return (
    <div className='mainamount-div'>
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
      </div>     
      <button className='start-button'>start !</button>
    </div>
  )
}

export default TotalAmount;