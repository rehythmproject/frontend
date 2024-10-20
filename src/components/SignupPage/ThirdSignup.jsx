import './ThirdSignup.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ThirdSignup = () => {

  const check_num ='111111';
  const [checkNum, setCheckNum] = useState('');
  const handleCheckNumChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
        setCheckNum(value);
        console.log(checkNum);
    }
  }

  const onclickSignupButton = () => {
    if(checkNum.length < 6)
    {
        alert('인증번호 6자리를 입력해주세요.')
        return false;
    }
    else if(checkNum!==check_num){
      alert('인증번호가 일치하지 않습니다. 다시 입력해주세요.');
      setCheckNum('');
    }
    return true;
  } 
  return (
    <div className="third_signup">
          <div className='sign_input'>
            <label htmlFor="phone" className='signup_label'>휴대번호</label>
            <input type="tel" id='phone' className='signup_input' placeholder='ex) 01000000000' />
            <label htmlFor="check_num" className='signup_label' style={{ marginTop:'15px'}}>인증번호<Link style={{marginLeft:'5px',fontSize:'13px', color: '#CE7FFF', cursor:'pointer'}} onClick={() => {console.log('발송')}}>인증발송</Link><span style={{color:'#969BA7', fontWeight:400, fontSize:'14px', marginLeft:'5px'}}>인증번호 6자리를 입력해주세요.</span></label>
            <div className="check_num_container">
              <input type="text" id='check_num' className='signup_input check_number' value={checkNum} onChange={handleCheckNumChange} maxLength={6} style={{width:'80%'}}/>
              <button onClick={onclickSignupButton} className='chceck_num_button'>인증</button>
            </div>
          </div>
        
      </div>
  );
}

export default ThirdSignup;
