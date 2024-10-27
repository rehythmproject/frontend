import Header from '../components/Header';
import MainViewRecords from '../components/UseList/MainViewRecords';
import SideViewRecords from '../components/UseList/SideViewRecords';
import './ViewRecords.css'

const ViewRecords = () => {
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