import './Main.css';
import RecentModelItem from './RecentModelItem';
import ModelItem from './ModelItem';
import { useState } from 'react';

const Main = () => {
    const [category, setCategory] = useState('공부');
    const onClickCategory = (e) => {
        setCategory(e.target.textContent);
    }
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
                <button className='category' style={{backgroundColor: category==='공부' &&'white', color:category==='공부' &&'black'}} onClick={onClickCategory}>공부</button>
                <button className='category' style={{backgroundColor: category==='업무' &&'white', color:category==='업무' &&'black'}} onClick={onClickCategory}>업무</button>
                <button className='category' style={{backgroundColor: category==='회의' &&'white', color:category==='회의' &&'black'}} onClick={onClickCategory}>회의</button>
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