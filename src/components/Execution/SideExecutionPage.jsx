import './SideExecutionPage.css'

const SideExecutionPage = () => {
  return (
    <div className='SideExecutionPage'>
      <div className='sideExecution_section'>
          <div style={{ display: "flex" }}>
            <h4>내 메모</h4>
            <p className='sideExecution_subtext'>(회의, 녹음 중일 때도 사용 가능)</p>
          </div>
          <textarea className='sideExecution_input'></textarea>
          <div className='sideExecution_line'></div>
          <div>
            <button className='sideExecution_button'>
              <img src="/images/메모저장.png" alt="메모저장" /> 메모저장
            </button>
          </div>
        </div>
    </div>
  )
}

export default SideExecutionPage