import Header from "../components/Header";
import DateSelection from "../components/UseList/DateSelection";
import SearchBox from "../components/UseList/SearchBox";
import UseModelItem from "../components/UseList/UseModelItem";
import './UseModelPage.css';


const useModelList = [
    {
        title: '몬드리안 회사와 미팅',
        code: '#1234',
        model_tag: '업무',
        date: '2024-10-21',
        total: 542.00
    },
    {
        title: '새 프로젝트 진행 회의',
        code: '#1235',
        model_tag: '회의',
        date: '2024-08-21',
        total: 124.00
    },
    {
        title: '내 개인 발음교정',
        code: '#3553',
        model_tag: '공부',
        date: '2024-04-21',
        total: 124.00
    },
    {
        title: '기후변화 토론 정리',
        code: '#1253',
        model_tag: '공부',
        date: '2024-09-21',
        total: 124.00
    }
]

const UseModelPage = () => {


    return(
        <div className="UseModelPage">
            <Header />
            <div className="usemodel_compo_container">
                <div className="usemodel_top">
                    <h3 style={{whiteSpace: 'nowrap'}}>사용한 목록</h3>
                    <div className="usemodel_top_right"> 
                        <SearchBox />
                        <DateSelection />
                    </div>
                </div>
                <div className="usemodel_main">
                    <h3 style={{whiteSpace: 'nowrap'}}>모델 사용 기록들</h3>
                    <div>
                        <ul className='usemodel_list' style={{padding:0}}>
                            {
                            useModelList.map((item) => (
                                <li key={item.code}><UseModelItem item={item} /></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default UseModelPage;