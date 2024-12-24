
const PlusServiceItem = ({id,title, price,handleDeleteModel}) => {
    return(
        <div className='service-item'>
          <img className='model-img' src="./images/주문 목록1.png" alt="delLa" />
          <div className='modelinfo'>
            <div className='modelname'>{title}</div>
            <div className='money-main-div'>
                <button className='minus' onClick={()=>handleDeleteModel(id)}>-</button>
                <div className='money-div'>₩{price}</div>
            </div>
          </div>
        </div>
    )
}

export default PlusServiceItem;

