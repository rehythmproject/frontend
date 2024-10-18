import './ThirdSignup.css'
import { Link, useOutletContext } from 'react-router-dom';
import { useState } from 'react';

const ThirdSignup = () => {
  const [,,,,,checkPhone] = useOutletContext();
  const check_num ='111111';
  const [phone, setPhone] = useState('');
  const [checkNum, setCheckNum] = useState('');

  const handlePhone = (e) => {
    const value = e.target.value;
    // 숫자만 허용
    if (/^\d*$/.test(value) || value === '') {
      setPhone(value);
    }
  }
  const handleCheckNumChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
        setCheckNum(value);
        console.log(checkNum);
    }
  }

  const validatePhoneNumber = (phone) => {
    // 휴대전화 형식 검증 정규식
    const phonePattern = /^(01[0-9]{1})[0-9]{3,4}[0-9]{4}$/; // 예: 01012345678 또는 010-1234-5678
    return phonePattern.test(phone);
  };

  const onclickSignupButton = () => {
    if(checkNum.length < 6)
    {
        alert('인증번호 6자리를 입력해주세요.')
        return;
    }
    else if(checkNum!==check_num){
      alert('인증번호가 일치하지 않습니다. 다시 입력해주세요.');
      setCheckNum('');
      return;
    }
    checkPhone(true);
    alert('인증되었습니다.');
  } 

  const sendPhoneNumber = () => {
    if(phone === ''){
      alert('휴대번호를 입력해주세요.');
      return;
    }
    else if(phone.length < 11){
      alert('휴대번호를 확인해주세요.');
      console.log(phone.length);
      return;
    } else if(!validatePhoneNumber(phone)) {
      alert('잘못된 휴대전화 형식입니다. 다시 입력해주세요.');
      setPhone('');
      return;
    }
    alert('발송되었습니다.');
  }
  return (
    <div className="third_signup">
          <div className='sign_input'>
            <label htmlFor="phone" className='signup_label'>휴대번호</label>
            <input type="tel" id='phone' className='signup_input' placeholder='ex) 01000000000' maxLength={11} onChange={handlePhone} value={phone}/>
            <label htmlFor="check_num" className='signup_label' style={{ marginTop:'15px'}}>인증번호<Link style={{marginLeft:'5px',fontSize:'13px', color: '#CE7FFF', cursor:'pointer'}} onClick={sendPhoneNumber}>인증발송</Link><span style={{color:'#969BA7', fontWeight:400, fontSize:'14px', marginLeft:'5px'}}>인증번호 6자리를 입력해주세요.</span></label>
            <div className="check_num_container">
              <input type="text" id='check_num' className='signup_input check_number' value={checkNum} onChange={handleCheckNumChange} maxLength={6} style={{width:'80%'}}/>
              <button onClick={onclickSignupButton} className='chceck_num_button'>인증</button>
            </div>
          </div>
        
      </div>
  );
}

export default ThirdSignup;
