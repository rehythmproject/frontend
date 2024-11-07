import './SideViewRecords.css'

const SideViewRecords = () => {
  return (
    <div className='SideViewRecords'>
      <h4>전체 정보</h4>
      <div>
        <p>Order Nmber #12345</p>
        <p>10.34 AM</p>
      </div>
      <div></div>
      <div>현재 자연환경 같은 프로젝트를 진행중</div>
      <div>적절한 외부 api를 사용해야됨</div>
      <div>기능이 부족함</div>
      <div></div>
      <div></div>
      <div>
        <h4>내 메모</h4>
        <h4>(회의, 녹음 중일때도 사용가능)</h4>
      </div>
      <input type="text" />
      <hr />
      <button><img src="../images/메모저장.png" alt="메모저장" />메모저장</button>
    </div>
  )
}

export default SideViewRecords