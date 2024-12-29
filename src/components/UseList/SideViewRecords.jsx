import './SideViewRecords.css';

const SideViewRecords = ({records = []}) => {
  const uniqueStatuses = [...new Set(records.map(record => record.status))];

  return (
    <div className="SideViewRecords">
      <div className="sideViewRecords_container">
        <h4>추출할 회의록을 선택하세요.</h4>
        <div className='div_line' style={{marginTop: '16px'}}></div>
        <div className="checkbox_list">
          {uniqueStatuses.map((status, index) => (
            <label key={index} className="checkbox-container">
              <input type="checkbox" value={index + 1} />
              <span>{status}</span>
            </label>
          ))}
        </div>
        <div className='div_line'></div>
        <div>
          <button className='memo_save_button'>
            <img src="/images/메모저장.png" alt="추출" /> 추출하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideViewRecords;
