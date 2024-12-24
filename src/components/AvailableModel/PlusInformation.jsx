import React from 'react';
import { useState, useRef } from 'react';
import './PlusInformation.css';

const PlusInformation = () => {
  const [plusInformation, setPlusInformation] = useState(false);
  const [title, setTitle] = useState(''); 
  const [purpose, setPurpose] = useState('');

  const titleInputRef = useRef(null);
  const purposeInputRef = useRef(null);

  const openInformation = () => {
    if (!title) {
      alert('제목을 입력해주세요.');
      if (titleInputRef.current) {
        titleInputRef.current.focus(); 
      } 
      return;
    }

    if (!purpose) {
      alert('목적을 입력해주세요.');
      if (purposeInputRef.current) {
        purposeInputRef.current.focus(); 
      }
      return;
    }

    setPlusInformation(true);
  }
  const closeInformation = () => {
    setPlusInformation(false)
  }

  const handleYesClick = () => {
    setTitle(''); 
    setPurpose(''); 
    setPlusInformation(false); 
  };

  return (
      <div className='information-maindiv'>
        <h4 className='information-h4'>활동중인 내용</h4>
          <input className='write-input' type="text" placeholder=" 제목작성 (16자이내)" maxLength={16} value={title} onChange={(e)=>setTitle(e.target.value)} ref={titleInputRef}/>
          <input className='write-input' type="text" placeholder="회의목적작성" value={purpose} onChange={(e) => setPurpose(e.target.value)} ref={purposeInputRef}/>
      
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
              <p className='data_div_title'><strong>제목:</strong> {title}</p>
              <p><strong>목적:</strong> {purpose}</p>
            </div>
            <button className='information-cancel-button' onClick={closeInformation}>Cancel</button>
            <button className='information-yes-button' onClick={handleYesClick}>yes</button>
          </div>
        </div>
      )}
      </div>      
  )
}

export default PlusInformation;
