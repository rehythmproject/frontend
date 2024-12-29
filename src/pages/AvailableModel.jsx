import Header from '../components/Header';
import Main from '../components/AvailableModel/Main';
import Side from '../components/AvailableModel/Side'
import './AvailableModel.css';
import { useState, useRef } from 'react';
import Server from '../utils/API';

const AvailableModel = () => {
  const Id = useRef(0);
  const [keepModel, setKeepModel] = useState([]);
  const  [totalPrice, setTotalPrice] = useState(0);
  const [sideView, setSideView] = useState('none');

  const handleSide = () => {
    if(sideView == 'view'){
      setSideView('none');
    }
    else {
      setSideView('view');
    }
  }

  const handleAddModel = ({data}) => {
    setKeepModel((prev) => [...prev, data ]);
    setTotalPrice((prev)=>prev+=data.price);

    const tag = data.code;

    //백엔드 연결 시
    //userId
    Server.post(`/cart/add/add/${tag}`, {
          headers: {
           'Content-Type': 'application/json' // JSON 형식 명시
          }
        })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    })
  }

  const handleDeleteModel = (deleteIndex) => {
    const minusPrice = keepModel.filter((item) => item.id === deleteIndex);
    setKeepModel((prev)=>prev.filter((item) => item.id !== deleteIndex));
    setTotalPrice((prev)=>prev-=minusPrice[0].price);

    const tag = minusPrice[0].code // 변환 결과를 modelId에 저장


    Server.delete(`cart/add/remove/${tag}`, {
          headers: {
             'Content-Type': 'application/json' // JSON 형식 명시
           }
        })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    })
  }

  return (
    <div className="AvailableModel">
      <Header/>
      <div className='avail_compo_container'>
        <Main handleAddModel={handleAddModel} Id={Id} handleSide={handleSide}/>
        <Side keepModel={keepModel} totalPrice={totalPrice} handleDeleteModel={handleDeleteModel}Id={Id} sideView={sideView}/>
      </div>
    </div>
  );
}

export default AvailableModel;
