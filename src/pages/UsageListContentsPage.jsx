import Header from '../components/Header';
import MainUsageListContentsPage from '../components/UseList/MainUsageListContentsPage';
import SideUsageListContentsPage from '../components/UseList/SideUsageListContentsPage';
import './ViewRecords.css'

const UsageListContentsPage = () => {
  return (
    <div>
      <Header />
      <div className='viewRecords-container'>
        <MainUsageListContentsPage />
        <SideUsageListContentsPage />
      </div>
    </div>
  )
}

export default UsageListContentsPage;