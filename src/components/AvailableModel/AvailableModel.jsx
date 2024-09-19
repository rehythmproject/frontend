import Header from '../Header';
import Main from './Main';
import Side from './Side'
import './AvailableModel.css';

function AvailableModel() {
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
