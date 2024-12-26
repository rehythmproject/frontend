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

    const modelId = data.title.toLowerCase();

    //백엔드 연결 시
    //userId
    // Server.post(`/cart/${userId}/add/${modelId}`,{

    // })
    // .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((err) => {
    //   console.log(err.response.data);
    // })
  }

  const handleDeleteModel = (deleteIndex) => {
    const minusPrice = keepModel.filter((item) => item.id === deleteIndex);
    setKeepModel((prev)=>prev.filter((item) => item.id !== deleteIndex))
    setTotalPrice((prev)=>prev-=minusPrice[0].price);

    // const modelId = minusPrice[0].title.toLowerCase(); // 변환 결과를 modelId에 저장


    // Server.delete(`/api/cart/${userId}/remove/${modelId}`)
    // .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((err) => {
    //   console.log(err.response.data);
    // })
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
