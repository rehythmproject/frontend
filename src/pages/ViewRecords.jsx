import Header from '../components/Header';
import MainViewRecords from '../components/UseList/MainViewRecords';
import SideViewRecords from '../components/UseList/SideViewRecords';
import './ViewRecords.css'
import { useParams } from 'react-router-dom';

const ViewRecords = () => {
  const { code } = useParams();
  return (
    <div>
      <Header />
      <div className='viewRecords-container'>
        <MainViewRecords />
        <SideViewRecords />
      </div>
    </div>
  )
}

export default ViewRecords;