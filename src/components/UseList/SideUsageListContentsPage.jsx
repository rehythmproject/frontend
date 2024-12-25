import './SideUsageListContentsPage.css';
import { useParams } from 'react-router-dom';

const SideUsageListContentsPage = () => {
  const { code } = useParams();
  return (
    <div className='SideUsageListContentsPage'>
      <div className='SideUsageListContentsPage_container'>
        <h4>부가 정보</h4>
        <div className='order_number'>
          <p>Order Number {code}</p>
          <p className='order_number_time'>10:34 AM</p>
        </div>
        <div className='div_line'></div>
        <div className='info_item'>현재 자연환경 같은 프로젝트를 진행중</div>
        <div className='info_item'>적절한 외부 api를 사용해야됨</div>
        <div className='info_item' style={{ marginBottom: "1rem" }}>기능이 부족함</div>
        <div className='div_line'></div>
        <div className='div_line'></div>
        
        <div className='memo_section'>
          <div style={{ display: "flex" }}>
            <h4>내 메모</h4>
            <p className='memo_subtext'>(회의, 녹음 중일 때도 사용 가능)</p>
          </div>
          <textarea className='memo_input'></textarea>
          <div className='div_line2'></div>
          <div>
            <button className='memo_save_button'>
              <img src="/images/메모저장.png" alt="메모저장" /> 메모저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideUsageListContentsPage;
