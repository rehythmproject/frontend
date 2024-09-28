import React from 'react';
import { useState } from 'react';
import './PlusInformation.css';

const PlusInformation = () => {
  const [plusInformation, setPlusInformation] = useState(false);
  const openInformation = () => {
    setPlusInformation(true);
  }
  const closeInformation = () => {
    setPlusInformation(false)
  }

  return (
      <div className='information-maindiv'>
        <h4 className='information-h4'>추가적인 정보 적기</h4>
        <input className='write-input' type="text" placeholder=" 작성" />
        <div className='write-div'>
          <input className='write-input' type="text" placeholder=" 더 작성하기"/>
          <button className='write-button'><img src="./images/arrow-right.png" alt="아래표시" /></button>
        </div>
      
        <button className="add-button" onClick={openInformation}>
          <div className='add-div'>
            <img src="./images/pencil-square.png" alt="편집" style={{background:'none', width:'17px'}}/>
            <span>정보 저장</span>
          </div>
        </button>
        {plusInformation && (
        <div className="modal-background">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className='modal-header'>
              <h3>정보저장</h3>
              <button onClick={closeInformation}>✕</button>
            </div>
            <div className='modal-content-div'></div>
            <p>아래와 같은 추가적인 정보들을 저장 하시겠습니까?</p>
            <div className='data-div'>
              <p>(자기가 추가로 작성한 정보의 데이터가 뜸)</p>
            </div>
            <button className='information-cancel-button' onClick={closeInformation}>Cancel</button>
            <button className='information-yes-button'>yes</button>
          </div>
        </div>
      )}
      </div>      
  )
}

export default PlusInformation;