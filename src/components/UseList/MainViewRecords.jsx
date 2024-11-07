import React, { useState } from 'react';
import './MainViewRecords.css';

const MainViewRecords = () => {
  const records = [
    { modelName: 'deLLa', time: '10:00 AM', status: '프로젝트 관련' },
    { modelName: 'baleum', time: '09:35 PM', status: '개발 스택에 관해 논의' },
    { modelName: 'toron', time: '17 May 2022', status: '프로젝트 주제 선택' },
    { modelName: 'oliva', time: '17 May 2022', status: '키워드 추가' },
    { modelName: 'model5', time: '18 May 2022', status: '추가 모델' },
    { modelName: 'model6', time: '19 May 2022', status: '추가 모델' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;

  // 총 페이지 수 계산
  const totalPages = Math.ceil(records.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='mainViewRecords'>
      <div className='mainViewRecords_title'>
        <h3>몬드리안 회사와 미팅</h3>
        <div>사용한 모델기록</div>
      </div>
      
      <div className='mainViewRecords_container'>
      <div className="content_summary">
        <h4>핵심 내용 정리</h4>
        <div className="counter">120</div>
        <div className='content_select'>
          <img src="../images/Vector.png" alt="선택" />
        </div>
      </div>

      <div className='table_name'>
              <div>
                <div>모델명</div>
                <img src="../images/chevron-up-down.png" alt="↕️" />
              </div>
              <div>
                <div>Date/Time</div>
                <img src="../images/chevron-up-down.png" alt="↕️" />
              </div>
              <div>Payment status</div>
      </div>

      <div className='table_container'>
        <table>
          <tbody>
            {currentRecords.map((record, index) => (
              <tr key={index}>
                <td className='record_modelName'>{record.modelName}</td>
                <td className='record_time'>{record.time}</td>
                <td className='record_status'>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        )).slice(0, 4)} 
      </div>

      <div className="page-info">
        <span>Page {currentPage} of {totalPages}</span>
      </div>
      </div>
    </div>
  );
};

export default MainViewRecords;
