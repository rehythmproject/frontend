import './PlusServices.css'
import PlusServiceItem from './PlusServiceItem';
import Server from "../../utils/API";
import { useEffect, useState } from 'react';



const PlusServices = ({modelRefresh, handleDeleteModel}) => {
  const [modelList, setModelList] = useState([]);

  useEffect(() => {
    const modelData = async () => {
      Server.get(`/cart/add`, {
          headers: {
            'Content-Type': 'application/json', // JSON 형식 명시
          },
        })
        .then((response) => {
          console.log(response.data);
          setModelList(response.data.items); // 데이터 상태 설정
        })
        
      .catch ((error) => {
        console.error('plus:', error.response?.data || error.message);
      })
    };
    modelData();
  },[modelRefresh])

  return (
    <div className='plus-services'>
      <h4 className='plus-h4'>추가한 서비스</h4>
      <div className="keepModel_container">
        {
          modelList.map((item)=>(
            <PlusServiceItem id={item.dataModel.tag} title={item.dataModel.name} desc={item.dataModel.description} price={item.dataModel.price} handleDeleteModel={handleDeleteModel} amount={item.quantity}/>
          ))
        }
        </div>
    </div>
  )
}
  
export default PlusServices