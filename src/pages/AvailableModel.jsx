import Header from '../components/Header';
import Main from '../components/AvailableModel/Main';
import Side from '../components/AvailableModel/Side'
import './AvailableModel.css';
import { useState, useRef } from 'react';

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
  }

  const handleDeleteModel = (deleteIndex) => {
    const minusPrice = keepModel.filter((item) => item.id === deleteIndex);
    setKeepModel((prev)=>prev.filter((item) => item.id !== deleteIndex))
    setTotalPrice((prev)=>prev-=minusPrice[0].price);
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
