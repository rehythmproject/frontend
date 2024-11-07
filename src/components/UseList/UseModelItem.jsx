import './UseModelItem.css';
import RecordButtons from "./RecordButtons";



const UseModelItem = ({item}) => {

    const tag_styles = {
        공부: {backgroundColor: '#E6F8EF', color: '#01703C'},
        업무: {backgroundColor: '#FEEEEC', color: '#943228'},
        회의: {backgroundColor: '#FFF3E6', color: '#9C5400'},
    };
    const current_tag_style = tag_styles[item.model_tag] || {}; // 기본 스타일 설정

    return(
        <div className="UseModelItem">
            <div className="usemodelitem_top">
                <div className="usemodelitem_top_left">
                    <div className='usemodel_imgbox'></div>
                    <div className="usemodel_desc">
                        <p className='usemodel_title'>{item.title}</p>
                        <p className='usemodel_code'>Order {item.code}</p>
                    </div>
                </div>
                <div className="usemodel_tag" style={current_tag_style}>{item.model_tag}</div>
            </div>
            <p className='usemodel_date'>{item.date}</p>
            <div className="usemodel_total_amount">
                <p>총 금액</p>
                <p className='price'>₩{item.total}.00</p>
            </div>
            <RecordButtons Code={item.code}/>
        </div>
    )
}

export default UseModelItem;