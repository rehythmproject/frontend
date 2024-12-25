import { useRef } from 'react'
import './ModelItem.css'

const ModelItem = ({Id, tag, title, desc, price, handleAddModel}) => {
    
    const data = {
        id: Id.current,
        tag: tag,
        title: title,
        desc: desc,
        price: price
    }

    const onclickPlus = () => {
        Id.current += 1;
        handleAddModel({data});
    }
    
    return(
        <div className="model_item">
            <div className="model_main">
                <div className="image_container">
                    <img src={`/images/${title}.png`} alt="delLa" style={{width:'110px', borderRadius: '10px'}} />
                </div>
                <div className='model_detail'>
                    <p className='model_title'>{title}</p>
                    <p className='model_desc'>{desc}</p>
                    <p className='model_desc2'>12 Available ⦁ 6 Sold</p>
                </div>
            </div>
            <div className='model_bottom'>
                <p className='model_price_unit'>₩<span className='model_price'>{price}</span></p>
                <button className='model_add' onClick={()=>onclickPlus()}>+</button>
            </div>
            
        </div>
    );
}

export default ModelItem;