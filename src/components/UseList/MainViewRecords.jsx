import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './MainViewRecords.css';

const MainViewRecords = () => {
  const navigate = useNavigate();
  const { code } = useParams(); 

  const records = [
    { modelName: 'deLLa', time: '15 May 2022', status: '프로젝트 관련' },
    { modelName: 'baleum', time: '16 May 2022', status: '개발 스택에 관해 논의' },
    { modelName: 'toron', time: '17 May 2022', status: '프로젝트 주제 선택' },
    { modelName: 'oliva', time: '17 May 2022', status: '키워드 추가' },
    { modelName: 'model5', time: '18 May 2022', status: '추가 모델' },
    { modelName: 'model6', time: '19 May 2022', status: '추가 모델' },
    { modelName: 'model7', time: '20 May 2022', status: '추가 모델' },
    { modelName: 'model8', time: '21 May 2022', status: '추가 모델' },
    { modelName: 'model9', time: '22 May 2022', status: '추가 모델' },
    { modelName: 'model10', time: '23 May 2022', status: '추가 모델' },
    { modelName: 'model11', time: '24 May 2022', status: '추가 모델' },
    { modelName: 'model12', time: '24 May 2022', status: '추가 모델' },
    { modelName: 'model13', time: '24 May 2022', status: '추가 모델' },
    { modelName: 'model14', time: '24 May 2022', status: '추가 모델' },
    { modelName: 'model15', time: '25 May 2022', status: '추가 모델' },
    { modelName: 'model16', time: '25 May 2022', status: '추가 모델' },
    { modelName: 'model17', time: '25 May 2022', status: '추가 모델' },
    { modelName: 'model18', time: '25 May 2022', status: '추가 모델' },
    { modelName: 'model19', time: '25 May 2022', status: '추가 모델' },
    { modelName: 'model20', time: '25 May 2022', status: '추가 모델' },
    { modelName: 'model21', time: '25 May 2022', status: '추가 모델' },
    { modelName: 'model22', time: '26 May 2022', status: '추가 모델' },
    { modelName: 'model23', time: '26 May 2022', status: '추가 모델' },
    { modelName: 'model24', time: '26 May 2022', status: '추가 모델' },
    { modelName: 'model25', time: '26 May 2022', status: '추가 모델' },
    { modelName: 'model26', time: '26 May 2022', status: '추가 모델' },
    { modelName: 'model27', time: '26 May 2022', status: '추가 모델' },
    { modelName: 'model28', time: '26 May 2022', status: '추가 모델' },
    { modelName: 'model29', time: '27 May 2022', status: '추가 모델' },
    { modelName: 'model30', time: '27 May 2022', status: '추가 모델' },
    { modelName: 'model31', time: '27 May 2022', status: '추가 모델' },
    { modelName: 'model32', time: '28 May 2022', status: '추가 모델' },
    { modelName: 'model33', time: '29 May 2022', status: '추가 모델' },
    { modelName: 'model34', time: '28 May 2022', status: '추가 모델' },
    { modelName: 'model35', time: '30 May 2022', status: '추가 모델' },
    { modelName: 'model36', time: '30 May 2022', status: '추가 모델' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(0);
  
  const pagesPerGroup = 4;
  const recordsPerPage = 4;

  // 총 페이지 수 계산
  const totalPages = Math.ceil(records.length / recordsPerPage);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextGroup = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);

      if (currentPage % pagesPerGroup === 0) {
        setCurrentGroup(currentGroup + 1);
      }
    }
  };
  
  const handlePreviousGroup = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pagesPerGroup === 0) {
        setCurrentGroup(currentGroup - 1);
      }
    }
  };

  const handleRecordClick = (record) => {
    console.log(`Navigating with record: ${record.modelName}`);
    navigate(`/useModelPage/UsageListContentsPage/${code}`); 
  };

  return (
    <div className='mainViewRecords'>
      <div className='mainViewRecords_title'>
        <h3>몬드리안 회사와 미팅</h3>
        <div>사용한 모델기록</div>
      </div>

      <div className='mainViewRecords_container'>
      <div className="content_summary">
        <h4>북마크한 주요 내용들 ..</h4>
        <div className="counter">120</div>
      </div>
      
        <div className='table_name'>
          <div className='table_name_div'>
            <div>모델명</div>
            <img src="/images/chevron-up-down.png" alt="↕️" />
          </div>
          <div className='table_name_div'>
            <div>Date/Time</div>
            <img src="/images/chevron-up-down.png" alt="↕️" />
          </div>
          <div>Payment status</div>
        </div>

        <div className='table_container'>
          <table>
            <tbody>
              {currentRecords.map((record, index) => (
                <tr key={index} onClick={() => handleRecordClick(record)}>
                  <td className='record_modelName'>{record.modelName}</td>
                  <td className='record_time'>{record.time}</td>
                  <td className='record_status'>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='pageMove'>
          <div className="page_info">
            <p>Page {currentPage} of {totalPages}</p>
          </div>
          <div className='pagination'>
            <button onClick={handlePreviousGroup} disabled={currentPage === 1} className='pagination_button pagination_arrow_button'>
              <div>«</div>
            </button>
            {Array.from(
              { length: Math.min(pagesPerGroup, totalPages - currentGroup * pagesPerGroup) }, (_, index) => {
                const pageNumber = currentGroup * pagesPerGroup + index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handleClick(pageNumber)}
                    className={`pagination_button number_button ${currentPage === pageNumber ? 'active' : ''}`}
                  >
                    {pageNumber}
                  </button>
                );
              }
            )}
            <button className='pagination_button pagination_arrow_button' onClick={handleNextGroup} disabled={currentPage === totalPages}>
              <div>»</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainViewRecords;