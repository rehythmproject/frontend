import Header from '../components/Header';
import Main from '../components/AvailableModel/Main';
import Side from '../components/AvailableModel/Side'
import './AvailableModel.css';

const AvailableModel = () => {
  return (
    <div className="AvailableModel">
      <Header/>
      <div className='avail_compo_container'>
        <Main/>
        <Side/>
      </div>
    </div>
  );
}

export default AvailableModel;
