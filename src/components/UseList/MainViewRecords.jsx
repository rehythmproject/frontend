import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './MainViewRecords.css';


const useModelList = [
  {
      title: '몬드리안 회사와 미팅',
      code: '1234',
  },
  {
      title: '새 프로젝트 진행 회의',
      code: '1235',
  },
  {
      title: '내 개인 발음교정',
      code: '3553',
  },
  {
      title: '기후변화 토론 정리',
      code: '1253'
  }
]

const MainViewRecords = ({records = []}) => {
  const navigate = useNavigate();
  const { code } = useParams(); 

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

  const handleRecordClick = (records) => {
    console.log(`Navigating with record: ${records.modelName}`);
    navigate(`/useModelPage/UsageListContentsPage/${code}`); 
  };

  return (
    <div className='mainViewRecords'>
      <div className='mainViewRecords_title'>
        {
          useModelList
          .filter((item) => (item.code.includes(code)))
          .map((item) => (<h3>{item.title}</h3>))
          }
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
          <div>회의 제목</div>
        </div>

        <div className='table_container'>
          <table>
            <tbody>
              {currentRecords.map((records, index) => (
                <tr key={index} onClick={() => handleRecordClick(records)}>
                  <td className='record_modelName'>{records.modelName}</td>
                  <td className='record_time'>{records.time}</td>
                  <td className='record_status'>{records.status}</td>
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