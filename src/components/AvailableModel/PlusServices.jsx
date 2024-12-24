import './PlusServices.css'
import PlusServiceItem from './PlusServiceItem';

const PlusServices = ({keepModel, handleDeleteModel}) => {
  return (
    <div className='plus-services'>
      <h4 className='plus-h4'>추가한 서비스</h4>
      <div className="keepModel_container">
        {
          keepModel.map((item)=>(
            <PlusServiceItem id={item.id} title={item.title} desc={item.desc} price={item.price} handleDeleteModel={handleDeleteModel}/>
          ))
        }
        </div>
    </div>
  )
}

export default PlusServices;