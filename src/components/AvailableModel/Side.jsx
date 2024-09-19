import './Side.css';
import ChangeButton from './ChangeButton';
import PlusInformation from './PlusInformation';
import PlusServices from './PlusServices';
import TotalAmount from './TotalAmount';

const Side = () => {
  return (
    <div className='appdiv'>
      <ChangeButton />
      <PlusInformation />
      <PlusServices />
      <TotalAmount />
    </div>
  );
}

export default Side;
