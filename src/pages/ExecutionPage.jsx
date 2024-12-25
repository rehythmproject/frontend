import Header from '../components/Header';
import './ExecutionPage.css';
import MainExecutionPage from '../components/Execution/MainExecutionPage';
import SideExecutionPage from '../components/Execution/SideExecutionPage';

const ExecutionPage = () => {
  return (
    <div>
      <Header />
      <div className='execution_container'>
        <MainExecutionPage />
        <SideExecutionPage />
      </div>
    </div>
  )
}

export default ExecutionPage;