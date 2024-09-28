import './RecentModelItem.css';

const RecentModelItem = ({item}) => {

    const tag_styles = {
        공부: {backgroundColor: '#E6F8EF', color: '#01703C'},
        업무: {backgroundColor: '#FEEEEC', color: '#943228'},
        회의: {backgroundColor: '#FFF3E6', color: '#9C5400'},

    };
    const current_tag_style = tag_styles[item.model_tag] || {}; // 기본 스타일 설정

    return(
        <div className='recent_item'>
            <div className='title'>
                <p style={{fontWeight:'bold', fontSize:'18px', marginTop: '3px'}}>{item.title}</p>
                <span className='model_code'>{item.code}</span>
            </div>
            <p style={{color:'#969BA7'}}>{item.desc}</p>
            <div className="tag" style={current_tag_style}>{item.model_tag}</div>
        </div>
    );
}

export default RecentModelItem;