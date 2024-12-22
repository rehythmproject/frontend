import './SideViewRecords.css';

const SideViewRecords = () => {
  return (
    <div className='SideViewRecords'>
      <div className='sideViewRecords_container'>
        <h4 style={{marginBottom: "10px"}}>주출할 회의록을 선택하세요.</h4>
        <div className='div_line'></div>
        <label className='checkbox-container'><input type="checkbox" value={1}/> <span>새 프로젝트 관련</span></label>
        <label className='checkbox-container'><input type="checkbox" value={2}/> <span>개발 스택에 관해 논의</span></label>
        <label className='checkbox-container'><input type="checkbox" value={3}/> <span>프로젝트 주제 선택</span></label>
        <div className='div_line' style={{ marginTop: "24rem", marginBottom: "30px" }}></div>
        
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
