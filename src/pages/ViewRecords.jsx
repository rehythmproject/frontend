import Header from '../components/Header';
import MainViewRecords from '../components/UseList/MainViewRecords';
import SideViewRecords from '../components/UseList/SideViewRecords';
import { useState } from 'react';
import './ViewRecords.css'
// import { useParams } from 'react-router-dom';

const ViewRecords = () => {
  // const { code } = useParams();
  const [records, setRecords] = useState([
  { modelName: 'deLLa', time: '15 May 2022', status: '프로젝트 관련' },
  { modelName: 'baleum', time: '16 May 2022', status: '개발 스택에 관해 논의' },
  { modelName: 'toron', time: '17 May 2022', status: '프로젝트 주제 선택' },
  { modelName: 'oliva', time: '17 May 2022', status: '키워드 추가' },
  { modelName: 'model5', time: '18 May 2022', status: '추가 모델1' },
  { modelName: 'model6', time: '19 May 2022', status: '추가 모델2' },
  { modelName: 'model7', time: '20 May 2022', status: '추가 모델3' },
  { modelName: 'model8', time: '21 May 2022', status: '추가 모델4' },
  { modelName: 'model9', time: '22 May 2022', status: '추가 모델5' },
  { modelName: 'model10', time: '23 May 2022', status: '추가 모델6' },
  { modelName: 'model11', time: '24 May 2022', status: '추가 모델7' },
  { modelName: 'model12', time: '24 May 2022', status: '추가 모델8' },
  { modelName: 'model13', time: '24 May 2022', status: '추가 모델9' },
  { modelName: 'model14', time: '24 May 2022', status: '추가 모델10' },
  { modelName: 'model15', time: '25 May 2022', status: '추가 모델11' },
  { modelName: 'model16', time: '25 May 2022', status: '추가 모델12' },
  { modelName: 'model17', time: '25 May 2022', status: '추가 모델13' },
  { modelName: 'model18', time: '25 May 2022', status: '추가 모델14' },
  { modelName: 'model19', time: '25 May 2022', status: '추가 모델15' },
  { modelName: 'model20', time: '25 May 2022', status: '추가 모델16' },
  { modelName: 'model21', time: '25 May 2022', status: '추가 모델17' },
  { modelName: 'model22', time: '26 May 2022', status: '추가 모델18' },
  { modelName: 'model23', time: '26 May 2022', status: '추가 모델19' },
  { modelName: 'model24', time: '26 May 2022', status: '추가 모델20' },
  { modelName: 'model25', time: '26 May 2022', status: '추가 모델21' },
  { modelName: 'model26', time: '26 May 2022', status: '추가 모델22' },
  { modelName: 'model27', time: '26 May 2022', status: '추가 모델23' },
  { modelName: 'model28', time: '26 May 2022', status: '추가 모델24' },
  { modelName: 'model29', time: '27 May 2022', status: '추가 모델25' },
  { modelName: 'model30', time: '27 May 2022', status: '추가 모델26' },
  { modelName: 'model31', time: '27 May 2022', status: '추가 모델27' },
  { modelName: 'model32', time: '28 May 2022', status: '추가 모델28' },
  { modelName: 'model33', time: '29 May 2022', status: '추가 모델29' },
  { modelName: 'model34', time: '28 May 2022', status: '추가 모델30' },
  { modelName: 'model35', time: '30 May 2022', status: '추가 모델31' },
  { modelName: 'model36', time: '30 May 2022', status: '추가 모델32' },
])

return ( 
  <div> 
    <Header /> 
    <div className="viewRecords-container"> 
    {/* records를 MainViewRecords와 SideViewRecords로 전달 */} 
    <MainViewRecords records={records} /> 
    <SideViewRecords records={records} /> 
    </div> 
  </div> 
);
}; 

export default ViewRecords;

