import './Main.css';
import RecentModelItem from './RecentModelItem';
import ModelItem from './ModelItem';
import { useState } from 'react';

const recentItemList = [
    {
        title: 'oliva',
        code: '12532',
        desc: '3 Items ⦁ Table 4A',
        model_tag: '업무'
    },
    {
        title: 'delLa',
        code: '17332',
        desc: '3 Items ⦁ Table 8B',
        model_tag: '공부'
    },
    {
        title: 'Kylian',
        code: '12531',
        desc: '12 Items ⦁ Table 2C',
        model_tag: '회의'
    },
    {
        title: 'baleum',
        code: '12345',
        desc: '12 Items ⦁ 6 Sold',
        model_tag: '공부'
    },
    {
        title: 'baleum',
        code: '12346',
        desc: '12 Items ⦁ 6 Sold',
        model_tag: '공부'
    },
    {
        title: 'baleum',
        code: '12347',
        desc: '12 Items ⦁ 6 Sold',
        model_tag: '공부'
    }
]

const allModelList = [
    {
        tag: '공부',
        title: 'barum',
        desc: '음성인식을 통해 외국어 발음 교정을 해줘요!',
        price: 100,
        code: 'BAR-04'
    },
    {
        tag: '회의',
        title: 'delLa',
        desc: '회의내용들을 분석해 회의 솔루션을 제공해요!',
        price: 100,
        code: 'DEL-02'
    },
    {
        tag: '회의',
        title: 'yoyak',
        desc: '긴 회의의 내용을 효율적으로 요약해줘요!',
        price: 100,
        code: 'YOY-06'
    },
    {
        tag: '업무',
        title: 'toron',
        desc: '토론 시 주제에 기반하는 근거자료들을 찾아줘요!',
        price: 100,
        code: 'TOR-03'
    },
    {
        tag: '업무',
        title: 'dobi',
        desc: '로드맵과 계획 날짜 등을 정리해줘요!',
        price: 100,
        code: 'DOB-05'
    },
    {
        tag: '회의',
        title: 'bigyo',
        desc: '회의의 문제점을 찾아 피드백을 제공해요!',
        price: 100,
        code: 'BIG-01'
    },
]

const Main = ({handleAddModel,Id,handleSide}) => {
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
                        <li key={item}><RecentModelItem item={item} /></li>
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
                {
                    allModelList
                    .filter((item)=>item.tag == category)
                    .map((item)=>(
                        <li><ModelItem Id={Id} tag={item.tag} title={item.title} desc={item.desc} price={item.price} code={code} handleAddModel={handleAddModel}/></li>
                    ))
                }
            </ul>
            <button className='side_button' onClick={handleSide}>Side</button>
        </div>
    );
}

export default Main;