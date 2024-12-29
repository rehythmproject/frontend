
const PlusServiceItem = ({id,title, price,handleDeleteModel, amount}) => {
    return(
        <div className='service-item'>
          <img className='model-img' src={`/images/${title}2.png`} alt="delLa" />
          <div className='modelinfo'>
            <div className='modelname'>{title}</div>
            <div className='money-main-div'>
                <div className='minus'>{amount}</div>
                <button className='minus' onClick={()=>handleDeleteModel(id)}>-</button>
                <div className='money-div'>₩{price}</div>
            </div>
          </div>
        </div>
    )
}

export default PlusServiceItem;

