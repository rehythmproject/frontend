import React, { useState } from 'react';
import './MainViewRecords.css';

const MainViewRecords = () => {
  const records = [
    { modelName: 'deLLa', time: '10:00 AM', status: '프로젝트 관련' },
    { modelName: 'baleum', time: '09:35 PM', status: '개발 스택에 관해 논의' },
    { modelName: 'toron', time: '17 May 2022', status: '프로젝트 주제 선택' },
    { modelName: 'oliva', time: '17 May 2022', status: '키워드 추가' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;

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
      
      <div className="content-summary">
        <h4>핵심 내용 정리</h4>
        <div className="counter">120</div>
      </div>

      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>모델명</th>
              <th>Date/Time</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.modelName}</td>
                <td>{record.time}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='pagination'>
        {[1, 2, 3, 4].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <div className="page-info">
        <span>Page {currentPage} of 40</span>
      </div>
    </div>
  );
};

export default MainViewRecords;
