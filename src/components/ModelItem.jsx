import './ModelItem.css'

const ModelItem = () => {
    return(
        <div className="model_item">
            <div className="model_main">
                <div className="image_container">
                    <img src="/images/delLa.png" alt="delLa" style={{width:'110px', borderRadius: '10px'}} />
                </div>
                <div className='model_detail'>
                    <p className='model_title'>delLa</p>
                    <p className='model_desc'>공부할 내용을 AI에게 설명하면 로드맵을 생성해줘요!</p>
                    <p className='model_desc2'>12 Available ⦁ 6 Sold</p>
                </div>
            </div>
            <div className='model_bottom'>
                <p className='model_price_unit'>₩<span className='model_price'>100</span></p>
                <button className='model_add'>+</button>
            </div>
            
        </div>
    );
}

export default ModelItem;