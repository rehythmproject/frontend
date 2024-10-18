import './Main.css';
import RecentModelItem from './RecentModelItem';
import ModelItem from './ModelItem';
import { useState } from 'react';

const recentItemList = [
    {
        title: 'oliva',
        code: '#12532',
        desc: '3 Items ⦁ Table 4A',
        model_tag: '업무'
    },
    {
        title: 'delLa',
        code: '#17332',
        desc: '3 Items ⦁ Table 8B',
        model_tag: '공부'
    },
    {
        title: 'Kylian',
        code: '#12531',
        desc: '12 Items ⦁ Table 2C',
        model_tag: '회의'
    },
    {
        title: 'baleum',
        code: '#12345',
        desc: '12 Items ⦁ 6 Sold',
        model_tag: '공부'
    },
    {
        title: 'baleum',
        code: '#12345',
        desc: '12 Items ⦁ 6 Sold',
        model_tag: '공부'
    },
    {
        title: 'baleum',
        code: '#12345',
        desc: '12 Items ⦁ 6 Sold',
        model_tag: '공부'
    }
]

const Main = () => {
    const [category, setCategory] = useState('공부');
    const onClickCategory = (e) => {
        setCategory(e.target.textContent);
    }
    return(
        <div className="main">
            <h3 className='main_title'>최근 사용한 기능</h3>
            <div className='recent_list_container'>
            <ul className='recent_list' style={{padding:0}}>
                {
                    recentItemList.map((item) => (
                        <li key={item.code}><RecentModelItem item={item} /></li>
                    ))
                }
            </ul>
            </div>
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
                <li><ModelItem/></li>
                <li><ModelItem/></li>
            </ul>
        </div>
    );
}

export default Main;