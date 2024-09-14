import './PlusInformation.css';

const PlusInformation = () => {
  return (
      <div className='information-maindiv'>
        <h4 className='information-h4'>추가적인 정보 적기</h4>
        <input className='write-input' type="text" placeholder=" 작성" />
        <div className='write-div'>
          <input className='write-input' type="text" placeholder=" 더 작성하기"/>
          <button className='write-button'><img src="./images/arrow-right.png" alt="아래표시" /></button>
        </div>
      
        <button className="add-button">
          <div className='add-div'>
            <img src="./images/pencil-square.png" alt="편집" style={{background:'none', width:'17px'}}/>
            <span className='Add-span'> Add Note</span>
          </div>
        </button>
      </div>      
  )
}

export default PlusInformation;