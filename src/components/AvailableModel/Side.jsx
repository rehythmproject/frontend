import './Side.css';
import ChangeButton from './ChangeButton';
import PlusInformation from './PlusInformation';
import PlusServices from './PlusServices';
import TotalAmount from './TotalAmount';

const Side = ({keepModel,totalPrice,handleDeleteModel}) => {
  return (
    <div className='appdiv'>
      <ChangeButton />
      <PlusInformation />
      <PlusServices keepModel={keepModel} handleDeleteModel={handleDeleteModel}/>
      <TotalAmount totalPrice={totalPrice}/>
    </div>
  );
}

export default Side;
