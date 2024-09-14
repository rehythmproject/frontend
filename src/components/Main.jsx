import './Main.css';
import RecentModelItem from './RecentModelItem';
import ModelItem from './ModelItem';

const tagName = [
    '업무','공부','회의','회의','회의'
];

const Main = () => {
    return(
        <div className="main">
            <h3 className='main_title'>최근 사용한 기능</h3>
            <ul className='recent_list' style={{padding:0}}>
                <li><RecentModelItem/></li>
                <li><RecentModelItem/></li>
                <li><RecentModelItem/></li>
                <li><RecentModelItem/></li>
            </ul>
            <div className='category_container'>
                <button className='category' style={{backgroundColor:'white', color:'black'}}>공부</button>
                <button className='category'>업무</button>
                <button className='category'>회의</button>
            </div>
            <h2 className='main_title'>Model</h2>
            <ul className='model_list' style={{padding:0}}>
                <li><ModelItem/></li>
                <li><ModelItem/></li>
                <li><ModelItem/></li>
            </ul>
        </div>
    );
}

export default Main;