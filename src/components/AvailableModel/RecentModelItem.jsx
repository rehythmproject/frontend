import './RecentModelItem.css';

const RecentModelItem = () => {
    return(
        <div className='recent_item'>
            <div className='title'>
                <p style={{fontWeight:'bold', fontSize:'18px', marginTop: '3px'}}>oliva</p>
                <span className='model_code'>#12532</span>
            </div>
            <p style={{color:'#969BA7'}}>3 Items ⦁ Table 4A</p>
            <div className="tag">업무</div>
        </div>
    );
}

export default RecentModelItem;